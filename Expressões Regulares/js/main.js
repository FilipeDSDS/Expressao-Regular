document.getElementById('validar').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    if (!/^[A-Za-zÀ-ú\s]+$/.test(nome) || nome.length > 100) {
        alert('Por favor, insira um nome válido (sem números e até 100 caracteres).');
        return;
    }

    var email = document.getElementById('email').value;
    if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    var telefone = document.getElementById('telefone').value;
    if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone)) {
        alert('Por favor, insira um telefone válido (com DDD no padrão brasileiro e o hífen - no meio dos números).');
        return;
    }

    alert('Todos os campos estão válidos!');
});
