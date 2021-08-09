const canvas = document.querySelector("#canvas");
const resetbutton = document.querySelector("#reset");

function generateCanvas() {
    for(i = 0; i < 1024 ; i++){
        const block = document.createElement("div");
        canvas.appendChild(block);
    }
};

generateCanvas();

const allblocks = canvas.querySelectorAll("div");

//painting each individual block
allblocks.forEach(function(element) {
    element.addEventListener("pointerover", function() {
        element.setAttribute("style", "background-color: black;");
    });
});

//reset canvas
resetbutton.addEventListener("mousedown", () => {
    allblocks.forEach(function(element) {
        element.setAttribute("style", "background-color: white;");
    });
});

//detect if device is touchscreen
if ("ontouchstart" in document.documentElement) {
    alert("Touchscreens are not supported, please use a desktop browser.");
}
