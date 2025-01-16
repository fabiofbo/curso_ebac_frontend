// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const campoA = parseFloat(document.getElementById('CampoA').value);
    const campoB = parseFloat(document.getElementById('CampoB').value);

    // Validando se o Campo B é maior que o Campo A
    if (campoB > campoA) {
        alert('Ótimo! O Número B é maior que o Número A!'); // Mensagem positiva
    } else {
        alert('Oops! O Número B deve ser maior que o Número A.'); // Mensagem negativa
    }
});