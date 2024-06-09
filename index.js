document.addEventListener('input', function (event) {
    if (event.target.id !== 'searchBar') return;
    var input = event.target;
    var minWidth = 100; // Minimum width in pixels
    var maxWidth = 500; // Maximum width in pixels
    var width = (input.value.length + 1) * 8; // Calculate width based on character count
    input.style.width = Math.max(minWidth, Math.min(width, maxWidth)) + 'px';
  }, false);

  async function GO() {
    // Get the URL from the input field
    var url_ = document.getElementById('searchBar').value;
  
    // Check if the URL starts with 'http://' or 'https://'
    if (!url_.match(/^[a-zA-Z]+:\/\//)) {
      url_ = 'http://' + url_;
    }

    
  
    // Set the innerHTML of the #bottom div to an iframe with the URL
    document.getElementById('bottom').innerHTML = '<iframe src="' + url_ + '" width="100%" height="100%"></iframe>';
  }
  