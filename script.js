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
  