

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,

  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.botao-direita',  // Para o botão "próximo"
    prevEl: '.botao-esquerda',      // Para o botão "anterior"
  },


});
$(document).ready(function () {
  // Clonar a vitrine existente
  const swiperSpan = $('.vitrines').clone();
  const swiperVitrine = $('.swiper-container').clone();

  // Inserir o clone abaixo do container de imagens
  swiperSpan.insertAfter('#duas-imagens');

  // Inserir o clone abaixo do swiperSpan
  swiperVitrine.insertAfter(swiperSpan);

  // Inicializar o Swiper no clone
  new Swiper(swiperVitrine.find('.swiper')[0], {
    slidesPerView: 4,
    spaceBetween: 20,

    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.botao-esquerda',
    },
  });
});
