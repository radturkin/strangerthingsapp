let charobj={"Eleven":{
    "strength": 9,
    "agility": 6,
    "speed": 5,
    "health": 125,
    "attack":{"air bullying": 15, "roadkill":30},
    "special": {"nina project": 100}
  }
}

let villainobj = {"001":{
  "strength": 10,
  "agility": 4,
  "speed": 5,
  "health": 200,
  "attack":{a:30,b:50},
  "special":{"freeze":100}
  }
}
var x
function changeResult() {
    x = document.getElementById("char-select").value;
    document.getElementById("result").innerHTML = "You selected: " + x;
    console.log(charobj["Eleven"])
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

console.log(charobj)
console.log(villainobj)

//adjust to be total strength as variable for attack times handicap
function d20(){
  roll=Math.ceil(Math.random()*20)
  return roll
}
let attack=d20()

console.log(attack)
