$(document).ready(function () {
    var types = "This is my portfollio have a look!";

    function typeName(types, iteration) {
        // Prevent our code executing if there are no letters left
        if (iteration === types.length)
            return;

        setTimeout(function () {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable
            $('.types').text($('.types').text() + types[iteration++]);

            // Re-trigger our function
            typeName(types, iteration);
        }, 200);
    }

    // Call the function to begin the typing process
    typeName(types, 0);
});
$(document).ready(function () {
    var types3 = "Some Design Work";

    function typeName(types3, iteration) {
        // Prevent our code executing if there are no letters left
        if (iteration === types3.length)
            return;

        setTimeout(function () {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable
            $('.types3').text($('.types3').text() + types3[iteration++]);

            // Re-trigger our function
            typeName(types3, iteration);
        }, 200);
    }

    // Call the function to begin the typing process
    typeName(types3, 0);
});
$(document).ready(function () {
    var types4 = "Some Illustrations";

    function typeName(types4, iteration) {
        // Prevent our code executing if there are no letters left
        if (iteration === types4.length)
            return;

        setTimeout(function () {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable
            $('.types4').text($('.types4').text() + types4[iteration++]);

            // Re-trigger our function
            typeName(types4, iteration);
        }, 200);
    }

    // Call the function to begin the typing process
    typeName(types4, 0);
});
$(document).ready(function () {
    var types5 = "Some Programming";

    function typeName(types5, iteration) {
        // Prevent our code executing if there are no letters left
        if (iteration === types5.length)
            return;

        setTimeout(function () {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable
            $('.types5').text($('.types5').text() + types5[iteration++]);

            // Re-trigger our function
            typeName(types5, iteration);
        }, 200);
    }

    // Call the function to begin the typing process
    typeName(types5, 0);
});
$(document).ready(function () {
    document.getElementById("myP").style.fontSize = "xx-large";
    var types2 = "Some Photography";

    function typeName(types2, iteration) {
        // Prevent our code executing if there are no letters left
        if (iteration === types2.length)
            return;

        setTimeout(function () {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable
            $('.types2').text($('.types2').text() + types2[iteration++]);

            // Re-trigger our function
            typeName(types2, iteration);
        }, 200);
    }

    // Call the function to begin the typing process
    typeName(types2, 0);
});


const boxesAnimation = window.anime({
    targets: '.js-box',
    translateY: [150, 50],
    backgroundColor: (el, i, t) => {
        const r = 0 + (i * 15);
        const g = 35 + (i * 12);
        const b = 220;
        const color = `rgb(${r}, ${g}, ${b})`;
        return color;

    },

    duration: 1000,
    easing: 'easeOutElastic',
    elasticity: 50,
    delay: (el, i, t) => i * 20,
    loop: true,
    direction: 'alternate',
});
anime({
    scale: {
        value: 2,
        transition: 'linear',
        duration: 500,
    },
    opacity: 1,
    height: [0, 100],
    transition: 'easeInOutSine',
    duration: 500,
});

function myFunction() {

    document.getElementById("click").innerHTML = "That means pictures!";

}
function myFunction1() {

    document.getElementById("click1").innerHTML = "Digital and traditional!!";

}
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};


$(document).ready(function () {
    $('#tab_header ul li.item').on('click', function () {
        var number = $(this).data('option');
        $('#tab_header ul li.item').removeClass('is-active');
        $(this).addClass('is-active');
        $('#tab_container .container_item').removeClass('is-active');
        $('div[data-item="' + number + '"]').addClass('is-active');
    });
});



$("#showModal").click(function () {
    $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
    $(".modal").removeClass("is-active");
});







