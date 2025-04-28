// Optional: Smooth scroll or any custom JavaScript
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        new bootstrap.Collapse(navbar).toggle();
      }
    });
  });
