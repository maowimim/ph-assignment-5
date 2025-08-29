let heartCounter = document.getElementById("heartC")
const redHeart = document.querySelectorAll(".fa-heart")
let heartCount = 0;
for (const redHeartLove of redHeart) {
redHeartLove.addEventListener("click", function () {

heartCount = heartCount + 1;
heartCounter.innerText = heartCount;

})
}




// add to call functionality
const callButtons = document.querySelectorAll(".phone")
const cards = document.getElementsByClassName("card");
const cardContainer = document.getElementById("cardContainer")
const cointCount = document.getElementById("coinCount")
const copyCounter = document.getElementById("copyCounter")
let coinCounter = 100;
let copyCounters = 0;

console.log(cardContainer)
for (const callButton of callButtons) {
// console.log(callButton)
callButton.addEventListener("click", function (e) {
const buttonContainer = callButton.parentElement;
const card = buttonContainer.parentElement;
const serviceName = card.children[1].innerText
const service = card.children[2].innerText

if( coinCounter === 0 ){
alert("You have insufficient Coin");
return
}
const phoneNumber = card.children[3].innerText
console.log(serviceName, phoneNumber)
const newDivElement = document.createElement("div")
// mx-auto mt-5 w-[350px] h-[85px] bg-[#FFE3E2] flex justify-between items-center p-2"
newDivElement.innerHTML = `
<div class="mx-auto mt-5 w-[350px] h-[85px] bg-[#FFE3E2] flex justify-between items-center p-2">
<div>
<h1 class="font-bold">${serviceName}</h1>
<h5>${phoneNumber}</h5>
</div>
<div>
<p>${new Date().toLocaleDateString()}</p>
</div>
</div>

`
cardContainer.appendChild(newDivElement)


coinCounter = coinCounter - 20;
cointCount.innerText = coinCounter;


alert(`
"calling.." ${service} ${phoneNumber}
`)
})
}

// copy count functionality
function copyHandler(number){
console.log(number)
navigator.clipboard.writeText(number)
alert(`Successfully copied: ${number}`)
copyCounters++;
copyCounter.innerText = copyCounters
}


function clearHandler(){
while(cardContainer.firstChild){
cardContainer.removeChild(cardContainer.firstChild) }

}

const langEnglishTitle = document.querySelector(".langEnglishTitle")
const langBanglaTitle = document.querySelector(".langBanglaTitle")

// language system
function translateHandler(e){
const langValue = document.getElementById("lang").value
// console.log(e.terget.lang.value)
console.log(langValue)
if(langValue === "Bangla"){
langBanglaTitle.classList.remove("hidden")
langEnglishTitle.classList.add("hidden")
}
else{
langBanglaTitle.classList.add("hidden")
langEnglishTitle.classList.remove("hidden")
}

}