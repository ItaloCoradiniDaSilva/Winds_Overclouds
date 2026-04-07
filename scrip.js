const btRegistrar = document.getElementById("registrarUsuario");
const inNomeUsuario = document.getElementById("nomeUsuario");
const inSenha = document.getElementById("numeroUsuario");
const inRgUsuario = document.getElementById("rgUsuario");
const inEmail = document.getElementById("emailUsuario");
const data = document.getElementById("dataUsuário");
const outSaida = document.getElementById("saida");

const dateHoje = new Date();
const dataFormatada = dateHoje.toLocaleDateString('pt-BR');

btRegistrar.addEventListener("click", confirmarRegistro)

function confirmarRegistro() {

    if (inNomeUsuario.value == "" || inSenha.value == "" || inRgUsuario.value == "" || inEmail.value == "") {
        outSaida.innerHTML = "Os campos não estão todos preenchidos!!" ;

    } else {
        var anoPessoa =  Number(data.value.split('-')[0]);
        let anoAgora = Number(dateHoje.getFullYear());
        var Idade =  anoAgora - anoPessoa;

        outSaida.innerHTML = "Parabéns!. Você " + inNomeUsuario.value.toUpperCase()  + " com " + Idade + " Anos. foi cadastrado com sucesso. " +
            "mandaremos uma confirmação para o seu Gmail :" + inEmail.value + "<br> Caso contrário mandaremos um SMS para o seu numero "
            + inSenha.value + " Bom Uso da plataforma!!. ";
    }

}

