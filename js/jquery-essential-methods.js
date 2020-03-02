"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// Getters and Setters

// Getter for text of logo color
function getColorText() {
    // will return a string, inside the #colorText span
    return $('#colorText').html();
}

// Setter for text of logo color
function setColorText(color) {
    // will set the text to the passed in color, and also change its CSS color
    return $('#colorText').css('color', color.toLowerCase()).html(color);
}

// Getter for section color
function getSectionColor(section) {
    return $(section).attr('class');
}

// Setter for the section color
function changeSectionColor(color, section) {

    if (section === "all") {   // change all sections if 'all' is passed in
        // check for current color, and remove it
        // var section = $('.codeup-logo > path').attr('id');
        // $('.codeup-logo > path').removeClass(getSectionColor(section));
        resetColor();

        return $('.codeup-logo > path').addClass(color);
    } else {   // if a color is passed in, add the appropriate css class
        $(section).removeClass(getSectionColor(section));
        return $(section).addClass(color);
    }
}

// reset all elements to default
function resetColor() {
    $('.codeup-logo > path').removeClass(function () {
        return $(this).attr('class');
    });
    $('#colorText').removeClass(function () {
        return $(this).attr('class');
    });
    $(document).html('Green');
}

// change the logo to rainbow
function rainbowLogo() {
    var text = 'rainbow';
    var logoSections = ['#path1', '#path2', '#path3', '#path4', '#path5', '#path6'];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var counter = 0;

    logoSections.forEach(function (section) {
        changeSectionColor(colors[counter], section);
        // $(section).addClass(colors[counter]);
        counter++;
    });
    // split up 'RAINBOW' and make it different colors
    var colorfulText = [];
    var i = 0;
    var counter = 0;
    text.split('').forEach(function (letter) {
        colorfulText[i] = '<span class="' + colors[counter] + '">' + letter + '</span>';
        if( counter === 5 ) {
            counter = 0; // reset so we start our colors over again
        }
        counter++; i++;
    });
    text = colorfulText.join(' ');
    console.log(text);
    $('#colorText').html(text);
}
var circleClickCount = 0;
var circleButton = $('.circle').click(function () {
    // change color of logo paths

    var clickedColor = $(this).attr('id');

    circleClickCount++;

    if(clickedColor === 'rainbow') {
        console.log('rainbow');
        // var section = $('.codeup-logo > path').attr('id');
        // $('.codeup-logo > path').removeClass(getSectionColor(section));
        resetColor();
        rainbowLogo();
    } else {
        console.log(clickedColor);
        // change color text, text color, and path colors
        setColorText(clickedColor);
        changeSectionColor(clickedColor, 'all');
    }

    // If we've clicked the same circle twice, let's UPPERCASE it
    if( $('.codeup-logo').attr('id') === clickedColor ) {
        // the circle is already this color, so let's emphasize by underlining the color text
        $('#colorText').toggleClass('caps', circleClickCount %2 !== 0);

        console.log("they're the same");
    } else {
        circleClickCount = 0;
    }
    console.log(circleClickCount);
    $('.codeup-logo').attr('id', clickedColor);
});