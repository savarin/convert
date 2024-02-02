document.getElementById('convertBtn').addEventListener('click', function() {
    var inputUrl = document.getElementById('urlInput').value;

    // 1. Replace 'x.com' with 'twitter.com'
    var updatedUrl = inputUrl.replace('x.com', 'twitter.com');

    // 2. Lowercase all the characters
    updatedUrl = updatedUrl.toLowerCase();

    // 3. Remove all characters after '?'
    var questionMarkIndex = updatedUrl.indexOf('?');
    if (questionMarkIndex !== -1) {
        updatedUrl = updatedUrl.substring(0, questionMarkIndex);
    }

    // Display the result
    document.getElementById('result').textContent = updatedUrl;
});
