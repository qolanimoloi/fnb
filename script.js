document.addEventListener('DOMContentLoaded', () => {
    // ======= Mobile Navigation =======
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ======= Sticky Navigation =======
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        window.addEventListener('scroll', () => {
            navContainer.classList.toggle('scrolled', window.scrollY > 100);
        });
    }

    // ======= Smooth Scroll =======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth',
                });
            }
        });
    });

    // ======= Testimonial Carousel =======
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.testimonial-carousel');

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (!testimonialSlides.length) return;
        testimonialSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            if (dots[i]) dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % testimonialSlides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length);
    }

    if (testimonialSlides.length) {
        showSlide(currentSlide);

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showSlide(i));
        });

        slideInterval = setInterval(nextSlide, 5000);

        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
    }

    // ======= Animate on Scroll =======
    const animatedElements = document.querySelectorAll('.feature-card, .step, .stat-card, .pricing-card');

    const animateOnScroll = () => {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation state
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // ======= Video Button =======
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Video playback would start here in the full implementation.');
        });
    }

    // ======= CTA Demo Buttons =======
    document.querySelectorAll('.cta-button.secondary').forEach(button => {
        const btnText = button.textContent.toLowerCase();
        if (btnText.includes('demo') || btnText.includes('watch')) {
            button.addEventListener('click', e => {
                e.preventDefault();
                alert('Video demo would play here in the full implementation.');
            });
        }
    });

    // ======= Newsletter Form =======
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput?.value.trim();
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }

    // ======= Free Trial CTA Buttons =======
    document.querySelectorAll('.cta-button.primary').forEach(button => {
        const btnText = button.textContent.toLowerCase();
        if (btnText.includes('free trial') || btnText.includes('start free trial')) {
            button.addEventListener('click', e => {
                e.preventDefault();
                alert('In the full implementation, this would redirect to a signup page for the free trial.');
            });
        }
    });
});
