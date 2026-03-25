/* ══════════════════════════════════════════
   PROPERTY MODAL & DATA LOGIC
   Centralized for Sundance Retreats
   ══════════════════════════════════════════ */

(function () {
  'use strict';

  const PROPERTIES = {
    'vn-villa': {
      id: 'vn-villa',
      name: 'VN Villa',
      tag: 'Lonavla · VN Villa',
      type: 'Villa · 6 Guests',
      desc: 'A beautifully perched villa offering sweeping panoramic views of Lonavla\'s lush valleys. Perfect for groups seeking a mix of adventure and tranquility — with a private bonfire area, spacious deck, and modern interiors inspired by local craftsmanship. Mornings here feel like waking up inside a cloud.',
      features: [
        { icon: 'fa-users', label: '6 Guests' },
        { icon: 'fa-bed', label: '3 Bedrooms' },
        { icon: 'fa-bath', label: '2 Bathrooms' },
        { icon: 'fa-fire', label: 'Bonfire Area' },
        { icon: 'fa-mountain', label: 'Valley Views' },
        { icon: 'fa-wifi', label: 'Wi-Fi' },
        { icon: 'fa-car', label: 'Parking' },
        { icon: 'fa-utensils', label: 'Kitchen' },
      ],
      brochure: 'Assets/Properties/list/VN-Villa/ppt/VN villa.pdf',
      images: [
        { src: 'Assets/Properties/list/VN-Villa/Photos/1.jpg',  fallback: 'https://images.unsplash.com/photo-1505691723518-36a0df2f0b6b?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/2.jpg',  fallback: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/3.jpg',  fallback: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/4.jpg',  fallback: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/5.jpg',  fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/6.jpg',  fallback: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/7.jpg',  fallback: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/8.jpg',  fallback: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/9.jpg',  fallback: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/10.jpg', fallback: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80' },
        { src: 'Assets/Properties/list/VN-Villa/Photos/11.jpg', fallback: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&q=80' },
      ]
    },
    'hangout': {
      id: 'hangout',
      name: 'Hangout Villa',
      tag: 'Lonavla · Hangout',
      type: 'Cottage · 12 Guests',
      desc: 'Nestled among rolling green slopes, this charming farmhouse retreat offers an authentic countryside experience just a short drive from Lonavla\'s famous viewpoints. Ideal for yoga groups, creative workshops, and anyone looking to reset. Wake up to birdsong, explore the property\'s organic garden, and spend evenings around the fire.',
      features: [
        { icon: 'fa-users', label: '4 Guests' },
        { icon: 'fa-bed', label: '2 Bedrooms' },
        { icon: 'fa-bath', label: '1 Bathroom' },
        { icon: 'fa-seedling', label: 'Organic Garden' },
        { icon: 'fa-tree', label: 'Nature Trails' },
        { icon: 'fa-wifi', label: 'Wi-Fi' },
        { icon: 'fa-paw', label: 'Pet Friendly' },
        { icon: 'fa-utensils', label: 'Farm Kitchen' },
      ],
      images: [
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (1).webp',  fallback: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (2).webp',  fallback: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (3).webp',  fallback: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (4).webp',  fallback: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (5).webp',  fallback: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (6).webp',  fallback: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (7).webp',  fallback: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (8).webp',  fallback: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (9).webp',  fallback: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (10).webp', fallback: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (11).webp', fallback: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (12).webp', fallback: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (13).webp', fallback: 'https://images.unsplash.com/photo-1467511961117-d851a8f0ea95?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (14).webp', fallback: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (15).webp', fallback: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (16).webp', fallback: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (17).webp', fallback: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (18).webp', fallback: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19 (19).webp', fallback: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80' },
        { src: 'Assets/Properties/list/Hangout/2025-02-19.webp',      fallback: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80' },
      ]
    }
  };

  const overlay   = document.getElementById('prop-modal');
  const mainImg   = document.getElementById('modal-main-img');
  const counter   = document.getElementById('img-counter');
  const thumbStrip= document.getElementById('prop-thumb-strip');
  const prevBtn   = document.getElementById('img-prev');
  const nextBtn   = document.getElementById('img-next');
  const closeBtn  = document.getElementById('modal-close');

  let currentProp = null;
  let currentIdx  = 0;

  /* ─── Build thumbnail strip ─── */
  function buildThumbs(prop) {
    thumbStrip.innerHTML = '';
    prop.images.forEach((img, i) => {
      const t = document.createElement('img');
      t.className = 'prop-thumb' + (i === 0 ? ' active' : '');
      t.src = img.src;
      t.onerror = () => { t.src = img.fallback; };
      t.alt = `Photo ${i + 1}`;
      t.addEventListener('click', () => setImage(i));
      thumbStrip.appendChild(t);
    });
  }

  /* ─── Set active image ─── */
  function setImage(idx) {
    if (!currentProp) return;
    const imgs = currentProp.images;
    idx = (idx + imgs.length) % imgs.length;
    currentIdx = idx;

    // Fade transition
    mainImg.classList.add('fading');
    setTimeout(() => {
      const img = imgs[idx];
      mainImg.src = img.src;
      mainImg.onerror = () => { mainImg.src = img.fallback; };
      mainImg.classList.remove('fading');
    }, 200);

    counter.textContent = `${idx + 1} / ${imgs.length}`;

    // Active thumb
    thumbStrip.querySelectorAll('.prop-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });

    // Scroll active thumb into view
    const activThumb = thumbStrip.querySelectorAll('.prop-thumb')[idx];
    if (activThumb) activThumb.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  /* ─── Load property into modal ─── */
  function loadProp(propId) {
    const prop = PROPERTIES[propId];
    if (!prop) return;
    currentProp = prop;
    currentIdx  = 0;

    // Set image
    const firstImg = prop.images[0];
    mainImg.src = firstImg.src;
    mainImg.onerror = () => { mainImg.src = firstImg.fallback; };
    counter.textContent = `1 / ${prop.images.length}`;

    // Thumbnails
    buildThumbs(prop);

    // Info
    document.getElementById('modal-tag').textContent  = prop.tag;
    document.getElementById('modal-type').textContent = prop.type;
    document.getElementById('modal-title').textContent = prop.name;
    document.getElementById('modal-desc').textContent  = prop.desc;

    // Brochure
    const brochureBtn = document.getElementById('modal-brochure');
    if (prop.brochure) {
      brochureBtn.href = prop.brochure;
      brochureBtn.style.display = 'flex';
    } else {
      brochureBtn.href = '#';
    }

    const featEl = document.getElementById('modal-features');
    featEl.innerHTML = prop.features.map(f =>
      `<div class="prop-feat-pill"><i class="fas ${f.icon}"></i>${f.label}</div>`
    ).join('');
  }

  /* ─── Open modal ─── */
  function openModal(propId) {
    loadProp(propId);
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /* ─── Close modal ─── */
  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ─── Events ─── */
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (!overlay || !overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') setImage(currentIdx + 1);
    if (e.key === 'ArrowLeft')  setImage(currentIdx - 1);
  });

  if (prevBtn) prevBtn.addEventListener('click', () => setImage(currentIdx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => setImage(currentIdx + 1));

  // All "View Details" buttons with data-prop
  document.querySelectorAll('.prop-open-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(btn.dataset.prop);
    });
  });

  // Clicking the card itself also opens modal
  document.querySelectorAll('.bcard[data-prop]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.prop-open-btn')) return;
      openModal(card.dataset.prop);
    });
  });

})();
