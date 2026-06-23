const verses = [
  { feeling: "If you are depressed", ref: "Bhagavad Gita 6.5", chapter: 6, verse: 5, note: "Lift yourself through your own mind and inner strength.", keywords: "depressed low sad self uplift mind" },
  { feeling: "When you are lonely", ref: "Bhagavad Gita 9.22", chapter: 9, verse: 22, note: "Krishna protects and carries what His devotees need.", keywords: "lonely alone protection devotion" },
  { feeling: "When you want courage", ref: "Bhagavad Gita 2.3", chapter: 2, verse: 3, note: "Do not give in to weakness; rise with courage.", keywords: "courage fear weakness strength" },
  { feeling: "If people seem unkind", ref: "Bhagavad Gita 12.13", chapter: 12, verse: 13, note: "Compassion, humility, and non-hatred are divine qualities.", keywords: "unkind kindness compassion hate" },
  { feeling: "When your faith needs stirring", ref: "Bhagavad Gita 4.39", chapter: 4, verse: 39, note: "Faith, discipline, and wisdom bring peace.", keywords: "faith belief trust spiritual" },
  { feeling: "When you have sinned", ref: "Bhagavad Gita 9.30", chapter: 9, verse: 30, note: "A sincere turn toward the Divine can transform the heart.", keywords: "sinned mistake guilt forgiveness" },
  { feeling: "When you worry", ref: "Bhagavad Gita 2.47", chapter: 2, verse: 47, note: "Focus on your action, not anxiety over the result.", keywords: "worry anxiety result work karma" },
  { feeling: "When God seems far away", ref: "Bhagavad Gita 8.5", chapter: 8, verse: 5, note: "Remembering Krishna brings the mind back to Him.", keywords: "god far away remembrance" },
  { feeling: "Feeling bitter and critical", ref: "Bhagavad Gita 12.15", chapter: 12, verse: 15, note: "Become steady, peaceful, and free from agitation.", keywords: "bitter critical anger calm" },
  { feeling: "When in sorrow", ref: "Bhagavad Gita 2.11", chapter: 2, verse: 11, note: "Wisdom helps us see beyond grief and confusion.", keywords: "sorrow grief sadness loss" },
  { feeling: "When you're in danger", ref: "Bhagavad Gita 18.66", chapter: 18, verse: 66, note: "Surrender to Krishna and take refuge in Him.", keywords: "danger surrender protection fear" },
  { feeling: "If your wallet is empty", ref: "Bhagavad Gita 3.8", chapter: 3, verse: 8, note: "Do your duty; right action sustains life.", keywords: "money wallet empty duty work" },
  { feeling: "Discouraged about work", ref: "Bhagavad Gita 3.19", chapter: 3, verse: 19, note: "Act with dedication, without attachment to rewards.", keywords: "discouraged work duty action" },
  { feeling: "When you want peace", ref: "Bhagavad Gita 2.70", chapter: 2, verse: 70, note: "Peace belongs to the one who is not disturbed by desires.", keywords: "peace calm desire ocean" },
  { feeling: "Vedantic assurance", ref: "Bhagavad Gita 9.29", chapter: 9, verse: 29, note: "The Divine is equal to all and present for all.", keywords: "vedanta assurance equal divine" },
  { feeling: "When prayers grow selfish", ref: "Bhagavad Gita 17.20", chapter: 17, verse: 20, note: "True giving is done at the right time, place, and spirit.", keywords: "prayer selfish charity giving" },
  { feeling: "For a great opportunity", ref: "Bhagavad Gita 11.33", chapter: 11, verse: 33, note: "Become an instrument of divine purpose through action.", keywords: "opportunity success action instrument" },
  { feeling: "Understanding Vedanta", ref: "Bhagavad Gita 4.7-8", chapter: 4, verse: "7-8", note: "Whenever dharma declines, Krishna appears to restore it.", keywords: "vedanta avatar dharma protection" },
  { feeling: "If self pride takes hold", ref: "Bhagavad Gita 16.4", chapter: 16, verse: 4, note: "Pride and arrogance move the mind away from wisdom.", keywords: "pride ego arrogance self" },
  { feeling: "When you leave to travel", ref: "Bhagavad Gita 10.10", chapter: 10, verse: 10, note: "Krishna gives understanding to those devoted to Him.", keywords: "travel guidance wisdom direction" },
  { feeling: "If you want to be fruitful", ref: "Bhagavad Gita 3.30", chapter: 3, verse: 30, note: "Offer your actions to the Divine and act without feverishness.", keywords: "fruitful success surrender action" },
  { feeling: "When people fail you", ref: "Bhagavad Gita 9.18", chapter: 9, verse: 18, note: "Krishna is the refuge, friend, support, and ultimate goal.", keywords: "people fail refuge friend support" }
];

const cards = document.getElementById('verses');
const searchInput = document.getElementById('searchInput');

function verseUrl(item) {
  const versePart = String(item.verse);
  return `https://www.holy-bhagavad-gita.org/chapter/${item.chapter}/verse/${versePart}`;
}

function chapterUrl(item) {
  return `https://www.holy-bhagavad-gita.org/chapter/${item.chapter}`;
}

function render(list) {
  if (!list.length) {
    cards.innerHTML = `<div class="no-results">No matching sloka found. Try words like worry, peace, lonely, courage, or work.</div>`;
    return;
  }

  cards.innerHTML = list.map(item => `
    <article class="card">
      <h3>${item.feeling}</h3>
      <span class="ref">${item.ref}</span>
      <p class="note">${item.note}</p>
      <div class="actions">
        <a class="btn primary" href="${verseUrl(item)}" target="_blank" rel="noopener">Read Sloka</a>
        <a class="btn secondary" href="${chapterUrl(item)}" target="_blank" rel="noopener">Full Chapter</a>
      </div>
    </article>
  `).join('');
}

searchInput.addEventListener('input', e => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = verses.filter(item =>
    item.feeling.toLowerCase().includes(query) ||
    item.ref.toLowerCase().includes(query) ||
    item.note.toLowerCase().includes(query) ||
    item.keywords.toLowerCase().includes(query)
  );
  render(filtered);
});

render(verses);
