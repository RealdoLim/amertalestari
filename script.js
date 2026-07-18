/* ================= Data produk ================= */
/* fase: 'tbm' | 'tm' | 'semua', lahan: 'mineral' | 'gambut' | 'semua' */

const PRODUCTS = [
  {
    id: "npk13627",
    name: "NPK 13-6-27-4 + 0,65B",
    sub: "Generatif K tinggi · 50 kg",
    img: "images/bags/npk-13-6-27.webp",
    accent: "#a32c22",
    badge: "BINTANG TANI",
    fase: "tm",
    lahan: "mineral",
    faseLabel: "Fase: TM 4 tahun ke atas",
    lahanLabel: "Lahan: Tanah mineral",
    rings: [
      { l: "N", v: 13 },
      { l: "P₂O₅", v: 6 },
      { l: "K₂O", v: 27 },
      { l: "MgO", v: 4 },
      { l: "B₂O₃", v: 0.65 },
    ],
    chips: [],
    fungsi:
      "Pupuk generatif kalium tinggi untuk Tanaman Menghasilkan (TM 4 tahun ke atas) di tanah mineral yang fosfatnya masih cukup. Memacu produksi tandan buah. Kembaran 13-8-27, bedanya hanya fosfat lebih rendah dan boron sedikit lebih tinggi.",
    note: "Pupuk ditabur di atas tanah yang bersih dan kering pada area sekeliling tanaman.",
    reg: "No. Pendaftaran 01.01.2024.1280 · berlaku s.d. 2029",
  },
  {
    id: "npk13827",
    name: "NPK 13-8-27-4 + 0,5B",
    sub: "Generatif K tinggi · 50 kg",
    img: "images/bags/npk-13-8-27.webp",
    accent: "#4f9c33",
    badge: "BINTANG TANI",
    fase: "tm",
    lahan: "mineral",
    faseLabel: "Fase: TM 4 tahun ke atas",
    lahanLabel: "Lahan: Tanah mineral",
    rings: [
      { l: "N", v: 13 },
      { l: "P₂O₅", v: 8 },
      { l: "K₂O", v: 27 },
      { l: "MgO", v: 4 },
      { l: "B", v: 0.5 },
    ],
    chips: [],
    fungsi:
      "Pupuk generatif kalium tinggi untuk TM di tanah mineral, dengan fosfat 8% untuk kebun yang cadangan fosfatnya lebih miskin. Kembaran 13-6-27 dan praktis saling menggantikan.",
    note: "Pupuk ditabur di atas tanah yang bersih dan kering pada area sekeliling tanaman.",
    reg: "SNI 2803:2024 · Masa edar 2 tahun",
  },
  {
    id: "npk7634",
    name: "NPK 7-6-34 + B, Cu, Zn",
    sub: "Spesialis gambut · 50 kg",
    img: "images/bags/npk-7-6-34.webp",
    accent: "#5b3f9e",
    badge: "BINTANG TANI",
    fase: "tm",
    lahan: "gambut",
    faseLabel: "Fase: TM, boleh TBM akhir dengan dosis dikurangi",
    lahanLabel: "Lahan: Gambut",
    rings: [
      { l: "N", v: 7 },
      { l: "P₂O₅", v: 6 },
      { l: "K₂O", v: 34 },
      { l: "B", v: 0.5, approx: true },
      { l: "Cu", v: 0.5, approx: true },
      { l: "Zn", v: 0.5, approx: true },
    ],
    chips: [],
    fungsi:
      "Spesialis TM di lahan gambut. Kalium paling tinggi (34%) karena mudah tercuci di gambut, nitrogen dan fosfat sengaja rendah (gambut kaya N, dan fosfat berlebih menghambat serapan Cu dan Zn), plus mikro Cu, Zn, B yang hampir selalu defisien karena terikat kuat oleh gambut.",
    note: "Pupuk ditabur di atas tanah yang bersih dan kering pada area sekeliling tanaman.",
    reg: "SNI 2803:2024 · Masa edar 2 tahun",
  },
  {
    id: "npk121217",
    name: "NPK 12-12-17-2 + TE",
    sub: "Vegetatif TBM · 50 kg",
    img: "images/bags/npk-12-12-17.webp",
    accent: "#2f6cb3",
    badge: "BINTANG TANI",
    fase: "tbm",
    lahan: "mineral",
    faseLabel: "Fase: TBM di bawah 3 tahun",
    lahanLabel: "Lahan: Tanah mineral",
    rings: [
      { l: "N", v: 12 },
      { l: "P₂O₅", v: 12 },
      { l: "K₂O", v: 17 },
      { l: "MgO", v: 2 },
      { l: "B₂O₃", v: 0.57 },
      { l: "CuO", v: 0.26 },
      { l: "ZnO", v: 0.27 },
    ],
    chips: [],
    fungsi:
      "Pupuk vegetatif untuk TBM (di bawah 3 tahun) di tanah mineral. Nitrogen dan fosfat seimbang untuk membangun akar, batang, dan pelepah. Bila dipakai di gambut wajib ditambah Cu, Zn, B terpisah. Bisa untuk TM di tanah miskin N dan P dengan tambahan KCl.",
    note: "Pupuk ditabur di atas tanah yang bersih dan kering pada area sekeliling tanaman.",
    reg: "No. Pendaftaran 01.01.2022.1479 · berlaku s.d. 2027",
  },
  {
    id: "npk151515",
    name: "NPK 15-15-15",
    sub: "Serbaguna seimbang · 50 kg",
    img: "images/bags/npk-15-15-15.webp",
    accent: "#1e4c50",
    badge: "BINTANG TANI",
    fase: "tbm",
    lahan: "semua",
    faseLabel: "Fase: Pembibitan sampai TBM awal",
    lahanLabel: "Lahan: Semua jenis tanah",
    rings: [
      { l: "N", v: 15 },
      { l: "P₂O₅", v: 15 },
      { l: "K₂O", v: 15 },
    ],
    chips: [],
    fungsi:
      "Pupuk serbaguna rasio seimbang untuk pembibitan sampai TBM awal di berbagai jenis tanah. Setara 16-16-16 namun sedikit kurang pekat (total hara 45%). Umumnya hadir sebagai versi subsidi Phonska dengan tambahan sulfur sekitar 9%.",
    note: "",
    reg: "No. Pendaftaran 01.01.2025.821 · berlaku s.d. 2030",
  },
  {
    id: "npk161616",
    name: "NPK 16-16-16",
    sub: "Non subsidi · 50 kg",
    img: "images/bags/npk-16-16-16-photo.webp",
    photo: true,
    accent: "#a5372d",
    badge: "NON SUBSIDI",
    fase: "tbm",
    lahan: "semua",
    faseLabel: "Fase: Bibit sampai TBM",
    lahanLabel: "Lahan: Semua jenis tanah",
    rings: [
      { l: "N", v: 16 },
      { l: "P₂O₅", v: 16 },
      { l: "K₂O", v: 16 },
    ],
    chips: [],
    fungsi:
      "Kembaran 15-15-15 dengan hara lebih pekat (total 48%), umum dipakai smallholder untuk bibit dan TBM. Bila dipaksakan untuk TM, wajib ditambah KCl plus Mg-B.",
    note: "",
    reg: "No. Pendaftaran 01.01.2025.877 · berlaku s.d. 2030",
  },
  {
    id: "dolomite",
    name: "Dolomit Mesh 100",
    sub: "Amelioran kapur · 50 kg",
    img: "images/bags/dolomite.webp",
    accent: "#7d9c1f",
    badge: "BINTANG TANI",
    fase: "semua",
    lahan: "semua",
    faseLabel: "Fase: Semua fase (bibit, TBM, TM)",
    lahanLabel: "Lahan: Mineral dan gambut yang masam",
    rings: [
      { l: "CaO", v: 30.49 },
      { l: "MgO", v: 20.36 },
    ],
    chips: ["Mesh 100"],
    fungsi:
      "Bukan NPK melainkan amelioran: kapur CaMg(CO₃)₂ yang menaikkan pH tanah masam (mineral maupun gambut) sekaligus menyuplai kalsium dan magnesium. Dipakai di semua fase sebagai pendamping pupuk utama. Berbeda dengan kieserite yang menyuplai Mg tanpa mengubah pH.",
    note: "",
    reg: "No. Pendaftaran 04.03.2024.495 · berlaku s.d. 2029",
  },
];

const FASE_SHORT = { tbm: "TBM", tm: "TM", semua: "Semua fase" };
const LAHAN_SHORT = { mineral: "Mineral", gambut: "Gambut", semua: "Semua tanah" };

/* Skala visual ring: K₂O tertinggi (34%) tampil hampir penuh */
const RING_MAX = 40;
const RING_R = 34;
const RING_C = 2 * Math.PI * RING_R;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");

/* ================= Bag component ================= */

function bagHTML(p) {
  const inner = p.photo
    ? '<div class="photoBag" style="background-image:url(\'' + p.img + "')\"></div>"
    : '<div class="bagWrap"><div class="sack" style="background-image:url(\'' +
      p.img +
      "')\"><div class=\"form\"></div><div class=\"sealTop\"></div><div class=\"sealBot\"></div><div class=\"detail\"></div><div class=\"gloss\"></div></div></div>";
  return (
    '<div class="stage-wrap"><div class="stage"><div class="floor"></div>' + inner + "</div></div>"
  );
}

/* Tilt 3D mengikuti kursor (hanya pointer halus, hormati reduced motion) */

function attachTilt(hitEl, getWrap, max) {
  hitEl.addEventListener("mousemove", (e) => {
    if (reducedMotion.matches || !finePointer.matches) return;
    const wrap = getWrap();
    if (!wrap) return;
    const r = hitEl.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    wrap.style.transform =
      "rotateX(" + (-dy * max).toFixed(2) + "deg) rotateY(" + (dx * max).toFixed(2) + "deg)";
  });
  hitEl.addEventListener("mouseleave", () => {
    const wrap = getWrap();
    if (wrap) wrap.style.transform = "";
  });
}

/* ================= Hero: showroom cycler ================= */

const heroStage = document.getElementById("heroStage");
const heroSwap = document.getElementById("heroSwap");
const heroPname = document.getElementById("heroPname");
const heroDots = document.getElementById("heroDots");

let heroIdx = 0;
let heroBusy = false;
let heroHover = false;
let heroTimer = null;

function heroRender(i) {
  heroIdx = i;
  const p = PRODUCTS[i];
  heroSwap.innerHTML = bagHTML(p);
  heroPname.textContent = p.name;
  heroStage.style.setProperty("--hero-accent", p.accent);
  heroDots.querySelectorAll(".hero-dot").forEach((d, di) => {
    d.classList.toggle("on", di === i);
    d.setAttribute("aria-pressed", String(di === i));
  });
}

function heroGo(i) {
  if (heroBusy || i === heroIdx) return;
  if (reducedMotion.matches) {
    heroRender(i);
    return;
  }
  heroBusy = true;
  heroSwap.classList.add("go-out");
  setTimeout(() => {
    heroRender(i);
    heroSwap.classList.remove("go-out");
    heroSwap.classList.add("go-in");
    void heroSwap.offsetHeight;
    heroSwap.classList.remove("go-in");
    heroBusy = false;
  }, 290);
}

function heroResetTimer() {
  if (heroTimer) clearInterval(heroTimer);
  if (reducedMotion.matches) return;
  heroTimer = setInterval(() => {
    if (document.hidden || heroHover) return;
    heroGo((heroIdx + 1) % PRODUCTS.length);
  }, 4500);
}

if (heroStage) {
  PRODUCTS.forEach((p, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", "Tampilkan " + p.name);
    dot.addEventListener("click", () => {
      heroGo(i);
      heroResetTimer();
    });
    heroDots.appendChild(dot);
  });

  heroRender(0);
  heroResetTimer();

  heroPname.addEventListener("click", () => openModal(PRODUCTS[heroIdx], heroPname));
  heroSwap.addEventListener("click", () => openModal(PRODUCTS[heroIdx], heroPname));
  heroSwap.style.cursor = "pointer";

  ["mouseenter", "focusin"].forEach((ev) =>
    heroStage.addEventListener(ev, () => (heroHover = true))
  );
  ["mouseleave", "focusout"].forEach((ev) =>
    heroStage.addEventListener(ev, () => (heroHover = false))
  );

  attachTilt(heroSwap, () => heroSwap.querySelector(".stage-wrap"), 9);
}

/* ================= Katalog: filter dua sumbu + segmented control ================= */

const grid = document.getElementById("catalogGrid");
const filterBar = document.getElementById("filterBar");
const deckCount = document.getElementById("deckCount");
const filters = { fase: "all", lahan: "all" };

function matchesFilters(p) {
  const faseOk = filters.fase === "all" || p.fase === filters.fase || p.fase === "semua";
  const lahanOk = filters.lahan === "all" || p.lahan === filters.lahan || p.lahan === "semua";
  return faseOk && lahanOk;
}

/* Indikator segmented: posisi di-set instan, perpindahan dianimasikan FLIP (transform saja) */

function positionSegIndicator(seg, animate) {
  const ind = seg.querySelector(".seg-ind");
  const active = seg.querySelector("button.on");
  if (!ind || !active) return;
  const first = ind.getBoundingClientRect();
  ind.style.left = active.offsetLeft + "px";
  ind.style.width = active.offsetWidth + "px";
  if (!animate || reducedMotion.matches || !ind.animate || first.width === 0) return;
  const last = ind.getBoundingClientRect();
  const dx = first.left - last.left;
  const sx = first.width / last.width;
  ind.animate(
    [{ transform: "translateX(" + dx + "px) scaleX(" + sx + ")" }, { transform: "none" }],
    { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
  );
}

function setFilter(axis, value) {
  filters[axis] = value;
  const seg = filterBar.querySelector('[data-axis="' + axis + '"]');
  seg.querySelectorAll("button").forEach((b) => {
    const on = b.dataset.value === value;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", String(on));
  });
  positionSegIndicator(seg, true);
  renderCatalog(true);
}

function updateCount(n) {
  if (!deckCount) return;
  if (deckCount.textContent !== String(n)) {
    deckCount.textContent = n;
    deckCount.classList.remove("pop");
    void deckCount.offsetWidth;
    deckCount.classList.add("pop");
  }
}

function buildCards(items) {
  grid.innerHTML = "";
  if (!items.length) {
    grid.innerHTML =
      '<div class="catalog-empty">Tidak ada produk untuk kombinasi ini. Coba longgarkan salah satu filter.</div>';
    return;
  }
  items.forEach((p, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "bag-card";
    card.style.animationDelay = i * 70 + "ms";
    card.style.setProperty("--accent", p.accent);
    card.setAttribute("aria-label", "Buka detail " + p.name);
    card.innerHTML =
      '<div class="tile">' + bagHTML(p) + "</div>" +
      '<div class="bag-caption"><b>' + p.name + "</b><span>" + p.sub + "</span>" +
      '<div class="bag-tags">' +
      '<span class="bag-tag">' + FASE_SHORT[p.fase] + "</span>" +
      '<span class="bag-tag">' + LAHAN_SHORT[p.lahan] + "</span>" +
      "</div></div>";
    card.addEventListener("click", () => openModal(p, card));
    const tile = card.querySelector(".tile");
    attachTilt(tile, () => tile.querySelector(".stage-wrap"), 7);
    grid.appendChild(card);
  });
}

function renderCatalog(animated) {
  const items = PRODUCTS.filter(matchesFilters);
  updateCount(items.length);
  const existing = grid.querySelectorAll(".bag-card");
  if (animated && existing.length && !reducedMotion.matches) {
    existing.forEach((c) => c.classList.add("out"));
    setTimeout(() => buildCards(items), 220);
  } else {
    buildCards(items);
  }
}

if (filterBar && grid) {
  filterBar.querySelectorAll(".seg").forEach((seg) => {
    seg.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-value]");
      if (btn) setFilter(seg.dataset.axis, btn.dataset.value);
    });
    positionSegIndicator(seg, false);
  });

  const repositionAll = () =>
    filterBar.querySelectorAll(".seg").forEach((seg) => positionSegIndicator(seg, false));
  window.addEventListener("resize", repositionAll);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(repositionAll);
  window.addEventListener("load", repositionAll);

  renderCatalog(false);
}

/* ================= Panduan → katalog ================= */

document.querySelectorAll(".panduan-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.product) {
      const p = PRODUCTS.find((x) => x.id === link.dataset.product);
      if (p) openModal(p, link);
      return;
    }
    setFilter("fase", link.dataset.fase || "all");
    setFilter("lahan", link.dataset.lahan || "all");
    document.getElementById("katalog").scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  });
});

/* ================= Modal detail ================= */

function fmtVal(v, approx) {
  let s = v.toFixed(2).replace(/0+$/, "").replace(/\.$/, "").replace(".", ",");
  return (approx ? "±" : "") + s + "%";
}

function ringHTML(r, accent, i) {
  const frac = Math.max(Math.min(r.v / RING_MAX, 1), r.v > 0 ? 0.05 : 0);
  return (
    '<div class="ring"><div class="ring-box">' +
    '<svg viewBox="0 0 80 80" aria-hidden="true">' +
    '<circle class="ring-track" cx="40" cy="40" r="' + RING_R + '"></circle>' +
    '<circle class="ring-fill" cx="40" cy="40" r="' + RING_R + '" stroke="' + accent + '"' +
    ' stroke-dasharray="' + RING_C.toFixed(2) + '" stroke-dashoffset="' + RING_C.toFixed(2) + '"' +
    ' style="transition-delay:' + i * 90 + 'ms"' +
    ' data-frac="' + frac + '" data-val="' + r.v + '" data-approx="' + (r.approx ? 1 : 0) + '"></circle>' +
    "</svg>" +
    '<div class="ring-val">0%</div>' +
    "</div>" +
    '<span class="ring-label">' + r.l + "</span></div>"
  );
}

function animateRings(root) {
  root.querySelectorAll(".ring-fill").forEach((c, i) => {
    const frac = parseFloat(c.dataset.frac);
    const val = parseFloat(c.dataset.val);
    const approx = c.dataset.approx === "1";
    const valEl = c.closest(".ring-box").querySelector(".ring-val");

    c.style.strokeDashoffset = (RING_C * (1 - frac)).toFixed(2);

    if (reducedMotion.matches) {
      valEl.textContent = fmtVal(val, approx);
      return;
    }

    const dur = 1000;
    const delay = i * 90;
    let done = false;
    setTimeout(() => {
      const t0 = performance.now();
      function tick(t) {
        if (done) return;
        const k = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - k, 3);
        valEl.textContent = fmtVal(val * e, approx);
        if (k < 1) requestAnimationFrame(tick);
        else done = true;
      }
      requestAnimationFrame(tick);
    }, delay);
    /* rAF di-pause saat tab hidden; pastikan nilai akhir tetap terpasang */
    setTimeout(() => {
      done = true;
      valEl.textContent = fmtVal(val, approx);
    }, dur + delay + 200);
  });
}

function openModal(p, triggerEl) {
  const bd = document.createElement("div");
  bd.className = "backdrop";

  const rings = p.rings.map((r, i) => ringHTML(r, p.accent, i)).join("");

  const chips = p.chips.length
    ? '<div class="sec">DIPERKAYA DENGAN</div><div class="chips">' +
      p.chips
        .map((c) => '<div class="chip" style="border-color:' + p.accent + ";color:" + p.accent + '">' + c + "</div>")
        .join("") +
      "</div>"
    : "";

  const note = p.note
    ? '<div class="note"><strong>Aturan pemakaian:</strong> ' + p.note + "</div>"
    : "";

  bd.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true" aria-label="' + p.name + '">' +
    '<div class="modalLeft">' + bagHTML(p) + "</div>" +
    '<div class="modalRight">' +
    '<button class="modal-close" aria-label="Tutup detail produk">✕</button>' +
    '<span class="badge" style="background:' + p.accent + '">' + p.badge + "</span>" +
    '<h2 class="modal-title">' + p.name + "</h2>" +
    '<div class="modal-sub">' + p.sub + "</div>" +
    '<div class="sec">KOMPOSISI</div>' +
    '<div class="rings">' + rings + "</div>" +
    chips +
    '<div class="fungsi">' +
    '<div class="fungsi-label">Fungsi</div>' +
    '<p class="fungsi-text">' + p.fungsi + "</p>" +
    '<div class="fungsi-meta">' +
    '<span class="fungsi-tag">' + p.faseLabel + "</span>" +
    '<span class="fungsi-tag">' + p.lahanLabel + "</span>" +
    "</div>" +
    "</div>" +
    note +
    '<div class="modal-foot"><span>' + p.reg + "</span><b>Berat bersih 50 kg</b></div>" +
    "</div></div>";

  function close() {
    bd.classList.remove("open");
    document.body.classList.remove("no-scroll");
    document.removeEventListener("keydown", onKey);
    setTimeout(() => bd.remove(), 250);
    if (triggerEl && typeof triggerEl.focus === "function") triggerEl.focus();
  }

  function onKey(e) {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "Tab") {
      const focusables = bd.querySelectorAll("button, a[href]");
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  /* Tutup hanya jika klik benar-benar dimulai DAN diakhiri di backdrop
     (seleksi teks yang dilepas di luar modal tidak ikut menutup) */
  let pressedOnBackdrop = false;
  bd.addEventListener("pointerdown", (e) => {
    pressedOnBackdrop = e.target === bd;
  });
  bd.addEventListener("click", (e) => {
    if (e.target === bd && pressedOnBackdrop) close();
  });
  bd.querySelector(".modal-close").addEventListener("click", close);
  document.addEventListener("keydown", onKey);

  /* Pane kiri diberi rona warna produk (fallback: gradient dari stylesheet) */
  bd.querySelector(".modalLeft").style.background =
    "linear-gradient(180deg, color-mix(in srgb, " + p.accent + " 8%, #eef3fd), color-mix(in srgb, " + p.accent + " 20%, #dde6f5))";

  document.body.appendChild(bd);
  document.body.classList.add("no-scroll");

  void bd.offsetHeight; /* paksa style flush agar transisi .open berjalan */
  bd.classList.add("open");
  setTimeout(() => animateRings(bd), 200);
  bd.querySelector(".modal-close").focus();
}

/* ================= Nav / reveal / footer ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-scale");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}
