const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.body.classList.add(currentTheme);
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  let theme = 'light';
  if (document.body.classList.contains('dark')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
});
