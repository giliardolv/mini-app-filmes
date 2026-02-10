const inputArea = document.getElementById('busca-filme');
const btnBuscar = document.getElementById('botao-buscar');
const areaFilmes = document.getElementById('movies');
const textoBoasVindas = document.querySelector('.texto-boas-vindas');

const modal = document.getElementById('modal-filme');
const modalOverlay = modal.querySelector('.modal-overlay');
const btnFecharModal = modal.querySelector('.modal-fechar');

const modalPoster = modal.querySelector('.modal-poster');
const modalTitulo = modal.querySelector('.modal-titulo');
const modalAno = modal.querySelector('.modal-ano');
const modalGenero = modal.querySelector('.modal-genero');
const modalNota = modal.querySelector('.modal-nota');
const modalPlot = modal.querySelector('.modal-plot');

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
            const cardPoster = document.createElement('img');

            card.classList.add('filme-card');
            cardTitulo.classList.add('filme-titulo');
            cardAno.classList.add('filme-ano');
            cardPoster.classList.add('filme-poster');

            cardTitulo.textContent = filme.Title;
            cardAno.textContent = filme.Year;

            if(filme.Poster !== 'N/A'){
                cardPoster.src = filme.Poster;
                cardPoster.alt = `Poster do filme ${filme.Title}`;
            }else{
                cardPoster.src = 'https://via.placeholder.com/300x450?text=Sem+Imagem';
                cardPoster.alt = 'Imagem não disponível';
            }

            card.appendChild(cardPoster);
            card.appendChild(cardTitulo);
            card.appendChild(cardAno);
            areaFilmes.appendChild(card);

            card.dataset.imdbid = filme.imdbID;
            card.addEventListener('click', () => {
                buscarDetalhesFilme(filme.imdbID);
            })
         });
    }
    catch (erro) {
        console.log('Erro na requisição: ' + erro.message);
    }
}

async function buscarDetalhesFilme(imdbID){
    const baseUrl = 'https://www.omdbapi.com/?apikey=';
    const apikey = '9130d155';
    try {
        const resposta = await fetch(`${baseUrl}${apikey}&i=${imdbID}&plot=full`);
        const filme = await resposta.json();

        preencherModal(filme);
        abrirModal();

    } catch (erro) {
        console.log('Erro ao buscar detalhes: ' + erro.message);
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

function preencherModal(filme){
    modalPoster.src = 
        filme.Poster !== 'N/A'
            ? filme.Poster
            : 'https://via.placeholder.com/300x450?text=Sem+Imagem';
    
    modalTitulo.textContent = filme.Title;
    modalAno.textContent = `Ano: ${filme.Year}`;
    modalGenero.textContent = `Gênero: ${filme.Genre}`;
    modalNota.textContent = `IMDb: ${filme.imdbRating}`;
    modalPlot.textContent = filme.Plot;
}

function abrirModal(){
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharModal(){
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

btnFecharModal.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', fecharModal);

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        fecharModal();
    }
})

btnBuscar.addEventListener('click' , (event) => {
    event.preventDefault();
    textoBoasVindas.style.display = 'none';
    filtrarNome(inputArea.value);
})
