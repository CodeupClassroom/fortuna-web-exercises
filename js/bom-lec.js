"use strict";

(function() {



    document.getElementsByTagName("button")[0].addEventListener("click", function() { // We'll talk about this line of code tomorrow.
        window.location = "https://developer.mozilla.org/en-US/docs/Web/API/Window/location";
    });

    setInterval(function() {
        alert("You've been looking at your tax information for too long...");
        location.reload(true);
    }, 60000);

})();