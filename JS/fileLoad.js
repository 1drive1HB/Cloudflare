// load-video-cards.js
// Load video cards from an external HTML file
fetch('./HTML/video-cards.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('video-cards').innerHTML = html;
  });
