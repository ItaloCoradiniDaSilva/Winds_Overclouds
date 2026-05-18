const vetUsuario = JSON.parse(localStorage.getItem("usuarioLogado")) || [];
const contadora = JSON.parse(localStorage.getItem("contadora")) || [];
const outSaidaDados = document.getElementById("saidaDados");

if (contadora == 1) {
    const rgUsuario = vetUsuario[4];
    const dataUsuario = vetUsuario[5];
    const nomeUsuario = vetUsuario[0];
    const idadeUsuario = vetUsuario[1];
    const emailUsuario = vetUsuario[2];
    const senhaUsuario = vetUsuario[3];


    outSaidaDados.innerHTML = "Seu nome: " + nomeUsuario + "<br>" +
        "Sua idade: " + idadeUsuario + "<br>" +
        "Seu email: " + emailUsuario + "<br>" +
        "Sua senha: " + senhaUsuario + "<br>" +
        "Seu RG: " + rgUsuario + "<br>" +
        "Sua data de nascimento: " + dataUsuario;

} else {
    outSaidaDados.innerHTML = "<h2>Faça o cadastro</h2>";
    
}
console.log(nomeUsuario);