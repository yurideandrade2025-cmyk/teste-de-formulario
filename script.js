document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário para fazermos a validação antes
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validação: Verifica se as senhas são iguais
    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem!';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Cadastro realizado com sucesso! (Simulação)');
        
        // Aqui você enviaria os dados para o seu servidor backend
        this.reset(); 
    }
});