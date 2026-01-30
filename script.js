const inputArea = document.getElementById('busca-filme');
const btnBuscar = document.getElementById('botao-buscar');
const areaFilmes = document.getElementById('movies');

async function buscarFilmes(nome) {
    const baseUrl = 'https://www.omdbapi.com/?apikey=';
    const apikey = '9130d155';

    inputArea.value = '';
    nome = nome.trim().toLowerCase();
    if(!nome){
        alert('Por favor, insira o nome de um filme.');
        return;
    }

    const nomeCode = encodeURIComponent(nome);

    try {
        const resposta = await fetch(`${baseUrl}${apikey}&s=${nomeCode}`);
        const dados = await resposta.json();
        
        console.log(dados);

    }
    catch (erro) {
        console.log('Erro na requisição: ' + erro.message);
    }
}

btnBuscar.addEventListener('click' , (event) => {
    event.preventDefault();
    buscarFilmes(inputArea.value);
})

