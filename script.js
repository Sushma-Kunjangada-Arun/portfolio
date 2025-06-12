const body = document.body;
const themeToggleDesktop = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

// Set the theme and update icons
function setTheme(mode) {
  // Ensure only one theme class is active
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(`${mode}-mode`);

  // Create Lucide icon element
  const createIcon = (mode) => {
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', mode === 'dark' ? 'sun' : 'moon');
    icon.style.color = mode === 'dark' ? '#ffffff' : '#000000';
    return icon;
  };

  // Replace desktop icon
  if (themeToggleDesktop) {
    themeToggleDesktop.innerHTML = '';
    themeToggleDesktop.appendChild(createIcon(mode));
  }

  // Replace mobile icon
  if (themeToggleMobile) {
    themeToggleMobile.innerHTML = '';
    themeToggleMobile.appendChild(createIcon(mode));
  }

  // Re-render icons
  lucide.createIcons();

  // Save theme preference
  localStorage.setItem('theme', mode);
}

// Toggle light/dark mode
function toggleTheme() {
  const isCurrentlyDark = body.classList.contains('dark-mode');
  setTheme(isCurrentlyDark ? 'light' : 'dark');
}

// Event listeners for toggle buttons
themeToggleDesktop?.addEventListener('click', toggleTheme);
themeToggleMobile?.addEventListener('click', toggleTheme);

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.querySelector(".menu-overlay");
  const icon = document.querySelector(".hamburger-icon");

  menu?.classList.toggle("open");
  overlay?.classList.toggle("show");
  icon?.classList.toggle("open");
}

// 📋 Copy to clipboard
function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}

lucide.createIcons();