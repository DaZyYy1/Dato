const brandListLinks = document.querySelectorAll('.brand-list a');
brandListLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetLetter = event.target.textContent;
        const targetSection = document.querySelector(`.brand-list ul[data-letter="${targetLetter}"]`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const brandListSections = document.querySelectorAll('.brand-list ul');
brandListSections.forEach(section => {
    const firstLetter = section.querySelector('a').textContent[0];
    section.dataset.letter = firstLetter.toLowerCase();
});
