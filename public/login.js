document.addEventListener("DOMContentLoaded", () => {

    var enter = document.getElementById("login");
    enter.addEventListener("click", () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        fetch("/user")
        .then(response => response.json())
        .then(function(data) {
            data.forEach(element => {
                if(((element.email).trim().localeCompare(email)) == 0 && ((element.password).trim().localeCompare(password)) == 0) {
                    localStorage.setItem("logged-in", true);
                    localStorage.setItem("user", `${element._id}`);
                    localStorage.setItem("cart", []);
                    return window.location.href = "/user.html";
                }
            });
        })
    })

})