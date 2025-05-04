document.addEventListener('DOMContentLoaded', function() {
    // Wait for images to load
    window.addEventListener('load', function() {
        // Set a timeout to trigger animations after page load
        setTimeout(function() {
            // Get the elements to animate
            const animateUpElements = document.querySelectorAll('.animate-up');
            const animateDownElements = document.querySelectorAll('.animate-down');
            
            // Add the animated class to trigger the CSS transitions
            animateUpElements.forEach(element => {
                element.classList.add('animated');
            });
            
            // Add a slight delay for the second animation
            setTimeout(function() {
                animateDownElements.forEach(element => {
                    element.classList.add('animated');
                });
            }, 100); // 100ms delay as requested
            
        }, 500); // Start animations 500ms after page load
    });
    
    // Optional: Add hover effects for image containers
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        container.addEventListener('mouseleave', function() {
            // Preserve the animation transforms for the animated elements
            if (this.classList.contains('animate-up') && this.classList.contains('animated')) {
                this.style.transform = 'translateY(-10px)';
            } else if (this.classList.contains('animate-down') && this.classList.contains('animated')) {
                this.style.transform = 'translateY(10px)';
            } else {
                this.style.transform = 'scale(1)';
            }
        });
    });
    
    // Optional: Make hour options selectable
    const hourOptions = document.querySelectorAll('.hour-option');
    hourOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            hourOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Add selected styling
            this.style.backgroundColor = '#7c3aed';
            this.style.color = 'white';
        });
    });
});