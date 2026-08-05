# Portfólio — Eduardo Rodrigues

Portfólio profissional de página única desenvolvido para apresentar o perfil, os conhecimentos, a experiência e o projeto principal de Eduardo Rodrigues.

O projeto foi criado somente com tecnologias nativas da web. Não utiliza frameworks, bibliotecas ou dependências externas.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Git e GitHub para versionamento e publicação

## Estrutura de pastas

```text
portfolio-eduardo-rodrigues/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── imagens/
│   │   ├── perfil/
│   │   └── projetos/
│   └── curriculo/
│       └── CV_Eduardo_Rodrigues.pdf
├── README.md
└── .gitignore
```

## Como abrir localmente

Para uma visualização rápida, abra o arquivo `index.html` diretamente no navegador.

Também é possível usar a extensão **Live Server** no VS Code:

1. Instale a extensão Live Server.
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito sobre `index.html`.
4. Selecione **Open with Live Server**.

## Personalização necessária

### Currículo

Coloque o currículo em:

```text
assets/curriculo/CV_Eduardo_Rodrigues.pdf
```

Mantenha exatamente esse nome para que os dois botões de download funcionem sem alterações adicionais.

### Imagens

- Foto de perfil: coloque em `assets/imagens/perfil/`.
- Imagens ou capturas do LPR: coloque em `assets/imagens/projetos/`.

O projeto LPR usa atualmente um placeholder construído com HTML e CSS. Quando houver uma imagem real, substitua esse bloco no arquivo `index.html` e inclua um texto alternativo descritivo.

### E-mail

No arquivo `index.html`, procure por:

```text
SEU_EMAIL_AQUI
```

Substitua o valor presente em `data-email` pelo endereço profissional. O botão de contato passará a copiar esse endereço automaticamente.

### Repositório do LPR

No arquivo `index.html`, localize o comentário sobre o repositório LPR. Substitua o link temporário:

```text
https://github.com/eduardo-s-rodrigues
```

pelo endereço exato do projeto.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto para a branch principal.
3. No repositório, abra **Settings**.
4. Acesse **Pages** no menu lateral.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch principal e a pasta `/ (root)`.
7. Salve e aguarde o endereço público ser gerado.

Como todos os caminhos do projeto são relativos, o site pode ser publicado diretamente na raiz do GitHub Pages.

## Melhorias futuras

- Adicionar uma imagem real do sistema LPR.
- Informar o endereço exato do repositório do projeto.
- Adicionar o currículo final em PDF.
- Substituir o marcador pelo e-mail profissional.
- Atualizar o conteúdo à medida que novos projetos e conhecimentos forem desenvolvidos.
# portfolio-eduardo-rodrigues
