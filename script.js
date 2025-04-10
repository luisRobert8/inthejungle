// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

document.querySelectorAll('.audit-btn').forEach(button => {
  button.onclick = function () {
    // Directly open the Google Form in a new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeX_pM6cansnFn8dwA_AJIE9kMpojDfKepY5_a0N2TPQWuC5A/viewform?usp=sf_link', '_blank');
  };
});
