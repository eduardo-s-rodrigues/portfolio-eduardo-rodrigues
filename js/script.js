const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const linksDoMenu = menuPrincipal ? menuPrincipal.querySelectorAll("a") : [];
const botaoCopiarEmail = document.querySelector("#botao-copiar-email");
const textoCopiarEmail = document.querySelector("#texto-copiar-email");
const mensagemEmail = document.querySelector("#mensagem-email");
const anoAtual = document.querySelector("#ano-atual");
const conteudoInicio = document.querySelector(".inicio-conteudo");

// Garante um destino válido para o link "Início" mesmo enquanto a marcação do hero é ajustada.
if (conteudoInicio && !document.querySelector("#inicio")) {
    conteudoInicio.id = "inicio";
}

// Controla o menu responsivo e mantém os atributos de acessibilidade atualizados.
if (botaoMenu && menuPrincipal) {
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
}

// Mantém o link Início previsível e suave em desktop e mobile.
document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", "#inicio");
    });
});

// Destaca no menu a seção que ocupa a área central da tela.
const secoesDaPagina = Array.from(document.querySelectorAll("section[id]"));

if (conteudoInicio && !secoesDaPagina.includes(conteudoInicio)) {
    secoesDaPagina.unshift(conteudoInicio);
}

function atualizarLinkAtivo(idDaSecao) {
    linksDoMenu.forEach((link) => {
        const href = link.getAttribute("href");
        const linkCorresponde = href === `#${idDaSecao}`;

        link.classList.toggle("ativo", linkCorresponde);

        if (linkCorresponde) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

if (secoesDaPagina.length > 0) {
    atualizarLinkAtivo("inicio");

    if ("IntersectionObserver" in window) {
        const observadorDeSecoes = new IntersectionObserver(
            (entradas) => {
                const visivel = entradas
                    .filter((entrada) => entrada.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visivel) {
                    atualizarLinkAtivo(visivel.target.id);
                }
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: [0, 0.15, 0.35]
            }
        );

        secoesDaPagina.forEach((secao) => observadorDeSecoes.observe(secao));
    }
}

function mostrarMensagemEmail(mensagem) {
    if (mensagemEmail) {
        mensagemEmail.textContent = mensagem;
    }
}

function copiarEmailComFallback(email) {
    const elementoComFoco = document.activeElement;
    const campoTemporario = document.createElement("textarea");
    campoTemporario.value = email;
    campoTemporario.setAttribute("readonly", "");
    campoTemporario.setAttribute("aria-hidden", "true");
    campoTemporario.style.position = "fixed";
    campoTemporario.style.opacity = "0";
    document.body.appendChild(campoTemporario);
    campoTemporario.select();

    let copiado = false;

    try {
        copiado = document.execCommand("copy");
    } catch (erro) {
        copiado = false;
    }

    campoTemporario.remove();

    if (elementoComFoco instanceof HTMLElement) {
        elementoComFoco.focus();
    }

    return copiado;
}

let tempoParaRestaurarTexto;

async function copiarEmail() {
    if (!botaoCopiarEmail) {
        return;
    }

    const email = botaoCopiarEmail.dataset.email.trim();
    let copiado = false;

    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(email);
            copiado = true;
        } catch (erro) {
            copiado = copiarEmailComFallback(email);
        }
    } else {
        copiado = copiarEmailComFallback(email);
    }

    window.clearTimeout(tempoParaRestaurarTexto);

    if (copiado) {
        textoCopiarEmail.textContent = "E-mail copiado";
        mostrarMensagemEmail("E-mail copiado com sucesso!");

        tempoParaRestaurarTexto = window.setTimeout(() => {
            textoCopiarEmail.textContent = "Copiar e-mail";
        }, 3000);
    } else {
        textoCopiarEmail.textContent = "Copiar e-mail";
        mostrarMensagemEmail("Não foi possível copiar. Use a opção Enviar e-mail.");
    }
}

if (botaoCopiarEmail && textoCopiarEmail) {
    botaoCopiarEmail.addEventListener("click", copiarEmail);
}

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}
