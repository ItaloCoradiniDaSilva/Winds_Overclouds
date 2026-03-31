const btRegistrar = document.getElementById("registrarUsuario");
const inNomeUsuario = document.getElementById("nomeUsuario");
const inNumero = document.getElementById("numeroUsuario");
const inRgUsuario = document.getElementById("rgUsuario");
const inEmail = document.getElementById("emailUsuario");
const data = document.getElementById("dataUsuário");
const outSaida = document.getElementById("saida");

const dateHoje = new Date();
const dataFormatada = dateHoje.toLocaleDateString('pt-BR');

btRegistrar.addEventListener("click", confirmarRegistro)

function confirmarRegistro() {

    if (inNomeUsuario.value == "" || inNumero.value == "" || inRgUsuario.value == "" || inEmail.value == "") {


        outSaida.innerHTML = "Os campos não estão todos preenchidos!!" ;

    } else {
        let anoPessoa =  Number(data.value.split('-')[0]);
        let anoAgora = Number(dateHoje.getFullYear());
        let Idade =  anoAgora - anoPessoa;

        outSaida.innerHTML = "Parabéns!. Você " + inNomeUsuario.value.toUpperCase()  + " com " + Idade + " Anos. foi cadastrado com sucesso. " +
            "mandaremos uma confirmação para o seu Gmail :" + inEmail.value + "<br> Caso contrário mandaremos um SMS para o seu numero "
            + inNumero.value + " Bom Uso da plataforma!!. ";
    }

}

