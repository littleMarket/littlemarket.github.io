document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
  const peach = document.getElementById('peach');
  if (!peach) return;
  peach.addEventListener('click', () => {
    peach.classList.remove('petted');
    void peach.offsetWidth;
    peach.classList.add('petted');
  });
});
