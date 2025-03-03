// Select elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.navbar a');
let resumeBtn = document.querySelector('.btn');

// Toggle navbar menu for mobile
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Resume download function
resumeBtn.addEventListener('click', () => {
    let resumePath = 'resume.pdf'; // Change this to your actual resume file path
    let link = document.createElement('a');
    link.href = resumePath;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

