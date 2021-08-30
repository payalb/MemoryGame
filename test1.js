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
var count=0;

function flipcard(){
    var cardId= this.getAttribute("data-id");
    console.log(cardArray[cardId].name+" is name")
    cardsChosen.push(cardArray[cardId])
    cardsChosenId.push(cardId);
    console.log(this.src+"******thos")
    this.setAttribute("src", cardArray[cardId].img);
    count++;
    console.log(count+"***********count")
    console.log(cardId+ "**************cardid");
    if(count % 2 == 0 && count != 0){
       console.log(cardsChosen[count-1].name)
       console.log(cardsChosen[count-2].name)
        if(cardsChosen[count-1].name !== cardsChosen[count-2].name){
            console.log("in if")
          var cardname1= cardsChosen.pop().name; 
          var cardname2= cardsChosen.pop().name;
          var imgArr= document.querySelectorAll('img')
       //   imgArr[cardsChosenId-1].src="images/print/jpg"
         // imgArr[cardsChosenId-2].src="images/print/jpg"
         // document.getElementsByTagName("img")[count-1].src="images/print.jpg"
           //document.getElementsByTagName("img")[count-1].src="images/print.jpg"
        }   
    }
}