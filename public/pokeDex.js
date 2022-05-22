
var counter = 0;
document.addEventListener("DOMContentLoaded", () => {
    getPoke();
})


function getPoke() {
    for (var x = 1; x < 10; x++) {
        var random = Math.floor(Math.random() * 900);
        fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)

        .then(response => response.json())

        .then(function(pokepokemon) {
            getPokepokemon(pokepokemon);
        })
    }
}

function getPokepokemon(pokemon) {
 
        let pokeCont = document.createElement("div");
        let pokemonIMG = document.createElement("img");
        var pokeLink = document.createElement("a");

        pokemonIMG.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

        let imgBox = document.createElement("div");
        // imgBox.style.width = "200px";

        pokeCont.classList.add("poke-container");
        pokemonIMG.classList.add("pokemon-image");

        imgBox.appendChild(pokemonIMG);
        imgBox.classList.add("imgBox");

        let name = document.createElement("h3");

        if(pokemon.id < 300) {
            name.innerText = `${pokemon.name} $30`;
        } else if(pokemon.id < 600) {
            name.innerText = `${pokemon.name} $20`;
        } else {
            name.innerText = `${pokemon.name} $10`;
        }

        name.style.alignSelf = "center";


        let id = document.createElement("p");
        id.innerText = "#" + pokemon.id;
        id.style.alignSelf = "center";

        let add = document.createElement("a");
        add.innerText = "Add to cart";
        add.style.cssText ="outline-width: 3px;border-radius: 15px;background-color: rgba(229, 229, 224, 1);box-shadow: 0 3px 10px rgb(0 0 0 / 0.7);align-self: center;"

        pokeCont.appendChild(name);
        pokeCont.appendChild(imgBox);
        pokeCont.appendChild(id);
        pokeCont.appendChild(add);
        
        pokeLink.appendChild(pokeCont);
        pokeLink.href = "profile.html";
        let mainCont = document.getElementById("main-container");
        let colOne = document.getElementById("colOne");
        let colTwo = document.getElementById("colTwo");
        let colThree = document.getElementById("colThree");

        if(counter < 3) {
            colOne.appendChild(pokeLink);
            counter++;
        } else if(counter < 6) {
            colTwo.appendChild(pokeLink);
            counter++;
        } else if(counter < 9){
            colThree.appendChild(pokeLink);
            counter++;
        }


        mainCont.appendChild(colOne);
        mainCont.appendChild(colTwo);
        mainCont.appendChild(colThree);

        add.addEventListener("click", () => {

        })

        pokeLink.addEventListener("click", () => {
            console.log(pokeLink);
            localStorage.setItem("pokemon", pokeLink.firstChild.firstChild.textContent);
            addNewEvent(pokeLink.firstChild.firstChild.textContent);
        })
}


function addNewEvent(poke_name) {
    var now = new Date(Date.now());
    var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(formatted);
    $.ajax({
        url: "https://pokedex-assignment3.herokuapp.com/times/insert",
        type: "put",
        data: {
            text: `${poke_name}`,
            hits: 1,
            time: now
        },
        success: (res)=>{console.log(res)}
    })
}

function addToCart(poke_id) {
    fetch("")
}