document.addEventListener("DOMContentLoaded", () => {

    var enter = document.getElementById("login");
    enter.addEventListener("click", () => {

        var email = document.getElementById("email").text;
        var password = document.getElementById("password").text;

        fetch("/user")
        .then(response => response.json())
        .then(function(data) {
            data.forEach(element => {
                if(element.email === email && element.password === password) {
                    localStorage.setItem("logged-in", true);
                    localStorage.setItem("user", `${element.email}`);
                    return window.location.href = "/";
                }
            });
        })
    })

})