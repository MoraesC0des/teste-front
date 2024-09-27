$(function() {
    // Inicialização do Swiper
    const swiper = new Swiper('.swiper-container', {
        // Opções do Swiper
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Evento de clique no botão "Adicionar ao carrinho"
    $('.cta').on('click', function() {
        // Mostrar o modal
        $('#modal').fadeIn();
    });

    // Evento para fechar o modal
    $('.close').on('click', function() {
        $('#modal').fadeOut();
    });
});
