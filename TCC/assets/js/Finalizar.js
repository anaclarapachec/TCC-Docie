// Função para verificar os campos obrigatórios
function irParaPagamento() {
    const endereco = document.getElementById('endereco').value;
    const bairro = document.getElementById('bairro').value;
    const numero = document.getElementById('numero').value;

    // Verifica se todos os campos estão preenchidos
    if (endereco === "" || bairro === "" || numero === "") {
        alert("Por favor, preencha todos os campos obrigatórios");
    } else {
        // Se todos os campos estiverem preenchidos, exibe a seção de pagamento
        document.getElementById('endereco-section').style.display = 'none';
        document.getElementById('pagamento-section').style.display = 'block';
    }
}

// Função para voltar para a tela de endereço
function voltarParaEndereco() {
    document.getElementById('pagamento-section').style.display = 'none';
    document.getElementById('endereco-section').style.display = 'block';
}

// Função para mostrar opções de pagamento específicas
function mostrarOpcoesPagamento() {
    const metodoPagamento = document.getElementById('metodo-pagamento').value;

    // Oculta todas as opções
    document.getElementById('pix-opcao').style.display = 'none';
    document.getElementById('dinheiro-opcao').style.display = 'none';
    document.getElementById('troco-valor-label').style.display = 'none';
    document.getElementById('troco-valor').style.display = 'none';

    if (metodoPagamento === 'pix') {
        document.getElementById('pix-opcao').style.display = 'block';
    } else if (metodoPagamento === 'dinheiro') {
        document.getElementById('dinheiro-opcao').style.display = 'block';
    }
}

// Função para mostrar o campo de valor do troco, se necessário
document.getElementById('troco').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('troco-valor-label').style.display = 'block';
        document.getElementById('troco-valor').style.display = 'block';
    } else {
        document.getElementById('troco-valor-label').style.display = 'none';
        document.getElementById('troco-valor').style.display = 'none';
    }
});

// Função para finalizar a compra
function finalizarCompra() {
    alert('Pedido finalizado com sucesso!');
}
