document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
  const peach = document.getElementById('peach');
  const message = document.getElementById('pet-message');
  if (!peach || !message) return;
  const greetings = ['oh.', 'a little blush.', 'thank you.', 'peachy.', 'again, please.'];
  let count = 0;
  peach.addEventListener('click', () => {
    count += 1;
    message.textContent = greetings[(count - 1) % greetings.length];
    peach.classList.remove('petted');
    void peach.offsetWidth;
    peach.classList.add('petted');
  });
});
