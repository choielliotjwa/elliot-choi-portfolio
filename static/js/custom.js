document.addEventListener('DOMContentLoaded', function() {
  // Open CV link in new tab
  document.querySelectorAll('a[href*="/files/Elliot_Choi_Resume.pdf"]').forEach(function(link) {
    link.setAttribute('target', '_blank');
  });
  
  // Hide sidebar on non-blog pages
  var path = window.location.pathname;
  if (path.includes('/about') || path.includes('/papers')) {
    var menu = document.querySelector('.book-menu');
    if (menu) {
      menu.style.display = 'none';
    }
    var page = document.querySelector('.book-page');
    if (page) {
      page.style.maxWidth = '900px';
      page.style.margin = '0 auto';
    }
  }
  
  // Add back arrow on about, papers, and blogs pages
  if (path.includes('/about') || path.includes('/papers') || path.includes('/blogs')) {
    var page = document.querySelector('.book-page');
    if (page) {
      var backButton = document.createElement('a');
      backButton.href = '/';
      backButton.innerHTML = '← Back to Home';
      backButton.style.cssText = 'display: inline-block; margin-bottom: 1.5rem; color: #4a90d9; text-decoration: none; font-size: 0.95rem;';
      backButton.onmouseover = function() { this.style.textDecoration = 'underline'; };
      backButton.onmouseout = function() { this.style.textDecoration = 'none'; };
      page.insertBefore(backButton, page.firstChild);
    }
  }
});
