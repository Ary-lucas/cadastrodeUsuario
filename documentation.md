# Projeto Prático 01 - Página de Cadastro: DevConnect

## Resumo

Este projeto consiste na criação de uma página de cadastro funcional e estilizada para a startup **DevConnect**, com foco em atrair novos desenvolvedores para a plataforma. A página foi desenvolvida utilizando **HTML**, **CSS**, e **JavaScript**, visando uma interface atraente, intuitiva e pronta para validações futuras.

----------

## Estrutura do Projeto

### 1. **HTML**

O arquivo HTML define a estrutura principal da página. Ele contém:

-   Uma caixa centralizada (`div`) para o formulário.
-   Campos de entrada para **Nome Completo**, **Email**, **Senha** e **Confirmação de Senha**.
-   Um botão para submeter os dados.

#### Código:

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro - DevConnect</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="form-container" class="form-box">
    <h1 class="form-title">Cadastro - DevConnect</h1>
    <form id="user-form" class="form-content">
      <input type="text" id="full-name" class="input-field" placeholder="Nome Completo" required>
      <input type="email" id="email" class="input-field" placeholder="Email" required>
      <input type="password" id="password" class="input-field" placeholder="Senha" required>
      <input type="password" id="confirm-password" class="input-field" placeholder="Confirme a Senha" required>
      <button type="submit" id="submit-button" class="submit-button">Cadastrar</button>
    </form>
  </div>
  <script src="script.js"></script>
</body>
</html>

````

### 2. **CSS**

O arquivo CSS estiliza a página com foco em:

-   **Centralização e design profissional**: Formulário com fundo translúcido e bordas arredondadas.
-   **Interatividade**: Animações de hover para os campos de entrada e o botão de submissão.
-   **Responsividade**: Ajustes para telas menores (dispositivos móveis).

#### Destaques:

-   **Fonte**: `JetBrains Mono`, importada do Google Fonts.
-   **Cores**: Gradiente de fundo escuro, componentes translúcidos e foco em acessibilidade visual.
-   **Animações**: Transições suaves ao interagir com os elementos.

#### Código:
````css
body {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #2e2e2e, #000);
  color: white;
}

.form-box {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  max-width: 400px;
  text-align: center;
}

.input-field {
  width: 90%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  outline: none;
  background-color: rgba(255, 255, 255, 0.85);
  transition: transform 0.2s ease, background-color 0.3s;
}

.input-field:hover {
  transform: scale(1.05);
}

.submit-button {
  padding: 0.8rem;
  margin-top: 1rem;
  border-radius: 10px;
  background: rgba(0, 123, 255, 0.8);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s;
}

.submit-button:hover {
  transform: scale(1.05);
}

````

### 3. **JavaScript**

O arquivo JavaScript gerencia a funcionalidade do formulário:

-   **Validação básica**: Garante que a senha e a confirmação coincidam.
-   **Interatividade**: Substitui o formulário por uma mensagem de sucesso ao concluir o cadastro.

#### Código:
````js
document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("As senhas não correspondem!");
    return;
  }

  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
    <div class="success-message">
      Cadastro realizado com sucesso!<br>
      Bem-vindo(a), ${fullName}!
    </div>
  `;
});

````

## Estrutura de Pastas
/cadastrodeUsuario
│
├── index.html         # Estrutura da página
├── styles.css         # Estilo da página
└── script.js          # Funcionalidade interativa

## Melhorias Futuras

-   **Validações adicionais**:
    -   Verificação de força da senha.
    -   Garantia de formato válido para o email.
-   **Integração com backend**:
    -   Salvamento de dados no servidor.
    -   Integração com APIs para validação em tempo real.
-   **Design adaptável**:
    -   Suporte completo para temas claros e escuros.
    -   Layout dinâmico para diferentes dispositivos.

----------

## Impacto

A página de cadastro representa a porta de entrada para a comunidade **DevConnect**, conectando desenvolvedores de todo o mundo de forma simples, estilosa e funcional. 🚀
