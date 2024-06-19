// script.js

document.getElementById('search-button').addEventListener('click', function() {
    let query = document.getElementById('search-input').value;
    if (query) {
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
    }
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
