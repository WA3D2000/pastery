
let count = localStorage.getItem('visitCount') || 0;
count = Number(count);
count += 1;
localStorage.setItem('visitCount', count);
document.getElementById('count').textContent = count;


/* sticky navbar*/
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

/* dark mode */
const toggleButton = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

