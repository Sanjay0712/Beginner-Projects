const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => fillSmallCups(index));
});

function fillSmallCups(index) {
  if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full') ){
    index--;
  }
  
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  
  updateBigCup();
}

function updateBigCup() {
  const filledCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  if(filledCups === 0){
    percentage.style.height = 0;
    percentage.style.visibility = "hidden";
  } else {
    percentage.style.visibility = 'visible';
percentage.style.height = `${filledCups/totalCups * 330}px`;
percentage.innerText = `${filledCups/ totalCups * 100}%`
  }
  
  if(filledCups === totalCups){
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${4 - (0.5 * filledCups)}L`
  }
  
}
