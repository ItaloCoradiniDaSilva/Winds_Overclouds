
const vetUsuario = JSON.parse(localStorage.getItem("usuarioLogado")) || [];
const contadora = JSON.parse(localStorage.getItem("contadora")) || [];
const outSaidaDados =  document.getElementById("saidaDados");

if(contadora == 0){
const rgUsuario = vetUsuario[4];
const dataUsuario = vetUsuario[5];
const nomeUsuario = vetUsuario[0];
const idadeUsuario = vetUsuario[1];
const emailUsuario = vetUsuario[2];
const senhaUsuario = vetUsuario[3];

outSaidaDados.innerHTML = "Seja bem Vindo!!! " + nomeUsuario + "<br> Que Nasceu em : " + dataUsuario + "<br> Que tem o RG  de : " + 
rgUsuario + "<br> Com " + idadeUsuario + " Anos de Idade <br> Com o Email : " + emailUsuario + "<br> Com sua senha de login : " + senhaUsuario;
}else{

outSaidaDados.innerHTML = "Faça o cadastro";

}


console.log(nomeUsuario);