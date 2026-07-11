/* ============================================================
   AFJ AUTO PARTS — SITE LOGIC
   Reads from data.js and renders the page, wires up interactions,
   and submits forms to the backend (server.js) which emails via Resend.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderBusinessInfo();
  renderServices();
  renderInventory();
  renderBrands();
  renderTestimonials();
  renderFaqs();

  initMobileMenu();
  initSwiper();
  initInventoryFilter();
  initFaqAccordion();
  initPartFinder();
  initForms();
  initBackToTop();
});

/* ---------------- Contact / map / WhatsApp / phone ---------------- */
function renderBusinessInfo() {
  // Phone pill + call buttons
  document.querySelectorAll("[data-phone-display]").forEach(el => (el.textContent = BUSINESS.phoneDisplay));
  document.querySelectorAll("[data-tel-link]").forEach(el => (el.href = `tel:${BUSINESS.phoneTel}`));

  // WhatsApp links
  const waHref = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappDefaultMessage)}`;
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => (el.href = waHref));

  // Email
  document.querySelectorAll("[data-email-display]").forEach(el => (el.textContent = BUSINESS.email));
  document.querySelectorAll("[data-email-link]").forEach(el => (el.href = `mailto:${BUSINESS.email}`));

  // Address
  document.querySelectorAll("[data-address-display]").forEach(el => (el.textContent = BUSINESS.address));

  // Hours table
  const hoursTable = document.getElementById("hoursTable");
  if (hoursTable) {
    hoursTable.innerHTML = BUSINESS.hours
      .map(h => `<tr><td>${h.day}</td><td>${h.time}</td></tr>`)
      .join("");
  }

  // Live Google Maps embed (fixes the old placeholder box)
  const mapFrame = document.getElementById("mapFrame");
  if (mapFrame) {
    mapFrame.src = `https://www.google.com/maps?q=${BUSINESS.mapQuery}&output=embed`;
  }
}

/* ---------------- Services swiper (chunked into slides of 8) ---------------- */
function renderServices() {
  const wrapper = document.getElementById("servicesWrapper");
  if (!wrapper) return;

  const chunkSize = 8;
  const slides = [];
  for (let i = 0; i < SERVICES.length; i += chunkSize) {
    slides.push(SERVICES.slice(i, i + chunkSize));
  }

  wrapper.innerHTML = slides
    .map(
      slideItems => `
      <div class="swiper-slide">
        ${slideItems
          .map(
            s => `
          <div class="card">
            <img src="${s.img}" alt="${s.title}" loading="lazy">
            <div class="overlay"></div>
            <div class="content">
              <span>${s.code}</span>
              <h3>${s.title}</h3>
              ${s.desc ? `<p>${s.desc}</p>` : ""}
            </div>
          </div>`
          )
          .join("")}
      </div>`
    )
    .join("");
}

/* ---------------- Inventory ---------------- */
function renderInventory() {
  const grid = document.getElementById("invGrid");
  if (!grid) return;

  grid.innerHTML = INVENTORY.map(
    item => `
    <div class="inv-card" data-cat="${item.cat}">
      <div class="inv-media">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <span class="inv-condition">${item.condition}</span>
      </div>
      <div class="inv-body">
        <span class="cat">${item.catLabel}</span>
        <h3>${item.title}</h3>
        <p class="fits">${item.fits}</p>
        <div class="inv-foot">
          <span class="price">${item.price}</span>
          <button class="mini-btn" type="button">${item.stock}</button>
        </div>
      </div>
    </div>`
  ).join("");
}

function initInventoryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".inv-card").forEach(card => {
        card.style.display = f === "all" || card.dataset.cat === f ? "flex" : "none";
      });
    });
  });
}

/* ---------------- Brands ---------------- */
function renderBrands() {
  const grid = document.getElementById("brandsGrid");
  if (!grid) return;

  grid.innerHTML = BRANDS.map(
    b => `
    <a href="#inventory" class="brand-card" data-brand="${b.name}">
      <img src="${b.img}" alt="${b.name}" loading="lazy">
      <h3>${b.name}</h3>
    </a>`
  ).join("");
}

/* ---------------- Testimonials ---------------- */
function renderTestimonials() {
  const grid = document.getElementById("testiGrid");
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(
    t => `
    <div class="testi">
      <div class="stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
      <p>${t.text}</p>
      <div class="who"><span>${t.name}</span><span>${t.role}</span></div>
    </div>`
  ).join("");
}

/* ---------------- FAQ ---------------- */
function renderFaqs() {
  const list = document.getElementById("faqList");
  if (!list) return;

  list.innerHTML = FAQS.map(
    f => `
    <div class="faq-item">
      <button class="faq-q" type="button">${f.q}<span class="plus">+</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`
  ).join("");
}

function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
}

/* ---------------- Mobile menu ---------------- */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });
  mobileMenu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------------- Swiper ---------------- */
function initSwiper() {
  if (typeof Swiper === "undefined") return;
  // eslint-disable-next-line no-new
  new Swiper(".mySwiper", {
    loop: true,
    speed: 900,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    effect: "slide"
  });
}

/* ---------------- Part finder (scrolls to inventory) ---------------- */
function initPartFinder() {
  const findBtn = document.getElementById("findBtn");
  if (!findBtn) return;
  findBtn.addEventListener("click", () => {
    document.getElementById("inventory").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------------- Back to top ---------------- */
function initBackToTop() {
  const totop = document.getElementById("totop");
  if (!totop) return;
  window.addEventListener("scroll", () => {
    totop.classList.toggle("show", window.scrollY > 600);
  });
  totop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------------- Forms — real submission to backend (Resend email) ---------------- */
function initForms() {
  wireForm({
    formId: "quoteForm",
    endpoint: "/api/quote",
    msgElId: "formMsg",
    buildPayload: () => ({
      name: val("qName"),
      phone: val("qPhone"),
      make: val("qMake"),
      year: val("qYear"),
      part: val("qPart"),
      message: val("qMsg")
    }),
    successText: "Sent ✓",
    successMsg: "Request received — we'll call you back within one business hour."
  });

  wireForm({
    formId: "sellForm",
    endpoint: "/api/sell-car",
    buildPayload: () => ({
      makeModel: val("sMakeModel"),
      year: val("sYear"),
      condition: val("sCondition"),
      phone: val("sPhone")
    }),
    successText: "Request Sent ✓"
  });

  wireForm({
    formId: "newsletterForm",
    endpoint: "/api/newsletter",
    buildPayload: () => ({ email: val("nlEmail") }),
    successText: "Joined ✓"
  });
}

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function wireForm({ formId, endpoint, buildPayload, successText, msgElId, successMsg }) {
  const form = document.getElementById(formId);
  if (!form) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  const msgEl = msgElId ? document.getElementById(msgElId) : null;
  const originalText = submitBtn ? submitBtn.textContent : "";

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const payload = buildPayload();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Request failed");

      if (submitBtn) submitBtn.textContent = successText;
      if (msgEl) {
        msgEl.textContent = successMsg || "Thanks — we received your request.";
        msgEl.classList.add("show");
      }
      form.reset();
    } catch (err) {
      console.error(err);
      if (submitBtn) submitBtn.textContent = "Couldn't send — try again";
      if (msgEl) {
        msgEl.textContent = "Something went wrong sending your request. Please call us instead.";
        msgEl.classList.add("show");
      }
    } finally {
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
        if (msgEl) msgEl.classList.remove("show");
      }, 3200);
    }
  });
}
