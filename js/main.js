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

function season5(){
    
    let storyArray = ["will be the main character this season. ", "will go missing and start the story. ",
     "wants to investigate but ", "protests against this ", ", ", ", ", "and " ,"go off to search for them. ", 
    "will find a clue while ", "solves it. Which leads them to believe that ","killed them. But they figure out that it was actually ", 
    ". ", "and ","will sacrifice themselves to defeat the killer and ",  "will cry.But at the end we find out that ", 
    "was responsible for these deaths and they get arrested. Ultimately ","was the most heroic character. "]
  
    let newArray = storyArray.map(x=> `${mainCharacter()} ${x}`)

    document.querySelector('p').innerText = newArray.join(" ")

    return newArray
}

function mystery(){
    let lineup = ["dies.", "finds the body.", "is the most sad.", "is the lead detective.", 
    "is the first suspect.",
    "is their alibi.", ", ", ", and ", "are the final three suspects.", "is arrested.", 
    "was the killer.", "was the accomplice."]
    let newArray = lineup.map(x=> `${mainCharacter()} ${x}`)
    console.log(newArray)

    document.querySelector('p').innerText = newArray.join(" ")

    return newArray
}

function zombie(){
    let zombieArray = ["will become a zombie but we don’t know why. " ,  
    "will discover the zombie and be so shocked that they call the police but it’s too late the zombie broke out and bit ",
    ", ", "and, ", ". The three of them become zombies and terrorize the town. ", ", ", ", ", ", ", ", ", "and ",
    " ,are the main group. And they are locked in an abandoned warehouse with ",", who became a zombie. ", ", kills the zombie. They find ",
    ",  A scientist with the cure but it is stuck back at his lab ",
    "helps them sneak out but dies. While ", "and ", "sacrifice themselves for the greater good. " ,
    "eventually finds the cure. But then we realize that it was ",
    "the doctor who caused the infection. And they are not happy the group found a cure so they kill ", "and ",
    ". But overall ",
    "kills the corrupt doctor and everyone lives happy ever after(Or do they?)"]
    let newzombie = zombieArray.map(x=> `${mainCharacter()} ${x}`)
    console.log(newzombie)

    document.querySelector('p').innerText = newzombie.join(" ")

    return newzombie
}

// let buttonHome = document.querySelector("#s5pred");
// let CountButtonHomeClicks = 0;
// let char = []
// buttonHome.addEventListener("click", function() {
//   CountButtonHomeClicks += 1;
//   console.log(CountButtonHomeClicks);
//   char=newArray[CountButtonHomeClicks];
//   char=char.split(" ");
//   guy=char[0];
//     srci="images/"+guy+".png"
//     document.querySelector('img').src = srci
//     document.querySelector('h1').innerText = `Your Random Character is ${guy}`

//   document.querySelector('p').innerText = newArray[CountButtonHomeClicks]
//   return CountButtonHomeClicks
// });
document.getElementById("s5pred").onclick = season5
document.getElementById("mystery").onclick = mystery
document.getElementById("zombie").onclick = zombie
document.getElementById("chooser").onclick = mainCharacter


document.getElementsByTagName("img").onclick = mainCharacter