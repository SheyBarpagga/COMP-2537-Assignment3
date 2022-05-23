

function prevOrder() {
    fetch(`https://pokedex-assignment3.herokuapp.com/carts/get`)
    .then(response => response.json())
    .then(function(data) {
        var id = localStorage.getItem("id");
        var orders = document.getElementById("orders");
        for (var x = 0; x < data.length; x++) {
            if (data[x].id == id) {
                var temp = data[x].pokemon;
                for(var y = 0; y < temp.length; y++) {
                    var v = document.createElement("p");
                    v.innerHTML = `${temp[x]}`;
                    orders.appendChild(v);
                }
            }
        }
    })
}

function tl() {
    fetch(`https://pokedex-assignment3.herokuapp.com/times/getAllEvents`)
    .then(response => response.json())
    .then(function(data) {
        var tl = document.getElementById("timeline");
        for(var x = 0; x < 2; x ++) {
            tl.appendChild(data[x]);
        }
    })

}