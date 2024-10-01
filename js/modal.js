
function toggleDiv(divId, element) {
    const div = document.getElementById(divId);
    const otherDivId = divId === 'loginDiv' ? 'atendimentoDiv' : 'loginDiv';
    const otherDiv = document.getElementById(otherDivId);

    // Esconde a outra div
    otherDiv.style.display = 'none';

    // Calcula a posição do ícone clicado
    const rect = element.getBoundingClientRect();

    // Posiciona a div logo abaixo do ícone clicado
    div.style.top = `${rect.bottom + window.scrollY}px`;
    div.style.left = `${rect.left + window.scrollX}px`;

    // Alterna a visibilidade da div atual
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
}
