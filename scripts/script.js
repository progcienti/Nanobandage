// Efeito de transição suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de animação nas imagens ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
});

document.querySelectorAll('.membro img, .pesquisa-item img').forEach(img => {
    observer.observe(img);
});
// Função para alternar o menu em telas pequenas
function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}
