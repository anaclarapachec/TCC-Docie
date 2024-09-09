let eye = document.querySelector(".fundo .nova-senha .eye");
let eyeSlash = document.querySelector(".fundo .nova-senha .eye-slash");
let novaSenhaInput = document.querySelector(".fundo .nova-senha input");
let confirmarSenhaInput = document.querySelector(".fundo .confirmar-senha input");
let enviarBtn = document.querySelector(".fundo .enviar-btn");
let mensagem = document.querySelector(".fundo .mensagem");

let passToggle = () => {
    if(novaSenhaInput.type === "password"){
        novaSenhaInput.type = "text";
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    } else{
        novaSenhaInput.type = "password";
        eye.style.display = "block";
        eyeSlash.style.display = "none";
    }
}

let checarSenha = () => {
    if(novaSenhaInput.value === confirmarSenhaInput.value){
        mensagem.style.display = "block";
        mensagem.style.color = "#5a1b2f";
        mensagem.innerHTML = `<i class="fa-solid fa-check"></i> Ambas as senhas encontradas.`;
    }else{
        mensagem.style.display = "block";
        mensagem.style.color = "#5a1b2f";
        mensagem.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Ambas as senhas não encontradas.`;
    }
}

enviarBtn.addEventListener("click", () => {
    if(novaSenhaInput.value.length < 8 && novaSenhaInput.value != ""){
        mensagem.style.display = "block";
        mensagem.style.color = "#808080";
        mensagem.innerHTML = "Por favor coloque pelo menos 8 caracteres.";
    }else if(novaSenhaInput.value != "" && confirmarSenhaInput.value != ""){
        checarSenha();
    }else{
        mensagem.style.display = "block";
        mensagem.style.color = "#808080";
        mensagem.innerHTML = "Por favor preencha todos os campos obrigatórios.";
    }
})

let checarSenhaLength = () => {
    if(novaSenhaInput.value.length >= 8){
        confirmarSenhaInput.disabled = false;
    }else{
        confirmarSenhaInput.disabled = true;
    }
}

novaSenhaInput.addEventListener("input", checarSenhaLength);
eye.addEventListener("click", passToggle);
eyeSlash.addEventListener("click", passToggle);