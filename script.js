// =========== Année footer ===========
document.getElementById('year').textContent = new Date().getFullYear();

// =========== Header au scroll ===========
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// =========== Menu mobile ===========
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// =========== Catalogue écrans ===========
const IMG_BASE = 'https://fdn2.gsmarena.com/vv/bigpic/';
const TIERS = ['compatible', 'premium', 'original'];
const TIER_LABELS = {
  compatible: 'Compatible',
  premium: 'Premium',
  original: 'Origine',
};

const PHONES = [
  { name: 'iPhone 6',          img: 'apple-iphone-6-4',           gen: '6-8',  prices: { compatible: 40 } },
  { name: 'iPhone 6s',         img: 'apple-iphone-6s1',           gen: '6-8',  prices: { compatible: 40 } },
  { name: 'iPhone 6 Plus',     img: 'apple-iphone-6-plus2',       gen: '6-8',  prices: { compatible: 40 } },
  { name: 'iPhone 7',          img: 'apple-iphone-7r4',           gen: '6-8',  prices: { compatible: 40 } },
  { name: 'iPhone 7 Plus',     img: 'apple-iphone-7-plus-r2',     gen: '6-8',  prices: { compatible: 50 } },
  { name: 'iPhone 8',          img: 'apple-iphone-8-new',         gen: '6-8',  prices: { compatible: 50 } },
  { name: 'iPhone 8 Plus',     img: 'apple-iphone-8-plus-new',    gen: '6-8',  prices: { compatible: 60 } },
  { name: 'iPhone X',          img: 'apple-iphone-x',             gen: 'x-se', prices: { compatible: 60 } },
  { name: 'iPhone XS',         img: 'apple-iphone-xs-new',        gen: 'x-se', prices: { compatible: 60 } },
  { name: 'iPhone XS Max',     img: 'apple-iphone-xs-max-new1',   gen: 'x-se', prices: { compatible: 70 } },
  { name: 'iPhone XR',         img: 'apple-iphone-xr-new',        gen: 'x-se', prices: { compatible: 70 } },
  { name: 'iPhone SE (2020)',  img: 'apple-iphone-se-2020',       gen: 'x-se', prices: { compatible: 60, premium: 120, original: 150 } },
  { name: 'iPhone SE (2022)',  img: 'apple-iphone-se-2022',       gen: 'x-se', prices: { compatible: 60 } },
  { name: 'iPhone 11',         img: 'apple-iphone-11',            gen: '11',   prices: { compatible: 70 } },
  { name: 'iPhone 11 Pro',     img: 'apple-iphone-11-pro',        gen: '11',   prices: { compatible: 80, premium: 110, original: 140 } },
  { name: 'iPhone 11 Pro Max', img: 'apple-iphone-11-pro-max-',   gen: '11',   prices: { compatible: 90, premium: 120, original: 150 } },
  { name: 'iPhone 12 mini',    img: 'apple-iphone-12-mini',       gen: '12',   prices: { compatible: 80, premium: 100, original: 120 } },
  { name: 'iPhone 12',         img: 'apple-iphone-12',            gen: '12',   prices: { compatible: 80, premium: 100, original: 120 } },
  { name: 'iPhone 12 Pro',     img: 'apple-iphone-12-pro--',      gen: '12',   prices: { compatible: 80, premium: 100, original: 120 } },
  { name: 'iPhone 12 Pro Max', img: 'apple-iphone-12-pro-max-',   gen: '12',   prices: { compatible: 100, premium: 120, original: 180 } },
  { name: 'iPhone 13 mini',    img: 'apple-iphone-13-mini',       gen: '13',   prices: { compatible: 90, premium: 110, original: 140 } },
  { name: 'iPhone 13',         img: 'apple-iphone-13',            gen: '13',   prices: { compatible: 90, premium: 110, original: 140 } },
  { name: 'iPhone 13 Pro',     img: 'apple-iphone-13-pro',        gen: '13',   prices: { compatible: 100, premium: 120, original: 150 } },
  { name: 'iPhone 13 Pro Max', img: 'apple-iphone-13-pro-max',    gen: '13',   prices: { compatible: 110, premium: 130, original: 160 } },
  { name: 'iPhone 14',         img: 'apple-iphone-14',            gen: '14',   prices: { compatible: 100, premium: 110, original: 150 } },
  { name: 'iPhone 14 Plus',    img: 'apple-iphone-14-plus',       gen: '14',   prices: { compatible: 110, premium: 120, original: 180 } },
  { name: 'iPhone 14 Pro',     img: 'apple-iphone-14-pro',        gen: '14',   prices: { compatible: 120, premium: 150, original: 200 } },
  { name: 'iPhone 14 Pro Max', img: 'apple-iphone-14-pro-max-',   gen: '14',   prices: { compatible: 130, premium: 160, original: 220 } },
  { name: 'iPhone 15',         img: 'apple-iphone-15',            gen: '15',   prices: { compatible: 110, premium: 140, original: 180 } },
  { name: 'iPhone 15 Plus',    img: 'apple-iphone-15-plus-',      gen: '15',   prices: { compatible: 120, premium: 150, original: 180 } },
  { name: 'iPhone 15 Pro',     img: 'apple-iphone-15-pro',        gen: '15',   prices: { compatible: 120, premium: 160, original: 250 } },
  { name: 'iPhone 15 Pro Max', img: 'apple-iphone-15-pro-max',    gen: '15',   prices: { compatible: 130, premium: 170, original: 260 } },
  { name: 'iPhone 16',         img: 'apple-iphone-16',            gen: '16',   prices: { compatible: 120, premium: 150, original: 190 } },
  { name: 'iPhone 16 Plus',    img: 'apple-iphone-16-plus',       gen: '16',   prices: { compatible: 130, premium: 160, original: 190 } },
  { name: 'iPhone 16 Pro',     img: 'apple-iphone-16-pro',        gen: '16',   prices: { compatible: 130, premium: 170, original: 260 } },
  { name: 'iPhone 16 Pro Max', img: 'apple-iphone-16-pro-max',    gen: '16',   prices: { compatible: 140, premium: 190, original: 320 } },
  { name: 'iPhone 16e',        img: 'apple-iphone-16e',           gen: '16',   prices: { compatible: 120, premium: 150, original: 180 } },
  { name: 'iPhone Air',        img: 'apple-iphone-air',           gen: '17',   prices: { premium: 260 } },
  { name: 'iPhone 17',         img: 'apple-iphone-17',            gen: '17',   prices: { compatible: 150, premium: 190 } },
  { name: 'iPhone 17 Pro',     img: 'apple-iphone-17-pro',        gen: '17',   prices: { compatible: 150, premium: 190 } },
  { name: 'iPhone 17 Pro Max', img: 'apple-iphone-17-pro-max',    gen: '17',   prices: { compatible: 150, premium: 290 } },
  { name: 'iPhone 17e',        img: 'apple-iphone-17e',           gen: '17',   prices: { compatible: 150, premium: 190 } },
];

const FILTERS = [
  { label: 'Tous',           value: 'all'  },
  { label: 'iPhone 6 / 7 / 8', value: '6-8'  },
  { label: 'X · XR · SE',    value: 'x-se' },
  { label: 'iPhone 11',      value: '11'   },
  { label: 'iPhone 12',      value: '12'   },
  { label: 'iPhone 13',      value: '13'   },
  { label: 'iPhone 14',      value: '14'   },
  { label: 'iPhone 15',      value: '15'   },
  { label: 'iPhone 16',      value: '16'   },
  { label: 'iPhone 17 / Air', value: '17'  },
];

function priceRow(tier, value) {
  return `
    <li class="ec-price tier-${tier}">
      <span class="ec-tier">${TIER_LABELS[tier]}</span>
      <span class="ec-amount">${value}&nbsp;€</span>
    </li>`;
}

function renderCard(p) {
  const rows = TIERS
    .filter((t) => p.prices[t] != null)
    .map((t) => priceRow(t, p.prices[t]))
    .join('');
  return `
    <article class="ec-card" data-gen="${p.gen}">
      <div class="ec-img-wrap">
        <img
          src="${IMG_BASE}${p.img}.jpg"
          alt="Écran ${p.name}"
          loading="lazy"
          onerror="this.parentElement.classList.add('ec-img-fallback'); this.remove();" />
      </div>
      <div class="ec-body">
        <h4 class="ec-name">${p.name}</h4>
        <ul class="ec-prices">${rows}</ul>
      </div>
    </article>`;
}

function renderEcrans() {
  const grid = document.getElementById('ecransGrid');
  const filtersEl = document.getElementById('ecransFilters');
  if (!grid || !filtersEl) return;

  grid.innerHTML = PHONES.map(renderCard).join('');

  filtersEl.innerHTML = FILTERS
    .map(
      (f, i) =>
        `<button type="button" class="ec-chip${i === 0 ? ' active' : ''}" data-value="${f.value}">${f.label}</button>`
    )
    .join('');

  filtersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.ec-chip');
    if (!btn) return;
    filtersEl.querySelectorAll('.ec-chip').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const val = btn.dataset.value;
    grid.querySelectorAll('.ec-card').forEach((card) => {
      card.style.display = val === 'all' || card.dataset.gen === val ? '' : 'none';
    });
  });
}
renderEcrans();

// =========== Animations au défilement ===========
const revealEls = document.querySelectorAll(
  '.section-head, .card, .step, .shop-item, .features-copy, .features-visual, .garantie-inner, .rachat-cta, .contact-info, .contact-map, .ec-card'
);
revealEls.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
revealEls.forEach((el) => observer.observe(el));
