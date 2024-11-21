---
slug: create-portfolio-with-github-pages-and-docusaurus
title: Como Criar seu Portfólio com GitHub Pages e Docusaurus
authors: [lis]
tags: [portfolio, github-pages, docusaurus]
description: Aprenda como criar um portfólio profissional usando GitHub Pages e Docusaurus, passo a passo.
date: 2024-11-20
---

Criar um portfólio profissional pode ser fácil e acessível utilizando **GitHub Pages** e **Docusaurus**. Este guia irá te orientar passo a passo na configuração, personalização e publicação do seu portfólio.

<!--truncate-->

## Step 1: Configure o SSH com GitHub

1. **Gere uma nova chave SSH**:

    ```bash
    ssh-keygen -t ed25519 -C "seu_email@example.com"
    ```

2. **Copie a chave SSH** para o clipboard:

    ```bash
    cat ~/.ssh/id_ed25519.pub
    ```

3. **Adicione a chave SSH** à sua conta do GitHub em [Configurações de SSH no GitHub](https://github.com/settings/keys).

---

## Step 2: Instale Node.js e Yarn no seu computador

Para instalar o **Node.js** e o **Yarn**, utilize o **Node Version Manager (nvm)**:

```bash
# Instale o nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reinicie o terminal e instale o Node.js
nvm install 20

# Verifique se o Node.js foi instalado corretamente
node -v # Deve exibir a versão 20.x

# Instale o Yarn globalmente
npm install --global yarn
yarn --version
```

---

## Step 3: Crie um Repositório no GitHub

Crie um novo repositório no GitHub com o nome desejado (exemplo: `portfolio`). Ele será usado para hospedar seu site.

---

## Step 4: Inicialize um Projeto Docusaurus

Crie um novo site com o comando:

```bash
npx create-docusaurus@latest portfolio classic --javascript
cd portfolio
yarn install
```

Isso cria um site Docusaurus básico, que você pode personalizar.

---

## Step 5: Inicie o Servidor de Desenvolvimento

Para visualizar o site localmente, execute:

```bash
yarn start
```

Acesse `http://localhost:3000` para visualizar seu site. Agora você pode personalizar o conteúdo.

---

## Step 6: Configure o Git e Envie o Projeto para o GitHub

1. Inicialize o repositório Git:

    ```bash
    git init
    git status
    ```

2. Adicione e faça o commit dos arquivos:

    ```bash
    git add .
    git commit -m "Initial commit for Docusaurus site"
    ```

3. Configure o repositório remoto e envie o código:

    ```bash
    git branch -M main
    git remote add origin git@github.com:seu-usuario/portfolio.git
    git push -u origin main
    ```

---

## Step 7: Configure o `docusaurus.config.js` para Deploy

Atualize o arquivo `docusaurus.config.js` com as configurações de GitHub Pages:

```javascript
module.exports = {
  url: 'https://seu-usuario.github.io',
  baseUrl: '/portfolio/',
  organizationName: 'seu-usuario',
  projectName: 'portfolio',
  deploymentBranch: 'gh-pages',
};
```

---

## Step 8: Realize o Deploy com GitHub Pages

Para construir e publicar seu site, execute:

```bash
yarn build
USE_SSH=true yarn deploy
```

Isso criará a branch `gh-pages` e publicará o site em:  
`https://seu-usuario.github.io/portfolio/`

---

## Step 9: Personalize seu Site

Adicione conteúdo novo utilizando arquivos Markdown:

- Para conteúdo estático, edite os arquivos em `src/pages/`.
- Para documentação, adicione arquivos na pasta `docs/`.

Exemplo de página personalizada em Markdown:

```markdown
# Bem-vindo ao meu portfólio

Este é um site criado com **Docusaurus** e hospedado no **GitHub Pages**.

## Minhas habilidades
- Machine Learning
- MLOps
- Python
```

Salve o arquivo em `src/pages/portfolio.md` e ele estará disponível em `/portfolio`.

---

## Step 10: Atualize e Publique Novamente

Sempre que fizer alterações, siga estas etapas para atualizar o site:

1. Adicione e faça o commit das alterações:

    ```bash
    git add .
    git commit -m "Atualizações no portfólio"
    ```

2. Envie para o repositório remoto:

    ```bash
    git push -u origin main
    ```

3. Construa e publique novamente:

    ```bash
    yarn build
    USE_SSH=true yarn deploy
    ```

---

## Conclusão

Seguindo este guia, você terá um portfólio profissional hospedado gratuitamente no **GitHub Pages** e criado com o poderoso framework **Docusaurus**.

Acesse o meu portfólio como exemplo:  
[**Meu Portfólio**](https://lis-r-barreto.github.io/portfolio/)

Se este guia foi útil, deixe seus comentários e compartilhe com seus amigos! 🚀
