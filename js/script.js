function renderWords(words) {
  const container = document.getElementById('words');
  container.innerHTML = words.map(word => `
    <div class="word-card" onclick="showModal('${word.word}', '${word.meaning}', '${word.image}')">
      <h3>${word.word}</h3>
      <p>${word.meaning}</p>
    </div>
  `).join('');
}

function showModal(word, meaning, image) {
  document.getElementById('word').textContent = word;
  document.getElementById('meaning').textContent = meaning;
  document.getElementById('image').src = image;
  document.getElementById('modal').style.display = 'block';
  
  document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  }
}