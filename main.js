// ===========================================================
// EXCLUSIVE HAI BOSS — main.js
// Small, dependency-free interactions. Replace/extend as needed.
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- footer year ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // --- breaking ticker: duplicate content so the CSS loop is seamless ---
  const tickerList = document.getElementById('tickerList');
  if (tickerList) {
    tickerList.innerHTML += tickerList.innerHTML;
  }

  // --- newsletter form (front-end only; wire this to your backend/email service) ---
  const newsForm = document.getElementById('newsForm');
  const newsConfirm = document.getElementById('newsConfirm');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: send the email to your newsletter provider (Mailchimp, Buttondown, etc.)
      newsForm.reset();
      if (newsConfirm) newsConfirm.style.display = 'block';
    });
  }

});
