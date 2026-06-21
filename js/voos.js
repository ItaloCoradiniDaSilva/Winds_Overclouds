const VETVOOS = [
    { continente: "América do Norte", destino: "Vancouver (Canadá)", horaEmbarque: "9:00", classe: "1° Classe", valor: "3000" },
    { continente: "Europa", destino: "Paris (França)", horaEmbarque: "13:30", classe: "Executiva", valor: "2000" },
    { continente: "Ásia", destino: "Tóquio (Japão)", horaEmbarque: "22:15", classe: "1° Classe", valor: "3300" },
    { continente: "África", destino: "Cidade do Cabo (África do Sul)", horaEmbarque: "16:45", classe: "Econômica", valor: "5000" },
    { continente: "Oceania", destino: "Sydney (Austrália)", horaEmbarque: "20:00", classe: "Executiva", valor: "6000" },
    { continente: "América do Sul", destino: "Rio de Janeiro (Brasil)", horaEmbarque: "11:20", classe: "Econômica", valor: "5000" }
]

const btMostrarVoos = document.getElementById("btMostrarVoos");
const outSaidaVoos = document.getElementById("outSaidaVoos");
const inContinente = document.getElementById("continente");

btMostrarVoos.addEventListener("click", mostrarContinente);

function mostrarContinente() {
    var continente = inContinente.value;
    switch (continente) {

        case "América do Norte":
            filtrarContinente(continente);
            break;

        case "Europa":
            filtrarContinente(continente);
            break;

        case "Ásia":
            filtrarContinente(continente);
            break;

        case "África":
            filtrarContinente(continente);
            break;

        case "Oceania":
            filtrarContinente(continente);
            break;

        case "América do Sul":
            filtrarContinente(continente);
            break;
        default:
            alert("Continente não existe.");
            outSaidaVoos.innerHTML = "";
    }
}

function filtrarContinente(continente) {
    outSaidaVoos.innerHTML =
        "<table class ='tabelaVoos'>" +
        "<tr>" +
        "<th> Continente </th>" +
        "<th>Destino</th>" +
        "<th>Horário de partida</th>" +
        "<th>Classe</th>" +
        "<th>Valor</th>" +
        "</tr> </table>";

    for (i = 0; i < VETVOOS.length; i++) {

        if (continente == VETVOOS[i].continente) {

            outSaidaVoos.innerHTML +=
                "<table class ='tabelaVoos'>" +
                "<tr>" +
                "<td>" + VETVOOS[i].continente + "</td>" +
                "<td>" + VETVOOS[i].destino + "</td>" +
                "<td>" + VETVOOS[i].horaEmbarque + "</td>" +
                "<td>" + VETVOOS[i].classe + "</td>" +
                "<td>R$" + Number(VETVOOS[i].valor).toFixed(2) + "</td>" +
                "</tr>" +

                "</table>";

        }
    }
}

function mostrarTabela() {
    outSaidaVoos.innerHTML =
        "<table class ='tabelaVoos'>" +
        "<tr>" +
        "<th> Continente </th>" +
        "<th>Destino</th>" +
        "<th>Horário de partida</th>" +
        "<th>Classe</th>" +
        "<th>Valor</th>" +
        "</tr> </table>";

    for (i = 0; i < VETVOOS.length; i++) {
        outSaidaVoos.innerHTML +=
            "<table class ='tabelaVoos'>" +
            "<tr>" +
            "<td>" + VETVOOS[i].continente + "</td>" +
            "<td>" + VETVOOS[i].destino + "</td>" +
            "<td>" + VETVOOS[i].horaEmbarque + "</td>" +
            "<td>" + VETVOOS[i].classe + "</td>" +
            "<td>R$" + Number(VETVOOS[i].valor).toFixed(2) + "</td>" +
            "</tr>" +

            "</table>";

    }
}
//inicialização
mostrarTabela();