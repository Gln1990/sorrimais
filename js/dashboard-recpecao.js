// Dashboard da Recepção
document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticação
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuario || usuario.tipo !== 'recepcao') {
        window.location.href = 'login.html';
        return;
    }

    // Configurar interface
    document.getElementById('welcomeMessage').textContent = `Bem-vindo, ${usuario.nome}`;
    
    // Configurar data atual
    const hoje = new Date();
    document.getElementById('dataHoje').textContent = hoje.toLocaleDateString('pt-BR');
    document.getElementById('dataAgendamento').value = hoje.toISOString().split('T')[0];

    // Configurar eventos
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('active');
    });

    // Formulários
    document.getElementById('pacienteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        cadastrarPaciente();
    });

    document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        criarAgendamento();
    });

    // Carregar dados iniciais
    carregarDadosRecepcao();
});

function carregarDadosRecepcao() {
    // Em uma aplicação real, isso viria de uma API
    console.log('Carregando dados da recepção...');
    
    // Simular dados
    document.getElementById('consultasHoje').textContent = '8';
    document.getElementById('pacientesCadastrados').textContent = '156';
    document.getElementById('agendamentosPendentes').textContent = '3';
    document.getElementById('conveniosAtivos').textContent = '6';
}

function cadastrarPaciente() {
    const nome = document.getElementById('nomePaciente').value;
    const cpf = document.getElementById('cpfPaciente').value;
    const telefone = document.getElementById('telefonePaciente').value;

    if (!nome || !cpf || !telefone) {
        alert('Por favor, preencha os campos obrigatórios!');
        return;
    }

    // Simular cadastro
    alert('Paciente cadastrado com sucesso!');
    document.getElementById('pacienteForm').reset();
    
    // Atualizar contador
    const pacientesAtuais = parseInt(document.getElementById('pacientesCadastrados').textContent);
    document.getElementById('pacientesCadastrados').textContent = pacientesAtuais + 1;
}

function criarAgendamento() {
    const paciente = document.getElementById('pacienteAgendamento').value;
    const dentista = document.getElementById('dentistaAgendamento').value;
    const data = document.getElementById('dataAgendamento').value;
    const hora = document.getElementById('horaAgendamento').value;
    const procedimento = document.getElementById('procedimentoAgendamento').value;

    if (!paciente || !dentista || !data || !hora || !procedimento) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simular agendamento
    alert('Agendamento criado com sucesso!');
    document.getElementById('agendamentoForm').reset();
    
    // Resetar data para hoje
    const hoje = new Date();
    document.getElementById('dataAgendamento').value = hoje.toISOString().split('T')[0];
}

function cadastrarConvenio() {
    const nome = document.getElementById('nomeConvenio').value;
    const cnpj = document.getElementById('cnpjConvenio').value;
    const telefone = document.getElementById('telefoneConvenio').value;
    const email = document.getElementById('emailConvenio').value;

    if (!nome || !cnpj || !telefone || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simular cadastro
    alert('Convênio cadastrado com sucesso!');
    
    // Fechar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalConvenio'));
    modal.hide();
    
    // Limpar formulário
    document.getElementById('convenioForm').reset();
    
    // Atualizar contador
    const conveniosAtuais = parseInt(document.getElementById('conveniosAtivos').textContent);
    document.getElementById('conveniosAtivos').textContent = conveniosAtuais + 1;
}

// Funções auxiliares para ações na tabela
function confirmarConsulta(id) {
    if (confirm('Confirmar esta consulta?')) {
        alert('Consulta confirmada com sucesso!');
        // Lógica para confirmar no backend
    }
}

function cancelarConsulta(id) {
    if (confirm('Cancelar esta consulta?')) {
        alert('Consulta cancelada com sucesso!');
        // Lógica para cancelar no backend
    }
}