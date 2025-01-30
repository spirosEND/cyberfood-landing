const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Function to set random movement patterns
const randomizeMovement = () => {
    const icons = document.querySelectorAll('.floating-icons i');
    
    icons.forEach(icon => {
        // Generate more dramatic random positions between -100 and 100
        const generateRandomPos = () => Math.floor(Math.random() * 200 - 100);
        // Generate more dramatic rotations between -45 and 45 degrees
        const generateRandomRotate = () => Math.floor(Math.random() * 90 - 45);
        // Generate faster durations between 1.5 and 4 seconds
        const randomDuration = Math.random() * 2.5 + 1.5;
        
        // Set random values for each keyframe
        for (let i = 1; i <= 3; i++) {
            icon.style.setProperty(`--random-x${i}`, generateRandomPos());
            icon.style.setProperty(`--random-y${i}`, generateRandomPos());
            icon.style.setProperty(`--random-rotate${i}`, generateRandomRotate());
        }
        
        // Apply random animation while maintaining continuous movement
        const currentAnimation = icon.style.animation;
        icon.style.animation = `float ${randomDuration}s ease-in-out infinite, 
                              randomFloat ${randomDuration}s ease-in-out infinite`;
    });
};

const resetMovement = () => {
    const icons = document.querySelectorAll('.floating-icons i');
    icons.forEach((icon, index) => {
        const randomDuration = Math.random() * 2 + 4; // 4-6 seconds
        const delay = index * 0.2; // Staggered delay
        icon.style.animation = `float ${randomDuration}s ease-in-out infinite ${delay}s`;
    });
};

// Add event listeners
const heroContent = document.querySelector('.hero-content');
heroContent.addEventListener('mouseenter', randomizeMovement);
heroContent.addEventListener('mouseleave', resetMovement);

// Initial animation
document.addEventListener('DOMContentLoaded', resetMovement);

document.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.querySelector('.terminal-input');
    
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const value = terminalInput.value.toLowerCase();
            if (value === 'yes' || value === 'no') {
                // Add glitch effect
                terminalInput.style.animation = 'glitch 0.3s ease';
                setTimeout(() => {
                    terminalInput.style.animation = '';
                }, 300);
            }
        }
    });
});
