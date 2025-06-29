        // Add smooth scrolling animation on load
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Add hover effects for interactive elements
        document.querySelectorAll('.experience-item, .education-item, .project-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.borderLeftColor = '#667eea';
            });
            item.addEventListener('mouseleave', function() {
                this.style.borderLeftColor = '#4a90e2';
            });
        });

        // Add typing effect to name
        const nameElement = document.querySelector('.header h1');
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        };
        
        setTimeout(typeWriter, 1000);

        const links = document.querySelectorAll('.project-link');

        links.forEach(link => {
            link.addEventListener('mousemove', (e) => {
                const rect = link.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                link.style.setProperty('--x', `${x}%`);
                link.classList.add('hover-gradient');
            });

            link.addEventListener('mouseleave', () => {
                link.classList.remove('hover-gradient');
                link.style.removeProperty('--x');
            });
        });
