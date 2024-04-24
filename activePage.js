let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
        // Apply gradient effect when scrolled
        header.style.background = 'linear-gradient(to bottom, #203D77, rgba(255, 0, 0, 0))';
    } else {
        // Revert to solid color when at the top
        header.style.background = '#203D77';
    }
});