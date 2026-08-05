# Portfólio — Eduardo Rodrigues

Portfólio profissional de Eduardo Rodrigues, estudante de Análise e Desenvolvimento de Sistemas com foco em Sistemas, Dados, Desenvolvimento Python e Automação.

O objetivo do site é apresentar de forma direta o perfil profissional, os conhecimentos em construção, a experiência anterior e o projeto **Portaria Inteligente — Reconhecimento de Placas**.

Site: [eduardosrodriguesdev.com.br](https://eduardosrodriguesdev.com.br/)

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Git e GitHub
- GitHub Pages

O projeto não utiliza frameworks, bibliotecas de interface ou dependências externas.

## Captura de tela

A captura de tela oficial ainda será adicionada. Quando estiver disponível, ela também poderá ser usada como imagem de compartilhamento do portfólio.

## Estrutura de arquivos

```text
portfolio-eduardo-rodrigues/
├── index.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── imagens/
│   │   ├── favicon.svg
│   │   ├── portfolio-preview.png        # pendente
│   │   ├── perfil/
│   │   └── projetos/
│   │       └── lpr-demonstracao.webp    # pendente
│   └── curriculo/
│       └── CV_Eduardo_Rodrigues.pdf     # pendente
├── README.md
└── .gitignore
```

## Como executar localmente

É possível abrir `index.html` diretamente no navegador. Para uma experiência mais próxima da publicação, use a extensão **Live Server** no VS Code:

1. Instale a extensão Live Server.
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

## Como fazer alterações

Os conteúdos principais ficam em `index.html`, o visual em `css/style.css` e as interações em `js/script.js`.

Antes de alterar, atualize sua cópia local:

```bash
git pull
```

Depois de revisar as mudanças, alguns exemplos de commits são:

```bash
git commit -m "feat: adiciona curriculo ao portfolio"
git commit -m "feat: adiciona imagem real do projeto lpr"
git commit -m "fix: ajusta responsividade do menu"
git commit -m "docs: atualiza instrucoes do projeto"
```

## Dados de contato

O e-mail profissional está em dois pontos de `index.html`:

- atributo `data-email` do botão **Copiar e-mail**;
- link `mailto:` da opção **Enviar e-mail**.

Caso o endereço seja alterado, atualize as duas ocorrências.

## Currículo pendente

Coloque o arquivo final exatamente em:

```text
assets/curriculo/CV_Eduardo_Rodrigues.pdf
```

Os dois links já usam esse caminho e o atributo `download`. Enquanto o arquivo não existe, eles possuem a classe `curriculo-pendente` e `aria-disabled="true"` para evitar uma página de erro.

Depois de adicionar o PDF:

1. remova a classe `curriculo-pendente` dos dois links em `index.html`;
2. remova `aria-disabled="true"` dos dois links;
3. atualize ou remova o texto `#aviso-curriculo` que informa que o arquivo está em preparação.

Não crie um PDF vazio apenas para preencher o caminho.

## Imagem real do LPR

Use preferencialmente uma imagem WebP em:

```text
assets/imagens/projetos/lpr-demonstracao.webp
```

O comentário dentro da seção do projeto em `index.html` mostra o elemento `<img>` preparado para substituir a ilustração feita com HTML e CSS. Mantenha o texto alternativo descritivo, as dimensões e `loading="lazy"`.

## Repositório do LPR

O botão **Ver no GitHub** aponta temporariamente para o perfil:

```text
https://github.com/eduardo-s-rodrigues
```

Quando o repositório específico estiver disponível, substitua somente esse endereço no link indicado pelo comentário em `index.html`.

## Imagem de compartilhamento

Adicione a imagem final em:

```text
assets/imagens/portfolio-preview.png
```

Depois, no `<head>` de `index.html`:

1. adicione `og:image` com a URL absoluta da imagem;
2. adicione `twitter:image` com a mesma URL;
3. altere `twitter:card` de `summary` para `summary_large_image`.

O HTML contém um comentário marcando esse ponto. Nenhum metadado aponta para a imagem enquanto ela não existe.

## GitHub Pages e domínio

Repositório:

```text
https://github.com/eduardo-s-rodrigues/portfolio-eduardo-rodrigues
```

O arquivo `CNAME` contém o domínio personalizado:

```text
eduardosrodriguesdev.com.br
```

No GitHub, a publicação deve usar a branch principal e a pasta `/ (root)` em **Settings → Pages**. As configurações DNS são mantidas fora deste projeto.

## Melhorias futuras

- Adicionar o currículo final em PDF.
- Substituir a representação visual do LPR por uma imagem real.
- Informar o repositório exato do LPR.
- Adicionar a imagem de compartilhamento.
- Atualizar o conteúdo à medida que novos projetos forem desenvolvidos.

Este portfólio foi construído com HTML, CSS e JavaScript puro para manter o código leve, claro e fácil de estudar.
