// Dados de usuários para demonstração
const usuarios = [
    { id: 1, username: 'paciente', password: '123', tipo: 'paciente', nome: 'João Silva' },
    { id: 2, username: 'dentista', password: '123', tipo: 'dentista', nome: 'Dra. Maria Santos' },
    { id: 3, username: 'admin', password: '123', tipo: 'administracao', nome: 'Carlos Oliveira' },
    { id: 4, username: 'recepcao', password: '123', tipo: 'recepcao', nome: 'Ana Costa' }
];

// Verificar se o usuário já está logado e redirecionar para dashboard específico
document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
    if (usuarioLogado) {
        const usuario = JSON.parse(usuarioLogado);
        redirecionarParaDashboard(usuario);
    }

    // Configurar formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            fazerLogin();
        });
    }
});

// Função para redirecionar para a dashboard correta
function redirecionarParaDashboard(usuario) {
    switch(usuario.tipo) {
        case 'paciente':
            window.location.href = 'dashboard_paciente.html';
            break;
        case 'dentista':
            window.location.href = 'dashboard_dentista.html';
            break;
        case 'administracao':
            window.location.href = 'dashboard_administracao.html';
            break;
        case 'recepcao':
            window.location.href = 'dashboard_recepcao.html';
            break;
        default:
            window.location.href = 'login.html';
    }
}

function fazerLogin() {
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar campos
    if (!userType || !username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar credenciais
    const usuario = usuarios.find(u => 
        u.tipo === userType && 
        u.username === username && 
        u.password === password
    );

    if (usuario) {
        // Salvar usuário no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        
        // Redirecionar para dashboard específico
        redirecionarParaDashboard(usuario);
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}

// Verificar autenticação nas páginas protegidas
function verificarAutenticacao(tipoEsperado = null) {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
    if (!usuarioLogado) {
        window.location.href = 'login.html';
        return null;
    }

    const usuario = JSON.parse(usuarioLogado);
    
    // Se foi especificado um tipo esperado, verificar se corresponde
    if (tipoEsperado && usuario.tipo !== tipoEsperado) {
        // Redirecionar para a dashboard correta do usuário
        redirecionarParaDashboard(usuario);
        return null;
    }
    
    return usuario;
}