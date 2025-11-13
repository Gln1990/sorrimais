// Dashboard do Dentista
document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticação
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuario || usuario.tipo !== 'dentista') {
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

    // Formulário de prontuário
    document.getElementById('prontuarioForm').addEventListener('submit', function(e) {
        e.preventDefault();
        salvarProntuario();
    });

    // Carregar dados iniciais
    carregarDadosDentista();
});

function carregarDadosDentista() {
    // Em uma aplicação real, isso viria de uma API
    console.log('Carregando dados do dentista...');
    
    // Simular dados
    const hoje = new Date();
    document.getElementById('consultasHoje').textContent = '5';
    document.getElementById('pacientesAtendidos').textContent = '42';
    document.getElementById('prontuariosPendentes').textContent = '3';
    
    // Definir data atual no formulário
    document.getElementById('dataProntuario').value = hoje.toISOString().split('T')[0];
}

function salvarProntuario() {
    const paciente = document.getElementById('pacienteProntuario').value;
    const data = document.getElementById('dataProntuario').value;
    const procedimento = document.getElementById('procedimentoProntuario').value;

    if (!paciente || !data || !procedimento) {
        alert('Por favor, preencha os campos obrigatórios!');
        return;
    }

    // Simular salvamento
    alert('Prontuário salvo com sucesso!');
    document.getElementById('prontuarioForm').reset();
    
    // Resetar data para hoje
    const hoje = new Date();
    document.getElementById('dataProntuario').value = hoje.toISOString().split('T')[0];
}