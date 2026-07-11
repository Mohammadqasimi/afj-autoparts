/* ============================================================
   AFJ AUTO PARTS — SITE DATA
   Edit these arrays to add/remove/change what shows on the page.
   No HTML editing required for content changes.
   ============================================================ */

// ---- Services / "Shop by category" swiper cards ----
const SERVICES = [
  { code: "SVC-01", img: "car-engine-25780404.jpg", title: "Engines", desc: "Quality tested engines." },
  { code: "SVC-02", img: "22793_2026_EV9_GT-2048x1152.jpg", title: "Transmission", desc: "Manual & Automatic." },
  { code: "SVC-03", img: "Dacia_Logan_MCV_Model_2009_05.JPG", title: "Doors", desc: "OEM body parts." },
  { code: "SVC-04", img: "logo-removebg-preview.png", title: "Headlights", desc: "Original headlights." },
  { code: "SVC-05", img: "ghostbb.webp", title: "Bumpers", desc: "Front & Rear bumpers." },
  { code: "SVC-06", img: "images/car6.jpg", title: "Mirrors", desc: "Electric mirrors." },
  { code: "SVC-07", img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp", title: "Suspension", desc: "High quality parts." },
  { code: "SVC-08", img: "spectre.webp", title: "New Arrivals", desc: "Latest stock available." },
  { code: "SVC-09", img: "22793_2026_EV9_GT-2048x1152.jpg", title: "Radiator", desc: "" },
  { code: "SVC-10", img: "car-engine-25780404.jpg", title: "Alternator", desc: "" },
  { code: "SVC-11", img: "Dacia_Logan_MCV_Model_2009_05.JPG", title: "Starter", desc: "" },
  { code: "SVC-12", img: "ghostbb.webp", title: "Steering", desc: "" },
  { code: "SVC-13", img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp", title: "Wheel", desc: "" },
  { code: "SVC-14", img: "spectre.webp", title: "Tyres", desc: "" },
  { code: "SVC-15", img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp", title: "Battery", desc: "" },
  { code: "SVC-16", img: "u9-2560-750x430.jpg", title: "ABS Module", desc: "" }
];

// ---- Live inventory cards ----
const INVENTORY = [
  {
    cat: "engine", condition: "GRADE A",
    img: "https://robbreport.com/wp-content/uploads/2024/04/cullinanbb.jpg?resize=1024,576",
    catLabel: "Engine · V6", title: "2018 Honda Accord 3.5L Engine",
    fits: "Fits: Accord 2013–2019 · 54,200 mi", price: "$1,180", stock: "Stock #4432"
  },
  {
    cat: "body", condition: "GRADE B",
    img: "22793_2026_EV9_GT-2048x1152.jpg",
    catLabel: "Body · Door", title: "Ford F-150 Front Right Door",
    fits: "Fits: F-150 2015–2020 · Oxford White", price: "$260", stock: "Stock #4502-D"
  },
  {
    cat: "electrical", condition: "GRADE A",
    img: "ghostbb.webp",
    catLabel: "Electrical · Alternator", title: "Nissan Altima Alternator 130A",
    fits: "Fits: Altima 2013–2018 · Tested", price: "$95", stock: "Stock #4488-A"
  },
  {
    cat: "engine", condition: "GRADE A",
    img: "RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Ghost_Black_Badge.webp",
    catLabel: "Drivetrain · Transmission", title: "Chevrolet Silverado 6-Speed Auto",
    fits: "Fits: Silverado 2014–2019 · 61,800 mi", price: "$890", stock: "Stock #4511-T"
  },
  {
    cat: "interior", condition: "GRADE B",
    img: "spectre.webp",
    catLabel: "Interior · Seats", title: "Subaru Outback Front Seat Pair",
    fits: "Fits: Outback 2015–2019 · Cloth, grey", price: "$210", stock: "Stock #4498-S"
  },
  {
    cat: "body", condition: "GRADE A",
    img: "u9-2560-750x430.jpg",
    catLabel: "Body · Bumper", title: "Toyota Camry Rear Bumper",
    fits: "Fits: Camry 2018–2022 · Primed, no damage", price: "$175", stock: "Stock #4471-B"
  },
  {
    cat: "electrical", condition: "GRADE A",
    img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp",
    catLabel: "Electrical · ECU", title: "Honda Civic Engine Control Unit",
    fits: "Fits: Civic 2016–2021 · Plug tested", price: "$140", stock: "Stock #4471-E"
  },
  {
    cat: "interior", condition: "GRADE A",
    img: "car-engine-25780404.jpg",
    catLabel: "Interior · Dashboard", title: "Ford F-150 Dashboard Assembly",
    fits: "Fits: F-150 2015–2020 · Black, no cracks", price: "$230", stock: "Stock #4502-DB"
  },
  {
    cat: "engine", condition: "GRADE B",
    img: "22793_2026_EV9_GT-2048x1152.jpg",
    catLabel: "Engine · 4-Cyl", title: "Nissan Altima 2.5L Engine",
    fits: "Fits: Altima 2013–2018 · 71,500 mi", price: "$720", stock: "Stock #4488"
  }
];

// ---- Brands strip ----
const BRANDS = [
  { name: "TOYOTA", img: "toyta_logo_PNG1665 (1).png" },
  { name: "HONDA", img: "honda-logo-png-19.png" },
  { name: "SUZUKI", img: "suzuki_PNG12291.png" },
  { name: "HYUNDAI", img: "hydo_logo_PNG1645.png" },
  { name: "KIA", img: "kia.png" },
  { name: "JAECOO", img: "images/jaecoo.png" },
  { name: "MERCEDES", img: "Mercedes-Benz-Logo-768x478.png" },
  { name: "BMW", img: "BMW-Logo-1963-1997.png" },
  { name: "LEXUS", img: "lexus.jpg" },
  { name: "HAVAL", img: "Haval-Logo-500x281.png" },
  { name: "BYD", img: "BYD-Logo-500x281.png" },
  { name: "MAZDA", img: "honda-logo-png-19.png" }
];

// ---- Testimonials ----
const TESTIMONIALS = [
  {
    stars: 5,
    text: "Called about a transmission for my Silverado, had it delivered two days later and it's been running perfectly since. Fair price, no upselling.",
    name: "D. Marsh", role: "Verified Buyer"
  },
  {
    stars: 5,
    text: "They picked up my written-off Civic same afternoon and paid on the spot. Easiest part of the whole insurance process, honestly.",
    name: "R. Ibrahim", role: "Verified Seller"
  },
  {
    stars: 4,
    text: "Needed a matching door panel and they tracked one down through their network in a day. Colour match was close enough not to repaint.",
    name: "S. Okafor", role: "Verified Buyer"
  }
];

// ---- FAQ ----
const FAQS = [
  {
    q: "Do used parts come with a warranty?",
    a: "Yes. Every part sold, used or new, carries a minimum 90-day warranty. Engines and transmissions carry an extended 6-month warranty when installed by a licensed mechanic."
  },
  {
    q: "How do I know if a part will fit my car?",
    a: "Give us your VIN or your make, model and year, and we'll cross-check fitment and interchange numbers before you buy, over the phone or online."
  },
  {
    q: "Can you pick up a car that doesn't run?",
    a: "Yes, non-running, damaged and written-off vehicles are exactly what we wreck. We arrange free towing and pay on collection."
  },
  {
    q: "Do you ship parts outside the local area?",
    a: "We ship nationwide. Small parts go by tracked courier; engines, transmissions and panels go by palletised freight with full tracking."
  },
  {
    q: "What condition grades do your parts get?",
    a: "Grade A means light wear with no mechanical or cosmetic issues. Grade B means fully functional with visible wear or minor cosmetic marks. Grading is noted on every listing."
  }
];

// ---- Business / contact info (used for the map + WhatsApp + footer) ----
const BUSINESS = {
  name: "AFJ Auto Parts & Wreckers",
  phoneDisplay: "0481260455",
  phoneTel: "+61481260455",       // used for tel: links
  whatsappNumber: "61481260455",  // no leading 0, no plus, used for wa.me links
  whatsappDefaultMessage: "Hi AFJ Auto Parts, I'd like to ask about a part.",
  email: "info@afjautoparts.com",
  address: "6 Neon Street Sumner 4074 Queensland Australia",
  mapQuery: "6+Neon+Street+Sumner+QLD+4074+Australia",
  hours: [
    { day: "Monday – Friday", time: "7:00 am – 4:00 pm" },
    { day: "Saturday", time: "7:00 – 1:00 pm" },
    { day: "Sunday", time: "Closed" }
  ]
};
