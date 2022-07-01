let characters = ["Steve", "Nancy", "Robin", "Will", "Mike", "Joyce"];

function mainCharacter(){
    return characters[Math.floor(Math.random()*characters.length)];
    
}

characterChosen = mainCharacter()
console.log(characterChosen)

srci="images/"+characterChosen+".png"
console.log(srci)

document.querySelector('img').src = srci

document.querySelector('h1').innerText = `Your Random Character is ${characterChosen}`
