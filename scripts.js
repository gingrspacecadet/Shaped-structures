// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

const imageFilenames = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg",
    "assets/image4.jpg",
    "assets/image5.jpg",
    "assets/image6.jpg",
    "assets/image7.jpg",
    "assets/image8.jpg",
    "assets/image9.jpg",
    "assets/image10.jpg",
    "assets/image11.jpg",
    "assets/image12.jpg",
    "assets/image13.jpg",
    "assets/image14.jpg",
    "assets/image15.jpg",
    "assets/image16.jpg",
    "assets/image17.jpg",
    "assets/image18.jpg",
    "assets/image19.jpg"
];

const carouselInner = document.querySelector('.carousel-inner');

imageFilenames.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${i + 1}`;
    img.className = 'carousel-item' + (i === 0 ? ' active' : '');
    carouselInner.insertBefore(img, carouselInner.querySelector('.carousel-btn.next'));
});

const slides = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

showSlide(currentIndex);
startAutoSlide();