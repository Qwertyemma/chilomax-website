var typingEffect = new Typed('.typedText', {
  strings: ['web designer', 'frontend designer', 'Tech Enthusiast'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

function toggleMenu() {
  const nav1 = document.querySelector('.nav1');
  const menuButton = document.querySelector('#click i');
  nav1.classList.toggle('active');
  if (nav1.classList.contains('active')) {
    menuButton.classList.remove('fa-bars');
    menuButton.classList.add('fa-times');
  } else {
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
  }
}
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  AOS.init({ offset: 1 });

  window.onscroll = function() {
    headerShadow();
  };

  function headerShadow() {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 0) {
        header.style.boxShadow = '0 1px 6px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    }
  }

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const url = encodeURIComponent(`((link unavailable))`);
    window.open(url, '_blank').focus();
  });

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
  });
  const exploreMoreBtn = document.getElementById('explore-more-btn');
  const exploreMoreSection = document.getElementById('explore-more-section');

  exploreMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (exploreMoreSection) {
      exploreMoreSection.classList.toggle('hidden');
      exploreMoreSection.style.display = 'block';
      window.scrollTo({ top: exploreMoreSection.offsetTop, behavior: 'smooth' });
    }
  });
});