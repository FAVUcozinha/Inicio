document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0; // Índice do slide atual
    const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
    const totalSlides = slides.length; // Total de slides

    // Função para alterar o slide visível
    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentSlide ? '1' : '0'; // Exibe o slide atual e esconde os outros
            slide.style.transition = 'opacity 1s'; // Adiciona uma transição suave
        });

        // Atualiza o índice do slide atual para o próximo (com ciclo infinito)
        currentSlide = (currentSlide + 1) % totalSlides;
    }

    // Inicializa o primeiro slide como visível
    slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? '1' : '0';
    });

    // Troca de slide a cada 4 segundos
    setInterval(changeSlide, 4000);
});
