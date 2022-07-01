let characters = ["Steve", "Nancy", "Robin", "Will", "Mike", "Joyce", "Barb",
"Yuri", "Fred", "Erica", "Dustin", "Hopper", "Chrissy", "Dr.Owens", "Murray", "Billy", "Eleven", "Max", "Lucas", 
"Bob", "Angela", "Suzie", "Mrs.Wheeler", "Argyle", "Mr.Wheeler", 
"Eddie", "Dr.Brenner", "Dr.Owens", "010", "008", 
"Vickie", "Jason", "Fred", "Victor Creel", "Alexei", "Heather"];
function mainCharacter(){
    return characters[Math.floor(Math.random()*characters.length)];
    
}

characterChosen = mainCharacter()
console.log(characterChosen)

srci="images/"+characterChosen+".png"
console.log(srci)

document.querySelector('img').src = srci

document.querySelector('h1').innerText = `Your Random Character is ${characterChosen}`
