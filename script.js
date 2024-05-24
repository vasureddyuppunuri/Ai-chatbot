var q = "Testing google search";
document.getElementById('search-button').onclick = function() {
    window.open('http://google.com/search?q='+q);
};