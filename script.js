
// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

// Handle Audit Button Clicks
document.querySelectorAll('.audit-btn').forEach(button => {
  button.onclick = function () {
    window.open('YOUR_GOOGLE_FORM_LINK', '_blank');
  };
});
