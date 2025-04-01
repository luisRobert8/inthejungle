
// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

document.querySelectorAll('.audit-btn').forEach(button => {
  button.onclick = function () {
    // Open a new window with the Google Form URL
    const newWindow = window.open('', '_blank'); // Open a new blank window
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Google Form</title>
      </head>
      <body>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeX_pM6cansnFn8dwA_AJIE9kMpojDfKepY5_a0N2TPQWuC5A/viewform?embedded=true" 
                width="1000" height="2150" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </body>
      </html>
    `);
    newWindow.document.close(); // Close the document to render it
  };
});
