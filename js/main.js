let characters = ["Steve", "Nancy", "Robin", "Will", "Mike", "Joyce", "Barb", "Jonathan",
"Yuri", "Fred", "Erica", "Dustin", "Hopper", "Chrissy", "Dr.Owens", "Murray", "Billy", "Eleven", "Max", "Lucas", 
"Bob", "Angela", "Suzie", "Mrs.Wheeler", "Argyle", "Mr.Wheeler", 
"Eddie", "Dr.Brenner", "Dr.Owens", "010", "008", 
"Vickie", "Jason", "Fred", "Victor Creel", "Alexei", "Heather"];
function mainCharacter(){
    characterChosen = characters[Math.floor(Math.random()*characters.length)];
    srci="images/"+characterChosen+".png"
    document.querySelector('img').src = srci
    document.querySelector('h1').innerText = `Your Random Character is ${characterChosen}`
    return characterChosen
}
// console.log(mainCharacter())

function season5(){
    
    let storyArray = ["will be the main character this season. ", "will go missing and start the story. ",
     "wants to investigate but ", 
     "protests against this ",
     ", ",
     ", ",
    "and " ,
    "go off to search for them. ", 
    "will find a clue while ", 
    "solves it. Which leads them to believe that ",
    "killed them. But they figure out that it was actually ", 
    ". ", 
    "and ",
    "will sacrifice themselves to defeat the killer and ",  
    "will cry.But at the end we find out that ", 
    "was responsible for these deaths and they get arrested. Ultimately ",
    "was the most heroic character. "]
  
    let newArray = storyArray.map(x=> `${mainCharacter()} ${x}`)
    console.log(newArray)
    return newArray
    
    
}
seasonfive=season5()
document.querySelector('p').innerText = seasonfive.join(" ")

