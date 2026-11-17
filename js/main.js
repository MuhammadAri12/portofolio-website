/* ============================================================
   Portfolio — data karya, render kartu, tilt 3D, lightbox,
   reveal on scroll, nav, cursor, counter
   ============================================================ */

/* ---------- Util path (folder ada spasi) ---------- */
const P = (p) => encodeURI(p);

/* ---------- Util media ---------- */
const IMGS = (srcs) => srcs.map((s) => ({ type: "img", src: s }));
const ART_SRC = Array.from({ length: 20 }, (_, i) =>
  `web/artwork/a${String(i + 1).padStart(2, "0")}.jpg`
);

/* ---------- Data karya ---------- */
const PROJECTS = [
  {
    id: "artwork",
    title: "Artwork — Music Cover Art Collection",
    tag: "Artwork",
    cat: "art",
    desc: "A 20-piece personal art series — Y2K & grunge-inspired music cover artworks framed as CD jewel-case pieces: photo collage, glitch, pixel art, and typographic experiments.",
    cover: "web/artwork/a01.jpg",
    media: IMGS(ART_SRC),
  },
  {
    id: "clothing",
    title: "Clothing Design — Streetwear Graphics",
    tag: "Clothing Design",
    cat: "art",
    desc: "Streetwear graphics & mockups for hoodies and long sleeves — collage portraits, cut-out ransom typography, and stamp-style prints.",
    cover: "web/clothing/Anak-Mama-FRONT.jpg",
    media: IMGS([
      "web/clothing/Anak-Mama-FRONT.jpg",
      "web/clothing/Anak-Mama-BACK.jpg",
      "web/clothing/NIRVANA-FRONT.jpg",
      "web/clothing/NIRVANA-BACK.jpg",
      "web/clothing/NIRVANA-nirvana.jpg",
      "web/clothing/NIRVANA-nirvana-edge.jpg",
      "web/clothing/NIRVANA-nirvana-txt.jpg",
      "web/clothing/Pablo-Escobar-FRONT.jpg",
      "web/clothing/Pablo-Escobar-BACK.jpg",
      "web/clothing/Pablo-Escobar-a.jpg",
      "web/clothing/SELFLOVE-FRONT.jpg",
      "web/clothing/SELFLOVE-BACK.jpg",
    ]),
  },
  {
    id: "album-cover",
    title: "Album Cover — Music Artwork",
    tag: "Album Cover",
    cat: "art",
    desc: "Album cover concepts for music projects — moody red-tinted portrait pieces, typographic quote covers, and painterly landscapes.",
    cover: "web/album/HINDIA-Hindia-hasil.jpg",
    media: IMGS([
      "web/album/HINDIA-Hindia-hasil.jpg",
      "web/album/Biru-Baru-Biru-Baru.jpg",
      "web/album/Album-Cover-1-Album-Cover-1.jpg",
      "web/album/Album-Cover-2-Album-Cover-2.jpg",
      "web/album/Album-Cover-3-1.jpg",
      "web/album/Album-Cover-3-quotes.jpg",
      "web/album/Album-Cover-4-Untitled-1.jpg",
      "web/album/Album-Cover-5-trapissss.jpg",
    ]),
  },
  {
    id: "blackjagger",
    title: "Blackjagger Collective — Event Branding",
    tag: "Branding",
    cat: "branding",
    period: "Jan — Feb 2025",
    desc: "Event brand identity: ID card, lanyard, and concert ticketing system.",
    cover: "Blackjagger/ID Card/id card.png",
    media: [
      { type: "img", src: "Blackjagger/ID Card/id card.png" },
      { type: "img", src: "Blackjagger/ID Card/ID Card & Lanyard.png" },
      { type: "img", src: "Blackjagger/Ticketing/Ticket Blackjagger.png" },
      { type: "img", src: "Blackjagger/Ticketing/ticket.png" },
      { type: "img", src: "Blackjagger/Ticketing/497774793_17873035149346560_7319910926181546060_n.jpg" },
    ],
  },
  {
    id: "webinar",
    title: "Webinar Pencerdasan Kaderisasi",
    tag: "Event Campaign",
    cat: "branding",
    period: "Nov 2023",
    desc: "Full visual campaign for the HIMATREDIA cadre-education webinar: poster, virtual background, registration header, and video bumper.",
    cover: "Webinar Pencerdasan Kaderisasi/Poster.png",
    media: [
      { type: "img", src: "Webinar Pencerdasan Kaderisasi/Poster.png" },
      { type: "img", src: "Webinar Pencerdasan Kaderisasi/Virtual Background.png" },
      { type: "img", src: "Webinar Pencerdasan Kaderisasi/Header Gform.png" },
      { type: "img", src: "Webinar Pencerdasan Kaderisasi/Dokumentasi.jpg" },
      { type: "video", src: "Webinar Pencerdasan Kaderisasi/bumper.mp4" },
    ],
  },
  {
    id: "letterhead",
    title: "Corporate Letterhead & Envelope",
    tag: "Corporate",
    cat: "corporate",
    desc: "Corporate stationery design — letterhead, envelope, and application mockups.",
    cover: "Magang/Letterhead/hasil.png",
    media: [
      { type: "img", src: "Magang/Letterhead/hasil.png" },
      { type: "img", src: "Magang/Letterhead/Hasil Amplop & Kop Surat.png" },
      { type: "img", src: "Magang/Letterhead/letterhead 1.png" },
      { type: "img", src: "Magang/Letterhead/depan.png" },
      { type: "img", src: "Magang/Letterhead/belakang.png" },
    ],
  },
  {
    id: "banner",
    title: "Banners & E-Book Cover",
    tag: "Corporate",
    cat: "corporate",
    desc: "Promotional banner series and e-book cover design for digital publication.",
    cover: "Magang/Banner/Banner 1.png",
    media: [
      { type: "img", src: "Magang/Banner/Banner 1.png" },
      { type: "img", src: "Magang/Banner/Banner 2.png" },
      { type: "img", src: "Magang/Banner/ebook.jpg" },
      { type: "img", src: "Magang/Banner/ebook ai.jpg" },
    ],
  },
  {
    id: "ebuletin",
    title: "SPIL E-Bulletin",
    tag: "Corporate",
    cat: "corporate",
    desc: "Internal company e-bulletin layout, from design to print finalization.",
    cover: "Magang/Banner/Banner 2.png",
    media: [
      { type: "pdf", src: "Magang/ebuletin/SPIL E-BULETIN update.pdf" },
      { type: "img", src: "Magang/Banner/Banner 2.png" },
    ],
  },
  {
    id: "polo",
    title: "Polo Shirt Merchandise",
    tag: "Merchandise",
    cat: "corporate",
    desc: "Corporate polo shirt motif design with application visuals.",
    cover: "Magang/Polo Shirt/Polo Shirt.png",
    media: [
      { type: "img", src: "Magang/Polo Shirt/Polo Shirt.png" },
      { type: "img", src: "Magang/Polo Shirt/Polo Shirt 2.png" },
      { type: "img", src: "Magang/Polo Shirt/1.png" },
      { type: "img", src: "Magang/Polo Shirt/4.png" },
      { type: "img", src: "Magang/Polo Shirt/6.png" },
      { type: "img", src: "Magang/Polo Shirt/8.png" },
    ],
  },
  {
    id: "imlek",
    title: "Lunar New Year Greeting Card",
    tag: "Greeting Card",
    cat: "corporate",
    desc: "Lunar New Year greeting card series for corporate digital channels.",
    cover: "Magang/Imlek Greeting Card/IMLEK GREETING CARD.png",
    media: [
      { type: "img", src: "Magang/Imlek Greeting Card/IMLEK GREETING CARD.png" },
      { type: "img", src: "Magang/Imlek Greeting Card/IMLEK GREETING CARD 2.png" },
      { type: "img", src: "Magang/Imlek Greeting Card/IMLEK GREETING CARD 3.png" },
      { type: "img", src: "Magang/Imlek Greeting Card/IMLEK GREETING CARD 4.png" },
    ],
  },
  {
    id: "natal",
    title: "Christmas Greeting Card",
    tag: "Greeting Card",
    cat: "corporate",
    desc: "Christmas greeting cards with warm illustration and festive typography.",
    cover: "Magang/Christmas Greeting Card/Merry Christmas Card-Satu.png",
    media: [
      { type: "img", src: "Magang/Christmas Greeting Card/Merry Christmas Card-Satu.png" },
      { type: "img", src: "Magang/Christmas Greeting Card/Merry Christmas Card Dua.png" },
    ],
  },
  {
    id: "newyear",
    title: "New Year Greeting Card",
    tag: "Greeting Card",
    cat: "corporate",
    desc: "New Year 2026 greeting card series for corporate digital channels.",
    cover: "Magang/New Year Greeting Card/Happy New Year 2026-Satu.png",
    media: [
      { type: "img", src: "Magang/New Year Greeting Card/Happy New Year 2026-Satu.png" },
      { type: "img", src: "Magang/New Year Greeting Card/Happy New Year 2026-Dua.png" },
      { type: "img", src: "Magang/New Year Greeting Card/Happy New Year 2026-Tiga.png" },
    ],
  },
  {
    id: "ramadhan",
    title: "Ramadhan Greeting Card",
    tag: "Greeting Card",
    cat: "corporate",
    desc: "Ramadhan greeting cards with calm tones and elegant ornaments.",
    cover: "Magang/Ramadhan Greeting Card/RAMADHAN GREETING CARD 3.png",
    media: [
      { type: "img", src: "Magang/Ramadhan Greeting Card/RAMADHAN GREETING CARD 3.png" },
      { type: "img", src: "Magang/Ramadhan Greeting Card/RAMADHAN GREETING CARD 4.png" },
    ],
  },
  {
    id: "lunarfeed",
    title: "Lunar Feed — Social Animation",
    tag: "Motion",
    cat: "motion",
    desc: "Animated Lunar New Year feeds for social media (1x1 & 2x1) plus video version.",
    cover: "Magang/Lunar Feed/1x1.png",
    media: [
      { type: "img", src: "Magang/Lunar Feed/1x1.png" },
      { type: "img", src: "Magang/Lunar Feed/2x1.png" },
      { type: "video", src: "Magang/Lunar Feed/Imlek.mp4" },
    ],
  },
  {
    id: "motiongraphic",
    title: "Motion Graphic — Instant Quotation",
    tag: "Motion",
    cat: "motion",
    desc: "16:9 motion graphic series promoting the Instant Quotation service.",
    cover: "Magang/Motion Graphic/Instant Quotation - Papua - 16 9.mp4",
    media: [
      { type: "video", src: "Magang/Motion Graphic/Instant Quotation - Papua - 16 9.mp4" },
      { type: "video", src: "Magang/Motion Graphic/Instant Quotation - Kalimantan Sumatera - 16 9.mp4" },
      { type: "video", src: "Magang/Motion Graphic/Instant Quotation - Sulawesi Maluku - 16 9.mp4" },
      { type: "video", src: "Magang/Motion Graphic/1 menit.mp4" },
    ],
  },
];

/* ---------- Render kartu ---------- */
const grid = document.getElementById("workGrid");

function cardHTML(p, i) {
  const isVideo = p.cover.endsWith(".mp4");
  const mediaEl = isVideo
    ? `<video src="${P(p.cover)}" muted loop autoplay playsinline></video>`
    : `<img src="${P(p.cover)}" alt="${p.title}" loading="lazy" />`;
  return `
  <article class="card" data-cat="${p.cat}" data-id="${p.id}" style="--d:${(i % 3) * 0.1}s">
    <div class="card__inner" data-tilt data-hover>
      <span class="card__tag">${p.tag}</span>
      <div class="card__media">${mediaEl}</div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__meta">
          <span>${p.period ? p.period + " · " : ""}${p.media.length} assets</span>
          <span class="card__cta">View →</span>
        </div>
      </div>
    </div>
  </article>`;
}

grid.innerHTML = PROJECTS.map(cardHTML).join("");

/* ---------- Filter ---------- */
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".card").forEach((c) => {
      const show = f === "all" || c.dataset.cat === f;
      c.classList.toggle("is-hidden", !show);
      if (show) {
        requestAnimationFrame(() => c.classList.add("is-visible"));
      } else {
        c.classList.remove("is-visible");
      }
    });
  });
});

/* ---------- GIF strip ---------- */
const gifStrip = document.getElementById("gifStrip");
const gifs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
gifStrip.innerHTML = gifs
  .map(
    (g) =>
      `<div class="gif__item" data-hover data-gif="${g}"><img src="${P(
        `Magang/GIF/${g}.gif`
      )}" alt="GIF animation ${g}" loading="lazy" /></div>`
  )
  .join("");

gifStrip.addEventListener("click", (e) => {
  const item = e.target.closest(".gif__item");
  if (!item) return;
  const g = item.dataset.gif;
  openLightbox([
    { type: "img", src: `Magang/GIF/${g}.gif` },
  ], `GIF Animation — ${g}`, 0);});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lbStage = document.getElementById("lbStage");
const lbCaption = document.getElementById("lbCaption");
let lbItems = [];
let lbIndex = 0;
let lbTitle = "";

function lbRender() {
  const item = lbItems[lbIndex];
  if (!item) return;
  const src = P(item.src);
  if (item.type === "video") {
    lbStage.innerHTML = `<video src="${src}" controls autoplay loop playsinline></video>`;
  } else if (item.type === "pdf") {
    lbStage.innerHTML = `<iframe src="${src}" title="Dokumen"></iframe>`;
  } else {
    lbStage.innerHTML = `<img src="${src}" alt="${lbTitle}" />`;
  }
  lbCaption.textContent = `${lbTitle} — ${lbIndex + 1}/${lbItems.length}`;
}

function openLightbox(items, title, index = 0) {
  lbItems = items;
  lbTitle = title;
  lbIndex = index;
  lbRender();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lbStage.innerHTML = ""; // stop semua video
  document.body.style.overflow = "";
}

function lbStep(dir) {
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  lbRender();
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => lbStep(-1));
document.getElementById("lbNext").addEventListener("click", () => lbStep(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbStep(-1);
  if (e.key === "ArrowRight") lbStep(1);
});

/* Buka project dari kartu */
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const p = PROJECTS.find((x) => x.id === card.dataset.id);
  if (p) openLightbox(p.media, p.period ? `${p.title} · ${p.period}` : p.title, 0);
});

/* ---------- Tilt 3D ---------- */
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canHover && !reduceMotion) {
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    const max = 8;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(
        x * max
      ).toFixed(2)}deg) scale(1.015)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document
  .querySelectorAll(".reveal, .reveal-3d, .card")
  .forEach((el) => io.observe(el));

/* Stagger delay hero */
document.querySelectorAll(".hero .reveal").forEach((el, i) => {
  el.style.setProperty("--d", `${0.15 + i * 0.12}s`);
});

/* ---------- Counter ---------- */
const counterIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counterIO.unobserve(el);
      const end = +el.dataset.count;
      const dur = 1400;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll("[data-count]").forEach((el) => counterIO.observe(el));

/* ---------- Nav ---------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    document.body.style.overflow = "";
  })
);

/* ---------- Custom cursor ---------- */
if (canHover && !reduceMotion) {
  const dot = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  let cx = 0, cy = 0, rx = 0, ry = 0;

  window.addEventListener("mousemove", (e) => {
    cx = e.clientX; cy = e.clientY;
    dot.classList.add("is-active");
    ring.classList.add("is-active");
  });

  (function cursorLoop() {
    rx += (cx - rx) * 0.16;
    ry += (cy - ry) * 0.16;
    dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(cursorLoop);
  })();

  document.addEventListener("mouseover", (e) => {
    ring.classList.toggle("is-hover", !!e.target.closest("[data-hover]"));
  });
}

/* ---------- Preloader ---------- */
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  setTimeout(() => pre.classList.add("is-done"), 600);
});
