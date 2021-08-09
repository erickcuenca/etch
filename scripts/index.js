const canvas = document.querySelector("#canvas");
const resetbutton = document.querySelector("#reset");

function generateCanvas() {
    for(i = 0; i < 1024 ; i++){
        const block = document.createElement("div");
        canvas.appendChild(block);
    }
};

generateCanvas();

//painting each individual block
const allblocks = canvas.querySelectorAll("div");
allblocks.forEach(function(element) {
    element.addEventListener("pointerover", function() {
        element.setAttribute("style", "background-color: black;");
    });
});

//reset canvas
resetbutton.onclick = function() {
    allblocks.forEach(function(element) {
        element.setAttribute("style", "background-color: white;");
    });
};
