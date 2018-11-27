var menubtn = document.getElementById('menu');
var navbar = document.getElementById('navbar-item-drawer');
menubtn.addEventListener('click', function(e) {
    navbar.classList.toggle('open');
    e.stopPropagation();
  });