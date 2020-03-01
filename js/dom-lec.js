"use strict";

(function(){

    var header = document.getElementById("header");

    header.style.backgroundColor = "#ef0";

    header.innerText = "Document Object Model";

    // console.log(header);
    var grandpa = document.getElementsByClassName("grandpa")[0];

    // console.log(grandpa);

    var paragraph = document.getElementsByTagName("p")[0];

    var pText = paragraph.innerText;

    // console.log(pText);

    // paragraph.innerHTML = pText + "<br><img alt='pixel art' src='img/pixel-art.gif'>";

    // console.log(paragraph);

    var body = document.getElementsByTagName("body")[0];

    // body.innerHTML = "<h1>Victor made me break the Page</h1>";

    // var img = document.getElementsByTagName("img")[0];
    //
    // console.log(img.hasAttribute("class"));
    //
    // if (!img.hasAttribute("class")) {
    //     img.setAttribute("class", "fancy-gif billboard nice-scenery");
    // }
    //
    // img.removeAttribute("class");

    console.log(img.hasAttribute("class"));

    document.getElementById("login-btn").addEventListener("click", function(e) {
        e.preventDefault();
        var username = document.forms.login.username.value;
        var password = document.forms.login.password.value;
        alert("Username: " + username +"\nPassword: " + password);
    });

})();