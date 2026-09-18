function changeColor () {
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value; 
    
    if (r == "") {
        r = 0
    }
    if (g == "") {
        g = 0
    }
    if (b == "") {
        b = 0
    }

    let textToChange = document.getElementById("text_to_change");

    if (textToChange) {
        textToChange.style.color = `rgb(${r}, ${g}, ${b})`;
        textToChange.style.borderColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function change_border_width () {
    let border_width = document.getElementById("border_width").value;

    if (border_width == "") {
        border_width = 0
    }

    let textToChange = document.getElementById("text_to_change");

    if (textToChange) {
        textToChange.style.borderWidth = border_width + "px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const r_input = document.getElementById("r");
    const g_input = document.getElementById("g");
    const b_input = document.getElementById("b");

    const bw_input = document.getElementById("border_width");

    if (r_input) {
        r_input.addEventListener("input", changeColor);
    }
    if (g_input) {
        g_input.addEventListener("input", changeColor);
    }
    if (b_input) {
        b_input.addEventListener("input", changeColor);
    }

    if (bw_input) {
        bw_input.addEventListener("input", change_border_width)
    }
})
