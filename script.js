// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize animations
    initAnimations();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize hover effects
    initHoverEffects();
});

// Smooth scrolling functionality
function initSmoothScroll() {
    // Get all links that hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Calculate the target position with offset for fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Smooth scroll to target
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Initialize animations for elements as they come into view
function initAnimations() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add animation class when element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Adjust the trigger point
    });
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.game-card, .feature-card, .event-card, .neon-border')
        .forEach(element => {
            // Add initial state class
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });
    
    // Add animation classes for initial state
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    // Add animation classes for animated state
    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}

// Form validation
function initFormValidation() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = bookingForm.querySelectorAll('input[required], select[required], textarea[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Form is valid, you can submit or show success message
                alert('Booking submitted successfully! We will contact you shortly.');
                bookingForm.reset();
            } else {
                // Show error message
                alert('Please fill in all required fields.');
            }
        });
    }
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            // Only apply parallax if in view
            if (scrollPosition <= heroHeight) {
                // Move content up as user scrolls down
                const translateY = scrollPosition * 0.4;
                const opacity = 1 - (scrollPosition / (heroHeight * 0.8));
                
                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = opacity > 0 ? opacity : 0;
            }
        });
    }
}

// Initialize hover effects
function initHoverEffects() {
    // Game cards hover effect
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Neon text hover effect enhancement
    document.querySelectorAll('.neon-text').forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor';
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor';
        });
    });
    
    // Neon border hover effect enhancement
    document.querySelectorAll('.neon-border').forEach(border => {
        border.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor';
        });
        
        border.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 5px currentColor, 0 0 10px currentColor';
        });
    });
}

// Replace placeholder images with actual images
// This function would be used in a real implementation
function loadImages() {
    // Example of how you would replace placeholder images
    const placeholders = document.querySelectorAll('img[src="placeholder.jpg"]');
    
    // Image URLs for different sections
    const gameImages = [
        'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3'
    ];
    
    // In a real implementation, you would replace placeholders with actual images
    // This is just a demonstration of how it could be done
    placeholders.forEach((img, index) => {
        // Use modulo to cycle through available images
        const imageIndex = index % gameImages.length;
        img.src = gameImages[imageIndex];
        
        // Add loading attribute for better performance
        img.loading = 'lazy';
    });
}

// Call loadImages if you want to replace placeholders
// loadImages();

// Add a simple preloader
window.addEventListener('load', function() {
    // Hide preloader when page is fully loaded
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});