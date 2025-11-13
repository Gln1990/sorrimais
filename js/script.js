// Funções para a página principal
document.addEventListener('DOMContentLoaded', function() {//Essa linha faz o código rodar somente depois que todo o conteúdo HTML foi carregado.Isso evita erros como tentar acessar elementos que ainda não existem na página.

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {//Seleciona todos os links (<a>) cujo atributo href começa com o símbolo #. forEach(anchor => Percorre cada link interno encontrado.
        anchor.addEventListener('click', function (e) {//Adiciona um evento de clique para cada link.
            e.preventDefault();//Impede o comportamento padrão do navegador (que seria pular diretamente para o destino de forma brusca).
            const target = document.querySelector(this.getAttribute('href'));//Pega o valor do atributo href do link clicado (ex: #contato) e procura o elemento correspondente na página (ex: <section id="contato">)

            if (target) {
                target.scrollIntoView({ //Faz a página rolar suavemente até o elemento alvo.
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');//Aqui o script procura no HTML um elemento com o ID=contactForm, O resultado é guardado na variável contactForm
    if (contactForm) {//Esse if verifica se o formulário realmente existe na página antes de tentar usar ele. Isso evita erros como “Cannot read property 'addEventListener' of null”.
        contactForm.addEventListener('submit', function(e) {//Adiciona um ouvinte de evento para o momento em que o formulário for enviado (ou seja, quando o usuário clicar em um botão <button type="submit">).
            e.preventDefault();//O e é o evento de envio (submit). O método preventDefault() impede o comportamento padrão do formulário, que seria: recarregar a página ou enviar os dados para o servidor pela URL definida em action.


            
            // Simular envio do formulário
            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            
            // Limpar formulário
            contactForm.reset();
        });
    }

    // Adicionar classe active ao navbar conforme scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});