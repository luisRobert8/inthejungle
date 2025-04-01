
// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

// Handle Audit Button Clicks
document.querySelectorAll('.audit-btn').forEach(button => {
  button.onclick = function () {
    window.open(<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeX_pM6cansnFn8dwA_AJIE9kMpojDfKepY5_a0N2TPQWuC5A/viewform?embedded=true" width="640" height="2150" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>);
  };
});
