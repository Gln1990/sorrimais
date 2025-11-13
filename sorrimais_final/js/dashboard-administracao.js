// Dashboard da Administração
document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticação
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuario || usuario.tipo !== 'administracao') {
        window.location.href = 'login.html';
        return;
    }

    // Configurar interface
    document.getElementById('welcomeMessage').textContent = `Bem-vindo, ${usuario.nome}`;

    // Configurar eventos
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('active');
    });

    // Formulário de funcionário
    document.getElementById('funcionarioForm').addEventListener('submit', function(e) {
        e.preventDefault();
        cadastrarFuncionario();
    });

    // Carregar dados iniciais
    carregarDadosAdministracao();
});

function carregarDadosAdministracao() {
    // Em uma aplicação real, isso viria de uma API
    console.log('Carregando dados administrativos...');
}

function cadastrarFuncionario() {
    const nome = document.getElementById('nomeFuncionario').value;
    const cargo = document.getElementById('cargoFuncionario').value;
    const email = document.getElementById('emailFuncionario').value;
    const telefone = document.getElementById('telefoneFuncionario').value;
    const salario = document.getElementById('salarioFuncionario').value;

    if (!nome || !cargo || !email || !telefone || !salario) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simular cadastro
    alert('Funcionário cadastrado com sucesso!');
    document.getElementById('funcionarioForm').reset();
}