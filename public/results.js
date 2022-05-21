document.addEventListener("DOMContentLoaded", () => {
    let counter = localStorage.length;
    for (var x = 0; x < counter; x++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem(`${x}`)}`)
        .then(response => response.json())
        .then(function(pokemon) {
            addItem(pokemon);
        })
    }
})

function addItem(pokemon) {
    let pokeCont = document.createElement("div");
    let pokemonIMG = document.createElement("img");
    var pokeLink = document.createElement("a");

    pokemonIMG.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

    let imgBox = document.createElement("div");
    imgBox.style.width = "200px";

    pokeCont.classList.add("poke-container");
    pokemonIMG.classList.add("pokemon-image");

    imgBox.appendChild(pokemonIMG);
    imgBox.classList.add("imgBox");


    let name = document.createElement("h3");
    name.innerText = pokemon.name;
    name.style.alignSelf = "center";
    
    let id = document.createElement("p");
    id.innerText = "#" + pokemon.id;
    id.style.alignSelf = "center";


    pokeCont.appendChild(name);
    pokeCont.appendChild(imgBox);

    pokeCont.appendChild(id);
    
    pokeLink.appendChild(pokeCont);
    pokeLink.href = "profile.html";
    let mainCont = document.getElementById("main-container");

    mainCont.appendChild(pokeLink);

    pokeLink.addEventListener("click", () => {
        console.log(pokeLink);
        localStorage.setItem("pokemon", pokeLink.firstChild.firstChild.textContent);
        })
}