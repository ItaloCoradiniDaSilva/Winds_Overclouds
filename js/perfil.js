const vetUsuario = JSON.parse(localStorage.getItem("usuarioLogado")) || [];
const contadora = JSON.parse(localStorage.getItem("contadora"));
const outSaidaDados = document.getElementById("saidaDados");

if (contadora == 1) {

    const nomeUsuario = vetUsuario[0];
    const idadeUsuario = vetUsuario[1];
    const emailUsuario = vetUsuario[2];
    const senhaUsuario = vetUsuario[3];
    const rgUsuario = vetUsuario[4];
    const dataUsuario = vetUsuario[5];

    outSaidaDados.innerHTML =
        "<strong>Nome:</strong> " + nomeUsuario + "<br><br>" +
        "<strong>Idade:</strong> " + idadeUsuario + "<br><br>" +
        "<strong>E-mail:</strong> " + emailUsuario + "<br><br>" +
        "<strong>Senha:</strong> " + senhaUsuario + "<br><br>" +
        "<strong>RG:</strong> " + rgUsuario + "<br><br>" +
        "<strong>Data de Nascimento:</strong> " + dataUsuario;

} else {

    outSaidaDados.innerHTML =
        "<h2>Nenhum usuário encontrado</h2>" +
        "<p>Faça seu cadastro para visualizar seus dados.</p>";
}