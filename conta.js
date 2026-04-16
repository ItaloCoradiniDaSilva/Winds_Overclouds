const btRegistrar = document.getElementById("registrarUsuario");
const inNomeUsuario = document.getElementById("nomeUsuario");
const inSenha = document.getElementById("numeroUsuario");
const inRgUsuario = document.getElementById("rgUsuario");
const inEmail = document.getElementById("emailUsuario");
const data = document.getElementById("dataUsuário");
const outSaida = document.getElementById("saida");
var confirmadorLogado = 1;

const dateHoje = new Date();
const dataFormatada = dateHoje.toLocaleDateString('pt-BR');
console.log(dataFormatada);

btRegistrar.addEventListener("click", confirmarRegistro)

function confirmarRegistro() {

    if (inNomeUsuario.value == "" || inSenha.value == "" || inRgUsuario.value == "" || inEmail.value == "") {
        outSaida.innerHTML = "Os campos não estão todos preenchidos!!";

    } else {
        var dataUsuário = data.value;
        var senhaUsuario = inSenha.value;
        var emailUsuario = inEmail.value;
        var rgUsuario = inRgUsuario.value;
        var nomeUsuario = inNomeUsuario.value;
        confirmadorLogado = 0;

        let anoAgora = Number(dateHoje.getFullYear());
        let anoPessoa = Number(data.value.split('-')[0]);
        var IdadeUsuario = anoAgora - anoPessoa;
        var vetDadosUsuario = [nomeUsuario, IdadeUsuario, emailUsuario, senhaUsuario, rgUsuario, dataUsuário];

        localStorage.setItem("usuarioLogado", JSON.stringify(vetDadosUsuario))
       
        console.log(JSON.parse(localStorage.getItem("usuarioLogado")) || []);

        outSaida.innerHTML = "Parabéns!. Você " + inNomeUsuario.value.toUpperCase() + " foi cadastrado com sucesso.";
    }
}

localStorage.setItem("contadora", JSON.stringify(confirmadorLogado))





