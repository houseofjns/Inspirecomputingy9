/* Lightweight student portal gate for an offline classroom website.
   This is a convenience gate only; credentials are client-side, not server-secured. */
(function () {
  'use strict';
  const ACCESS_PASSWORD = 'HJS2026';
  const SESSION_KEY = 'hjsPortalStudent';
  const screen = document.getElementById('portal-login-screen');
  const form = document.getElementById('portal-login-form');
  const nameField = document.getElementById('portal-login-name');
  const passwordField = document.getElementById('portal-login-password');
  const error = document.getElementById('portal-login-error');
  const showButton = document.getElementById('portal-toggle-password');
  const logoutButton = document.getElementById('portal-logout');

  function initials(name) {
    return String(name || 'Student').trim().split(/\s+/).slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('') || 'ST';
  }
  function setHeader(name) {
    window.HJS_PORTAL_STUDENT = name;
    const nameEl = document.getElementById('portal-profile-name');
    const initialsEl = document.getElementById('portal-profile-initials');
    if (nameEl) nameEl.textContent = name;
    if (initialsEl) initialsEl.textContent = initials(name);
    if (screen) screen.hidden = true;
    document.body.classList.remove('portal-locked');
    document.body.classList.add('portal-authenticated');
  }
  function lockPortal() {
    window.HJS_PORTAL_STUDENT = '';
    document.body.classList.add('portal-locked');
    document.body.classList.remove('portal-authenticated');
    if (screen) screen.hidden = false;
    if (nameField) nameField.focus();
  }

  let savedName = '';
  try { savedName = sessionStorage.getItem(SESSION_KEY) || ''; } catch (_) {}
  if (savedName) setHeader(savedName); else lockPortal();

  if (showButton && passwordField) {
    showButton.addEventListener('click', function () {
      const reveal = passwordField.type === 'password';
      passwordField.type = reveal ? 'text' : 'password';
      showButton.textContent = reveal ? 'Hide' : 'Show';
      showButton.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    });
  }

  if (form) form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = (nameField.value || '').trim().replace(/\s+/g, ' ');
    const password = passwordField.value || '';
    error.textContent = '';
    if (!name || !password) {
      error.textContent = 'Please enter your student name and access password.';
      return;
    }
    if (password !== ACCESS_PASSWORD) {
      error.textContent = 'Incorrect access password. Please check with your teacher.';
      passwordField.focus();
      passwordField.select();
      return;
    }
    try { sessionStorage.setItem(SESSION_KEY, name); } catch (_) {}
    passwordField.value = '';
    setHeader(name);
  });

  if (logoutButton) logoutButton.addEventListener('click', function () {
    try { sessionStorage.removeItem(SESSION_KEY); } catch (_) {}
    if (form) form.reset();
    if (error) error.textContent = '';
    lockPortal();
  });
})();
