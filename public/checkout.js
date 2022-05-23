let price = 0;

document.addEventListener("DOMContentLoaded", () => {
    var l = localStorage.getItem("loggedin");
    if (l == "false") {
        return window.location.href = "/login.html";
    }
    getPoke();
})

function getPoke() {
    var cart = localStorage.getItem("cart");
    var cartItems = cart.split(" ");

    for(var x = 0; x < cartItems.length; x++) {

        fetch(`https://pokeapi.co/api/v2/pokemon/${cartItems[x]}`)

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

    pokeCont.classList.add("poke-container");
    pokemonIMG.classList.add("pokemon-image");

    imgBox.appendChild(pokemonIMG);
    imgBox.classList.add("imgBox");

    let name = document.createElement("h3");

    if(pokemon.id < 300) {
        name.innerText = `${pokemon.name} $30`;
        price +=30;
    } else if(pokemon.id < 600) {
        name.innerText = `${pokemon.name} $20`;
        price +=20;
    } else {
        name.innerText = `${pokemon.name} $10`;
        price +=10;
    }

    name.style.alignSelf = "center";


    let id = document.createElement("p");
    id.innerText = "#" + pokemon.id;
    id.style.alignSelf = "center";

    let add = document.createElement("a");
    add.innerText = "Add to cart";
    add.style.cssText ="outline-width: 3px;border-radius: 7px;background-color: rgba(229, 229, 224, 1);box-shadow: 0 3px 10px rgb(0 0 0 / 0.7);align-self: center;cursor: pointer;"


    pokeLink.appendChild(imgBox);
    pokeCont.appendChild(name);
    pokeCont.appendChild(pokeLink);
    pokeCont.appendChild(id);
    pokeCont.appendChild(add);
    pokeLink.href = "profile.html";
    let mainCont = document.getElementById("main-container");
    let colOne = document.getElementById("colOne");
    let colTwo = document.getElementById("colTwo");
    let colThree = document.getElementById("colThree");

    if(counter < 3) {
        colOne.appendChild(pokeCont);
        counter++;
    } else if(counter < 6) {
        colTwo.appendChild(pokeCont);
        counter++;
    } else if(counter < 9){
        colThree.appendChild(pokeCont);
        counter++;
    }


    mainCont.appendChild(colOne);
    mainCont.appendChild(colTwo);
    mainCont.appendChild(colThree);

    add.addEventListener("click", () => {
        addToCart(pokemon.id)
    })

    pokeLink.addEventListener("click", () => {
        console.log(pokeLink);
        localStorage.setItem("pokemon", pokemon.name);
        addNewEvent(pokemon.name);
    })
}