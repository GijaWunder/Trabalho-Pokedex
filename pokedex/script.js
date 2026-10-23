const buscar = document.querySelector('#buscar')

const nome = document.querySelector('#nome')
const tipo = document.querySelector('#tipo')

buscar.addEventListener('ke', () => {

})

let pokemon = 'pikachu'

function buscarPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(resposta => resposta.json())
    .then(dados => {
        nome.innerText = dados.name
        tipo.innerText = dados.types.map(t => t.type.name).join(' | ')
    })
    .catch(erro => {
        nome.innerText = 'Pokemon nao encontrado'
        tipo.innerText = ''
    })
}

    