

document.addEventListener("DOMContentLoaded", ()=>{
    createBoard();

})
const cardArray=[{
    name: "baby",
    img: "images/baby.jpg"
},
{
    name: "box",
    img: "images/box.png"
},
{
    name: "boy",
    img: "images/boy.jpg"
},
{
    name: "fox",
    img: "images/fox.jpg"
},
{
    name: "angry",
    img: "images/ngry.jpg"
},
{
    name: "parrot",
    img: "images/parrot.jpg"
},{
    name: "baby",
    img: "images/baby.jpg"
},
{
    name: "box",
    img: "images/box.png"
},
{
    name: "boy",
    img: "images/boy.jpg"
},
{
    name: "fox",
    img: "images/fox.jpg"
},
{
    name: "angry",
    img: "images/ngry.jpg"
},
{
    name: "parrot",
    img: "images/parrot.jpg"
}
]

cardArray.sort(()=> 0.5 - Math.random());

const grid= document.querySelector(".grid");
function createBoard(){
    for(let i=0; i< cardArray.length; i++){
        var card= document.createElement("img");
        card.setAttribute("src","images/print.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipcard);
        grid.appendChild(card);
    }
}

var cardsChosen= [];
var cardsChosenId= [];
var cardsWon= [];
var result= document.querySelector("#result");

function flipcard(){
    var cardId= this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if(cardsChosen.length===2){
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch(){
    var cards= document.querySelectorAll("img");
    const optionIdOne= cardsChosenId[0];
    const optionIdTwo= cardsChosenId[1];
    if(cardsChosen[0]=== cardsChosen[1]){
        alert("Match found!!")
        cards[optionIdOne].setAttribute("src", "images/white.jpg");
        cards[optionIdTwo].setAttribute("src", "images/white.jpg");
        cardsWon.push(cardsChosen);
    }else{
        cards[optionIdOne].setAttribute("src", "images/print.jpg");
        cards[optionIdTwo].setAttribute("src", "images/print.jpg");
        alert("Try again!!")
    }
    cardsChosen=[]
    cardsChosenId=[]
    result.textContent= cardsWon.length
    if(cardsWon.length=== cardArray.length/2){
        result.textContent= "Congratulations, completed!"
        location.reload();
    }
}