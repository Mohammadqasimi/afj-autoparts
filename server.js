/* ============================================================
   AFJ AUTO PARTS — BACKEND
   Serves the static site and exposes 3 endpoints that email form
   submissions to your Gmail address using Resend.

   Setup:
     1. npm install
     2. Copy .env.example to .env and fill in the values
     3. npm start
   ============================================================ */

require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL;           // your Gmail address, receives the leads
const FROM_EMAIL = process.env.FROM_EMAIL || "AFJ Auto Parts <onboarding@resend.dev>";

if (!RESEND_API_KEY) {
  console.warn("⚠️  RESEND_API_KEY is not set. Form emails will fail until you add it to .env");
}
if (!TO_EMAIL) {
  console.warn("⚠️  TO_EMAIL is not set. Set it to the Gmail address that should receive leads.");
}

app.use(express.json());
app.use(express.static(path.join(__dirname)));

/** Sends an email through the Resend REST API. */
async function sendEmail({ subject, html, replyTo }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {})
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend error (${res.status}): ${errText}`);
  }
  return res.json();
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---------------- Quote / part request form ---------------- */
app.post("/api/quote", async (req, res) => {
  try {
    const { name, phone, make, year, part, message } = req.body || {};
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required." });
    }

    await sendEmail({
      subject: `New Part Quote Request — ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Vehicle Make:</b> ${escapeHtml(make) || "-"}</p>
        <p><b>Vehicle Year:</b> ${escapeHtml(year) || "-"}</p>
        <p><b>Part Needed:</b> ${escapeHtml(part) || "-"}</p>
        <p><b>Message:</b> ${escapeHtml(message) || "-"}</p>
      `
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send request." });
  }
});

/* ---------------- Sell / scrap car form ---------------- */
app.post("/api/sell-car", async (req, res) => {
  try {
    const { makeModel, year, condition, phone } = req.body || {};
    if (!makeModel || !phone) {
      return res.status(400).json({ error: "Make/model and phone are required." });
    }

    await sendEmail({
      subject: `Cash For Car Request — ${makeModel}`,
      html: `
        <h2>Sell / Scrap Car Request</h2>
        <p><b>Make &amp; Model:</b> ${escapeHtml(makeModel)}</p>
        <p><b>Year:</b> ${escapeHtml(year) || "-"}</p>
        <p><b>Condition:</b> ${escapeHtml(condition) || "-"}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
      `
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send request." });
  }
});

/* ---------------- Newsletter signup ---------------- */
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    await sendEmail({
      subject: "New Newsletter Signup",
      html: `<h2>New Newsletter Signup</h2><p><b>Email:</b> ${escapeHtml(email)}</p>`
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send request." });
  }
});

app.listen(PORT, () => {
  console.log(`AFJ Auto Parts server running at http://localhost:${PORT}`);
});
