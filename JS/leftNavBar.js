document.addEventListener('DOMContentLoaded', function() {
    fetch('./HTML/navBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('left-navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});
