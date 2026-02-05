const inputArea = document.getElementById('busca-filme');
const btnBuscar = document.getElementById('botao-buscar');
const areaFilmes = document.getElementById('movies');
const textoBoasVindas = document.querySelector('.texto-boas-vindas');

async function buscarFilmes(nome) {
    const baseUrl = 'https://www.omdbapi.com/?apikey=';
    const apikey = '9130d155';
    const nomeCode = encodeURIComponent(nome);

    try {
        areaFilmes.innerHTML = '';
        const resposta = await fetch(`${baseUrl}${apikey}&s=${nomeCode}`);
        const dados = await resposta.json();
        if(dados.Response === 'False'){
            alert('Nenhum filme encontrado com esse nome.');
            return;
        }
        
        dados.Search.forEach(filme => {

            const card = document.createElement('div');
            const cardTitulo = document.createElement('h3');
            const cardAno = document.createElement('p');
            card.classList.add('filme-card');
            cardTitulo.classList.add('filme-titulo');
            cardAno.classList.add('filme-ano')
            cardTitulo.textContent = filme.Title;
            cardAno.textContent = filme.Year;
            areaFilmes.appendChild(card);
            card.appendChild(cardTitulo);
            card.appendChild(cardAno);

        });
    }
    catch (erro) {
        console.log('Erro na requisição: ' + erro.message);
    }
}

async function traduzir(texto){
    const url = 'https://api.mymemory.translated.net/get?q=';
    const langpair = '&langpair=pt|en';
    const nomeCode = encodeURIComponent(texto);

    try {
        const res = await fetch(`${url}${nomeCode}${langpair}`);

        if(!res.ok){
            throw new Error('Erro HTTP: ' + res.status);
        }

        const data = await res.json();
        return data.responseData.translatedText;
    }catch (erro) {
        console.log('Erro na tradução: ' + erro.message);
    }
}

 async function filtrarNome(nome){
    inputArea.value = '';
    nome = nome.trim().toLowerCase();
    if(!nome){
        alert('Por favor, insira o nome de um filme.');
        return;
    }

    const traducao = await traduzir(nome);

    if(!traducao){
        alert('Erro ao traduzir o nome do filme.');
        return;
    }
    buscarFilmes(traducao);
}

btnBuscar.addEventListener('click' , (event) => {
    event.preventDefault();
    textoBoasVindas.style.display = 'none';
    filtrarNome(inputArea.value);
})

