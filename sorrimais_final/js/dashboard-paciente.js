// Dashboard do Paciente
document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticação
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuario || usuario.tipo !== 'paciente') {
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


    // Toggle sidebar em mobile
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('active');
    });

    // Formulário de agendamento
    document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        agendarConsulta();
    });

    // Carregar dados iniciais
    carregarDadosPaciente();
});

function carregarDadosPaciente() {
    // Em uma aplicação real, isso viria de uma API
    console.log('Carregando dados do paciente...');
}

function agendarConsulta() {
    const data = document.getElementById('dataConsulta').value;
    const hora = document.getElementById('horaConsulta').value;
    const dentistaId = document.getElementById('dentistaConsulta').value;
    const procedimento = document.getElementById('procedimentoConsulta').value;

    if (!data || !hora || !dentistaId || !procedimento) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simular agendamento
    alert('Consulta agendada com sucesso!');
    document.getElementById('agendamentoForm').reset();
}

function cancelarAgendamento(id) {
    if (confirm('Tem certeza que deseja cancelar este agendamento?')) {
        alert('Agendamento cancelado com sucesso!');
        // Aqui iria a lógica para cancelar no backend
    }
}