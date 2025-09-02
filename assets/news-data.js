/* Shared news data for Heroverse
   Include this file on any page that needs news items:
   <script src="assets/news-data.js"></script>
*/

// Utility to build placeholder images (swap to real posters anytime)
const heroImg = (seed, w = 800, h = 450) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

/* -------------------------------------------------------
   DATA SHAPE (all fields optional except id/title/img/date/type/uni)
   {
     id, title, date, type: 'Movie'|'Comics'|'Theory'|'Series', uni: 'Marvel'|'DC'|'Other',
     img, alt, summary, details, src, sourceName, trailer, tags:[], featured: boolean
   }
-------------------------------------------------------- */

// Public, global array that both index.html and news.html can consume
window.NEWS_ITEMS = [
  {
    id: 's1',
    type: 'Series',
    uni: 'DC',
    date: '2025-09-02',
    title: 'Peacemaker Season 2 released',
    // Use a stable poster-like frame from the official teaser (maxres YouTube)
    img: 'https://img.youtube.com/vi/-QwXokuIZjM/maxresdefault.jpg',
    alt: 'John Cena as Peacemaker in Season 2 teaser poster frame',
    // You can point to DC.com, Max, or YouTube teaser; change anytime
    src: 'https://www.youtube.com/watch?v=-QwXokuIZjM',
    sourceName: 'Watch teaser',
    trailer: 'https://www.youtube.com/watch?v=-QwXokuIZjM',
    featured: true,
    tags: ['release', 'Max', 'James Gunn'],
    summary:
      'The long-awaited sophomore season drops with bigger missions and even louder helmets.',
    details:
      'James Gunn returns with a chaotic cocktail of heart, hair metal, and hard choices as Christopher Smith (John Cena) faces a new conspiracy that tests his definition of “peace at any cost.” Expect deeper arcs for Harcourt and Adebayo, needle-drop mayhem, and post-credit breadcrumbs tying into the evolving DCU slate.'
  },
  {
    id: 'm1',
    type: 'Movie',
    uni: 'Marvel',
    date: '2025-08-05',
    title: 'Spider-Man: Web of Realities announced',
    img: heroImg('sm-web'),
    alt: 'Stylized multiverse web background for Spider-Man announcement',
    src: '#',
    sourceName: 'Source',
    tags: ['announcement', 'multiverse'],
    summary:
      'Sony/Marvel unveil a live-action multiversal Spidey thriller with grounded NYC stakes and a cameo rumor that has fandom buzzing.'
  },
  {
    id: 'm2',
    type: 'Movie',
    uni: 'DC',
    date: '2025-07-21',
    title: 'Wonder Woman: Themyscira Rises casting update',
    img: heroImg('ww-cast'),
    alt: 'Golden lasso motif with Amazons silhouettes',
    src: '#',
    sourceName: 'Source',
    tags: ['casting', 'amazons'],
    summary:
      'Amazonian politics meet mythic warfare as new cast members suggest a story spanning eras before Diana.'
  },
  {
    id: 'c1',
    type: 'Comics',
    uni: 'Marvel',
    date: '2025-06-15',
    title: 'X-Men #1 relaunch brings bold roster',
    img: heroImg('xmen1'),
    alt: 'Team splash art concept for X-Men relaunch',
    src: '#',
    sourceName: 'Source',
    tags: ['relaunch', 'mutants'],
    summary:
      'A new Dawn of Mutants era re-centers the Xavier dream while fielding a surprising stealth leader.'
  },
  {
    id: 'c2',
    type: 'Comics',
    uni: 'DC',
    date: '2025-06-01',
    title: 'Superman: Solaris War limited series',
    img: heroImg('sup-solaris'),
    alt: 'Solaris the Tyrant Sun looming over Metropolis',
    src: '#',
    sourceName: 'Source',
    tags: ['limited', 'cosmic'],
    summary:
      'Solaris the Tyrant Sun returns in a cosmic chess match that pushes Clark’s science brain to the limit.'
  },
  {
    id: 't1',
    type: 'Theory',
    uni: 'Marvel',
    date: '2025-05-28',
    title: 'Theory: Doctor Doom seeded across Phase 7 post-credits',
    img: heroImg('doom-theory'),
    alt: 'Green-lit lab scene hinting at Doom',
    src: '#',
    sourceName: 'Source',
    tags: ['theory', 'easter-eggs'],
    summary:
      'Fans think micro-cues and Latveria easter eggs map a Doom tapestry culminating in a Secret Wars pivot.'
  },
  {
    id: 't2',
    type: 'Theory',
    uni: 'DC',
    date: '2025-05-22',
    title: 'Theory: The Flash reboot hides Kingdom Come setup',
    img: heroImg('kc-theory'),
    alt: 'Aging heroes silhouette paying homage to Kingdom Come',
    src: '#',
    sourceName: 'Source',
    tags: ['theory', 'legacy'],
    summary:
      'Iconography and casting whispers point to a legacy future where ideals clash with reckless power.'
  },
  {
    id: 'c3',
    type: 'Comics',
    uni: 'Other',
    date: '2025-05-10',
    title: 'Invincible: Aftermath special announced',
    img: heroImg('inv-after'),
    alt: 'City skyline with battle-worn cape',
    src: '#',
    sourceName: 'Source',
    tags: ['special', 'viltrumite'],
    summary:
      'A character-driven cooldown issue reckons with collateral damage—and teases a new Viltrumite player.'
  },
  {
    id: 'm3',
    type: 'Movie',
    uni: 'Other',
    date: '2025-05-05',
    title: 'Animated crossover: Guardians × Justice League?',
    img: heroImg('crossover'),
    alt: 'Colorful mash-up silhouettes hinting at crossover',
    src: '#',
    sourceName: 'Source',
    tags: ['rumor', 'crossover'],
    summary:
      'A rumored charity short pairs cosmic chaos with stoic strategy in a fourth-wall-friendly romp.'
  },
  {
    id: 'c4',
    type: 'Comics',
    uni: 'Marvel',
    date: '2025-04-20',
    title: 'Daredevil: Devil at Dawn announced',
    img: heroImg('dd-dawn'),
    alt: 'Red-lit alley with billy club reflection',
    src: '#',
    sourceName: 'Source',
    tags: ['street-level', 'announcement'],
    summary:
      'Back-to-basics street-level saga with legal intrigue and a haunting new antagonist tied to Matt’s past.'
  },
  {
    id: 't3',
    type: 'Theory',
    uni: 'Other',
    date: '2025-04-01',
    title: 'Theory: Spawn film connects to a wider “Dark Line”',
    img: heroImg('spawn-dark'),
    alt: 'Brooding cape silhouette under neon sign',
    src: '#',
    sourceName: 'Source',
    tags: ['theory', 'dark-line'],
    summary:
      'Industry breadcrumbs hint at coordinated horror-adjacent heroes building to a supernatural crossover.'
  }
];

/* ---------- Optional helpers you can reuse anywhere ---------- */
window.HeroverseNews = {
  formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  },
  byNewest(a, b) {
    return new Date(b.date) - new Date(a.date);
  },
  pickRandom(n = 3) {
    return this.random(n);
  },
  random(n = 3, opts = {}) {
    const exclude = new Set(opts.excludeIds || []);
    const pool = window.NEWS_ITEMS.filter(it => !exclude.has(it.id));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, n);
  },
  latest(n = 3) {
    return [...window.NEWS_ITEMS].sort(this.byNewest).slice(0, n);
  },
  getById(id) {
    return window.NEWS_ITEMS.find(x => x.id === id) || null;
  },
  slugify(title) {
    return (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
};
