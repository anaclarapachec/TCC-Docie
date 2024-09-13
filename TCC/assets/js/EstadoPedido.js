// Variável para simular o estado do pedido (não confirmado pelo vendedor)
let pedidoConfirmado = false;
// Variável para rastrear se o pedido já foi cancelado
let pedidoCancelado = false;

function mostrarFormularioCancelamento() {
    // Se o pedido já estiver confirmado ou cancelado, impedir o cancelamento
    if (pedidoConfirmado) {
        document.getElementById("mensagemCancelamento").textContent = "O pedido já foi confirmado pelo vendedor e não pode ser cancelado.";
        return;
    }

    if (pedidoCancelado) {
        document.getElementById("mensagemCancelamento").textContent = "O pedido já foi cancelado anteriormente e não pode ser cancelado novamente.";
        return;
    }

    // Mostrar o formulário de cancelamento se o pedido ainda não estiver confirmado nem cancelado
    document.getElementById("cancelamentoForm").style.display = "block";
}

function confirmarCancelamento() {
    const motivo = document.getElementById("motivoCancelamento").value;
    const descricao = document.getElementById("descricaoCancelamento").value;

    if (motivo === "") {
        alert("Por favor, selecione um motivo para o cancelamento.");
        return;
    }

    // Aqui você pode adicionar lógica para enviar os detalhes do cancelamento para o servidor

    // Exibir uma mensagem de confirmação personalizada
    document.getElementById("mensagemCancelamento").textContent = `Seu pedido foi cancelado. Motivo: ${motivo}.`;
    
    // Marcar o pedido como cancelado
    pedidoCancelado = true;

    // Opcional: Resetar o formulário
    document.getElementById("cancelamentoForm").style.display = "none";
    document.getElementById("motivoCancelamento").value = "";
    document.getElementById("descricaoCancelamento").value = "";
}
