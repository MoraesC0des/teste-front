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

  breakpoints: {
    // Quando a tela for >= 320px (telas pequenas)
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // Quando a tela for >= 480px (telas médias)
    420: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // Quando a tela for >= 1024px (telas grandes)
    1100: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }

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
      nextEl: '.botao-direita',
      prevEl: '.botao-esquerda',
    },
    breakpoints: {
      // Quando a tela for >= 320px (telas pequenas)
      1100: {
        slidesPerView: 2,
        spaceBetween: 20
      },
       320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // Quando a tela for >= 480px (telas médias)
      420: {
        slidesPerView: 2,
        spaceBetween: 15
      },

    }
  });
  swiperVitrine.find('.botao-comprar').each(function () {
    $(this).on('click', function () {
      showModal();  // Abre o modal ao clicar em um botão "comprar"
    });
  });

});

// Seleciona o modal e o botão de fechar
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");

// Função para mostrar o modal
function showModal() {
  modal.style.display = "block"; // Mostra o modal
}

// Função para fechar o modal
function hideModal() {
  modal.style.display = "none"; // Fecha o modal
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function (event) {
  if (event.target === modal) {
    hideModal();
  }
}

// Adiciona evento de clique a todos os botões de comprar
const buyButtons = document.querySelectorAll('.botao-comprar');
buyButtons.forEach(button => {
  button.addEventListener('click', function () {
    showModal();
  });
});

// Evento para fechar o modal
closeModal.addEventListener('click', hideModal);

