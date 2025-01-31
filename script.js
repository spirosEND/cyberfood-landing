// Navigation functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate links with staggered delay
        navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation ? '' 
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });

        burger.classList.toggle('toggle');
    });
}

// Floating icons animation
const randomizeMovement = () => {
    document.querySelectorAll('.floating-icons i').forEach(icon => {
        const generateRandomPos = () => Math.floor(Math.random() * 200 - 100);
        const generateRandomRotate = () => Math.floor(Math.random() * 90 - 45);
        const randomDuration = Math.random() * 2.5 + 1.5;
        
        Array.from({length: 3}, (_, i) => i + 1).forEach(i => {
            icon.style.setProperty(`--random-x${i}`, generateRandomPos());
            icon.style.setProperty(`--random-y${i}`, generateRandomPos());
            icon.style.setProperty(`--random-rotate${i}`, generateRandomRotate());
        });
        
        icon.style.animation = `float ${randomDuration}s ease-in-out infinite, 
                              randomFloat ${randomDuration}s ease-in-out infinite`;
    });
};

const resetMovement = () => {
    document.querySelectorAll('.floating-icons i').forEach((icon, index) => {
        icon.style.animation = `float ${Math.random() * 2 + 4}s ease-in-out infinite ${index * 0.2}s`;
    });
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    resetMovement();
    
    const heroContent = document.querySelector('.hero-content');
    heroContent.addEventListener('mouseenter', randomizeMovement);
    heroContent.addEventListener('mouseleave', resetMovement);
});

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
