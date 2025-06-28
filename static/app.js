function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle_btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMenu);
  }
});

