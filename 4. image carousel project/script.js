const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const leftbn = document.getElementById("left");
const rightbn = document.getElementById("right");

let index = 0;
let interval = setInterval(run,4000);
function run() {
    index++;
    console.log(index);
    changeImage();
}

function changeImage() {
    if(index > img.length - 1)
        index = 0;
    else if (index < 0)
        index = img.length - 1;
    
    imgs.style.transform = `translate(${-index * 500}px)`;
}

leftbn.addEventListener("click", () => {
    index--;
    changeImage();
    resetInterval();
});

rightbn.addEventListener("click", () => {
    index++;
    changeImage();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run,2000);
    console.log(index);
}
