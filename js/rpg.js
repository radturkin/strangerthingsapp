let obj={"Eleven":{
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  }}
var x
function changeResult() {
    x = document.getElementById("char-select").value;
    document.getElementById("result").innerHTML = "You selected: " + x;
    console.log(obj["Eleven"])
    if (x==="Eleven"){
        console.log("Its going to be okay")
    }
    let char=x
    return char
  }
x=changeResult()
console.log("yourecharacter "+x)


document.getElementById('enterStory').addEventListener('click', enterGame(x))

function enterGame(x){
    console.log("hi "+x)

}
//create character objects
//random sticky character
//create battle function that takes in two objects character,and villain
//adjust object values
//return object
//other functions 
