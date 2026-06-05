
(function() {
  "use strict";

  /*** Apply .scrolled class to the body as the page is scrolled down*/
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
/* Mobile nav toggle */
  const menuBtn = document.getElementById("mobileNavBtn");
 const navMenu = document.getElementById("navmenu");
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {

  dropdown.addEventListener("click", function(e){

    if(window.innerWidth <= 992){

      e.stopPropagation();

      this.classList.toggle("active");
    }

  });

});
  /*** Preloader*/
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /*** Scroll top button*/
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /*** Animation on scroll function and init*/
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /** Initiate glightbox*/
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /** Initiate Pure Counter*/
  new PureCounter();

  /** Init swiper sliders*/
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();

/*Feature Section*/
const items = document.querySelectorAll(".circle-item");
 
     items.forEach(item => {
  item.addEventListener("click", () => {

    // remove active from all
    items.forEach(i => i.classList.remove("active"));

    // add active to clicked
    item.classList.add("active");

  });
});
/*About Us Section*/
window.addEventListener("load", () => {

  const items = document.querySelectorAll(".sphere-item");

  const radius = 220;
  const total = items.length;

  let rotationY = 0;
  let rotationX = 0;

  // Arrange in sphere circle
  function layout() {

    items.forEach((item, i) => {

      const angle = (i / total) * Math.PI * 2;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      gsap.set(item, {
        x: x,
        z: z,
        y: Math.sin(angle) * 40
      });

    });

  }

  layout();

  // AUTO ROTATION (SLOW SPIN)
  function animate() {
    rotationY += 0.5;

    gsap.to(".sphere", {
      rotationY: rotationY,
      duration: 0.8,
      ease: "power2.out"
    });

    requestAnimationFrame(animate);
  }

  animate();

  // CLICK FOCUS
  items.forEach(item => {
    item.addEventListener("click", () => {

      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      gsap.to(item, {
        scale: 1.6,
        duration: 0.5,
        ease: "power3.out"
      });

    });
  });

  // MOUSE DRAG CONTROL (EXTRA PREMIUM)
  let isDragging = false;
  let startX = 0;

  document.querySelector(".sphere-wrapper").addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  window.addEventListener("mouseup", () => isDragging = false);

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let delta = e.clientX - startX;
    rotationY += delta * 0.1;
    startX = e.clientX;
  });

});
/*Testimonial Section*/
const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  speed: 800,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});

/*Courses Section*/
const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

leftBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -300,
    behavior: "smooth"
  });
});

rightBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 300,
    behavior: "smooth"
  });
});

