"use strict";

(function(){

    // document.getElementById("header").innerText = "Learning is P Dumb :)";
    // document.getElementsByClassName("grandpa")[0].innerHTML = "<h1>Look ma, I broke it!</h1>";
    // document.getElementsByTagName("p")[0].innerText = "Look at those pretty dots!!!";

    document.getElementById("login-btn").addEventListener("click", function(e) {
        e.preventDefault();
        var username = document.forms.login.username.value;
        var password = document.forms.login.password.value;
        alert("Username: " + username +"\nPassword: " + password);
    });



})();