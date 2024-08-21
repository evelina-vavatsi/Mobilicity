const sections = document.querySelectorAll('section');

function checkVisibility() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);



document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = currentYear;

    let sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSectionIndex = index;
        }
    }

    function scrollToNextSection() {
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }
    }

    function scrollToPreviousSection() {
        if (currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    }

    document.querySelector('.nav-arrow.next').addEventListener('click', scrollToNextSection);
    document.querySelector('.nav-arrow.prev').addEventListener('click', scrollToPreviousSection);

    // Initially scroll to the first section
    scrollToSection(currentSectionIndex);
});
