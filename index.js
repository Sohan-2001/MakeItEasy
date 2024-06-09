document.addEventListener('input', function (event) {
    if (event.target.id !== 'searchBar') return;
    var input = event.target;
    var minWidth = 100; // Minimum width in pixels
    var maxWidth = 500; // Maximum width in pixels
    var width = (input.value.length + 1) * 8; // Calculate width based on character count
    input.style.width = Math.max(minWidth, Math.min(width, maxWidth)) + 'px';
  }, false);

 function GO() {
  // Get the URL from the input field
  var url_ = document.getElementById('searchBar').value;

  // Check if the URL starts with 'http://' or 'https://'
  if (!url_.match(/^[a-zA-Z]+:\/\//)) {
    url_ = 'http://' + url_;
  }

  // Attempt to set the iframe src attribute
  try {
    var iframe = document.createElement('iframe');
    iframe.src = url_;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.setAttribute('allowfullscreen', '');

    // Clear the #bottom div and append the new iframe
    var bottomDiv = document.getElementById('bottom');
    bottomDiv.innerHTML = '';
    bottomDiv.appendChild(iframe);
  } catch (e) {
    console.error('Error loading iframe:', e);
    alert('There was an error loading the content. Please check the console for more details.');
  }
}
