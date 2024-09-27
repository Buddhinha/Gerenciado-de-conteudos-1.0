
// Obtém o título da página atual
const titulo = document.getElementById('titulo').textContent;

// Obtém a área onde o conteúdo será inserido
const conteudo = document.getElementById('conteudo');

// Define o texto de acordo com o título da página
switch (titulo) {
    case 'Página Principal':
        conteudo.textContent = 'Bem-vindo à Página Principal! Este é o início do nosso site.';
        break;
    case 'Página 1':
        conteudo.textContent = 'Este é o conteúdo da Página 1. Aqui você encontra informações especiais.';
        break;
    case 'Página 2':
        conteudo.textContent = 'Bem-vindo à Página 2. Aqui há mais conteúdo interessante.';
        break;
    case 'Página 3':
        conteudo.textContent = 'Você chegou à Página 3! Este é o último conteúdo desta série de páginas.';
        break;
    default:
        conteudo.textContent = 'Conteúdo não encontrado.';
        break;
}
