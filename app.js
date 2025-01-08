function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //proteção, o numero inicial ser sempre menor que o final
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }
    
    //proteção, garantir que o intervalo seja maior que a quantidade de números
    let intervalo = ate - de;

    if (intervalo < quantidade) {
        alert('O intervalo de números é menor que o campo "Quantidade de números" Verifique!')
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    //habilitar o botão reiniciar

    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*  Causa bug alternando o botão entre habilitado e desabilitado em ada nova consulta
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}
*/

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    //desabilitar o botão reiniciar
    document.getElementById('btn-reiniciar').classList.remove('container__botao');
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}
