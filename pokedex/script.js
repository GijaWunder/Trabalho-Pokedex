
const formulario = document.querySelector("#formulario");
const campoPokemon = document.querySelector("#pokemon");

const nome = document.querySelector("#nome");
const imagem = document.querySelector("#imagem");
const tipo = document.querySelector("#tipo");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

const habilidades = document.querySelector("#habilidades");

const hp = document.querySelector("#hp");
const ataque = document.querySelector("#ataque");
const defesa = document.querySelector("#defesa");
const velocidade = document.querySelector("#velocidade");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const pokemon = campoPokemon.value.trim().toLowerCase(); //tira os espaços antes e depois, deixa tudo minusculo

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Pokémon não encontrado"); //vê se o pokemon existe
            }

            return resposta.json(); //retorna para o catch
        })

        .then(dados => {
            nome.innerText = `${dados.id} - ${dados.name}`;
            imagem.src = dados.sprites.other["official-artwork"].front_default; //pega a img da API
            tipo.innerText = dados.types.map(t => t.type.name).join(" | "); //pega os tipos e separa com | 
            altura.innerText = `Altura: ${dados.height / 10} m`;
            peso.innerText = `Peso: ${dados.weight / 10} kg`;

            //habilidades
            habilidades.innerText = "Habilidades: " + dados.abilities.map(a => a.ability.name).join(" | "); //mesma coisa que o tipo

            //atributos
            hp.innerText = `HP: ${dados.stats[0].base_stat}`; //os numeros sao as posicoes dos atributos dentro da lista
            ataque.innerText = `Ataque: ${dados.stats[1].base_stat}`;
            defesa.innerText = `Defesa: ${dados.stats[2].base_stat}`;
            velocidade.innerText = `Velocidade: ${dados.stats[5].base_stat}`;

        })

        .catch(erro => { //pega o resultado do if

            nome.innerText = "Pokémon não encontrado!";
            imagem.src = "";
            tipo.innerText = "";
            altura.innerText = "";
            peso.innerText = "";

        });

});
