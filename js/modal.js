$(document).ready(function () {
    // Evento de clique no botão "Comprar"
    $('.botao-comprar').on('click', function() {
        $('#modal').show();  // Mostra o modal
    });
  
    // Evento para fechar o modal
    $('.close').on('click', function() {
        $('#modal').hide();  // Esconde o modal
    });
  
    // Fechar o modal ao clicar fora dele
    $(window).on('click', function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').hide();
        }
    });
});
