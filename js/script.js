const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const linksDoMenu = menuPrincipal.querySelectorAll("a");
const botaoCopiarEmail = document.querySelector("#botao-copiar-email");
const mensagemEmail = document.querySelector("#mensagem-email");
const anoAtual = document.querySelector("#ano-atual");

function definirEstadoDoMenu(aberto) {
    menuPrincipal.classList.toggle("aberto", aberto);
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
}

botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = botaoMenu.getAttribute("aria-expanded") === "true";
    definirEstadoDoMenu(!menuEstaAberto);
});

linksDoMenu.forEach((link) => {
    link.addEventListener("click", () => definirEstadoDoMenu(false));
});

document.addEventListener("click", (evento) => {
    const clicouNaNavegacao = evento.target.closest(".navegacao");

    if (!clicouNaNavegacao) {
        definirEstadoDoMenu(false);
    }
});

document.addEventListener("keydown", (evento) => {
    const menuEstaAberto = botaoMenu.getAttribute("aria-expanded") === "true";

    if (evento.key === "Escape" && menuEstaAberto) {
        definirEstadoDoMenu(false);
        botaoMenu.focus();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
        definirEstadoDoMenu(false);
    }
});

function mostrarMensagemEmail(mensagem) {
    mensagemEmail.textContent = mensagem;
}

async function copiarEmail() {
    const email = botaoCopiarEmail.dataset.email.trim();

    if (email === "SEU_EMAIL_AQUI") {
        mostrarMensagemEmail("Substitua SEU_EMAIL_AQUI pelo e-mail profissional no arquivo index.html.");
        return;
    }

    try {
        await navigator.clipboard.writeText(email);
        mostrarMensagemEmail("E-mail copiado com sucesso!");
    } catch (erro) {
        mostrarMensagemEmail("Não foi possível copiar. Selecione e copie o e-mail manualmente.");
    }
}

botaoCopiarEmail.addEventListener("click", copiarEmail);
anoAtual.textContent = new Date().getFullYear();
