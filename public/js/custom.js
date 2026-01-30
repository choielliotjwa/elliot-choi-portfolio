// Open CV link in new tab
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href*="/files/Elliot_Choi_Resume.pdf"]').forEach(function(link) {
    link.setAttribute('target', '_blank');
  });
});
