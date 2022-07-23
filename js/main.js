let characters = ["Steve", "Nancy", "Robin", "Will", "Mike", "Joyce", "Barb", "Jonathan",
"Yuri", "Fred", "Erica", "Dustin", "Hopper", "Chrissy", "Dr.Owens", "Murray", "Billy", "Eleven", "Max", "Lucas", 
"Bob", "Angela", "Suzie", "Mrs.Wheeler", "Argyle", "Mr.Wheeler", 
"Eddie", "Dr.Brenner", "Dr.Owens", "010", "008", 
"Vickie", "Jason", "Fred", "Victor Creel", "Alexei", "Heather"];

function mainCharacter(){
    characterChosen = characters[Math.floor(Math.random()*characters.length)];
    srci="images/"+characterChosen+".png"
    document.querySelector('#mainImage').src = srci
    document.querySelector('h1').innerText = `Your Random Character is ${characterChosen}`
    return characterChosen
}

function chooser(){

    document.querySelector('button').innerText = "click for your random character"

    document.querySelector('button').addEventListener('click', mainCharacter)

}

let storyArray = ["will be the main character this season. ", "will go missing and start the story. ",
"wants to investigate but ", "protests against this ", ", ", ", ", "and " ,"go off to search for them. ", 
"will find a clue while ", "solves it. Which leads them to believe that ","killed them. But they figure out that it was actually ", 
". ", "and ","will sacrifice themselves to defeat the killer and ",  "will cry.But at the end we find out that ", 
"was responsible for these deaths and they get arrested. Ultimately ","was the most heroic character. "]

function season5(){
    localStorage.setItem("botscore",0)

    //let newArray = storyArray.map(x=> `${mainCharacter()} ${x}`)

    //document.querySelector('p').innerText = newArray.join(" ")

    document.querySelector('button').innerText = "what happens season 5?"

    document.querySelector('button').addEventListener('click', addLine)

    
    // document.querySelector('p').innerText = newArray[botscore]

    // let charImageArray = newArray[botscore].split(" ")

    // charImageArray=charImageArray[0]

    // document.querySelector('img').src = "images/"+charImageArray+".png"




    //return newArray
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

function life(){

let lifelist=[`Your parents: ${mainCharacter()} , and ${mainCharacter()}`,

`\nYour siblings: ${mainCharacter()} and ${mainCharacter()}`,

`\nYour BFF: ${mainCharacter()}`,
`\nYour crush: ${mainCharacter()}`,
`\nYour crush’s crush: ${mainCharacter()}`,
`\nYour idol: ${mainCharacter()}`,
`\nYour Rival: ${mainCharacter()}`,
`\nYour Bully: ${mainCharacter()}`,
`\nFavorite teacher: ${mainCharacter()}`,
`\nPet: ${mainCharacter()}`,
`\nYou are: ${mainCharacter()}`,
`\nWho does your BFF end up with: ${mainCharacter()}`,
`\nWho does yout crush end up with: ${mainCharacter()}`,
`\nWho do you end up with: ${mainCharacter()}`]


document.querySelector('#test').innerText = lifelist



document.querySelector('button').addEventListener('click', addfamily)

function addfamily(){
    let botscore = Number(localStorage.getItem("botscore"))

    let familyarray=[]
    let charChosen= mainCharacter()
    let familysegment = `${charChosen} ${lifelist[botscore]}`

    familyarray.push(familysegment)

    document.querySelector('p').innerText = familyarray
    
    document.querySelector('img').src = "images/"+charChosen+".png"

    botscore +=1
    localStorage.setItem("botscore", botscore)

    if (botscore>=lifelist.length+1){
        document.querySelector('p').innerText = `${charChosen} isn't going to be your mom, select a new game.`

    }

    

}




    document.querySelector('p').innerText = newlife.join(" ")

}
let dict = { "Steve":0, "Nancy":0, "Robin":0, "Will":0, "Mike":0, "Joyce":0, "Barb":0, 
"Yuri":0, "Fred":0, "Erica":0, "Dustin":0, "Hopper":0, "Chrissy":0, "Murray:":0, "Billy":0, 
"Eleven":0, "Max":0, "Lucas":0, "Bob":0, "Angela":0, "Suzie":0, "Mrs. Wheeler":0, "Argyle":0, 
"Mr.Wheeler":0, "Eddie":0, "Dr. Brenner":0, "Dr. Owens":0, 
"010":0, "008":0, "Vickie":0, "Jason":0, "Fred":0, "Victor Creel":0, "Alexei":0, "Heather":0}
function thisthat(){
    let char1=''
    let char2=''
    let charsArray = characters
    char1 = mainCharacter()
    char2 = mainCharacter()
    console.log(char1)
    console.log(char2)
    document.querySelector('button').innerText = "next this or that"
    document.querySelector('button').addEventListener('click', thisthat)
    document.querySelector('#b2').innerText = "tally favorite"
    document.querySelector('#b2').addEventListener('click', function(){tally(dict)})
  

    let char1Image="images/"+char1+".png"
    let char2Image="images/"+char2+".png"
    document.querySelector('#mainImage').src = char1Image
    document.querySelector('#char2').src = char2Image
    console.log(dict)
    console.log(typeof char1)
    let obj1 = document.getElementById("mainImage")
    obj1.onclick = function() {
        console.log(dict[char1])
        dict[char1]+=1
        console.log(dict)
        thisthat()

   
}
    let obj2 = document.getElementById("char2")

    obj2.onclick = function() {
    console.log(dict[char2])
    dict[char2]+=1
    console.log(dict)
    thisthat()

}
    
    // else {
    document.querySelector('p').innerText = "its not nice to play favorites!"
    

    //show images char1 char2
    //clickon Image
    //store  winner
    //push characterout of array
    //next set
    // while charsArray.length > 0
    //return winners in order 1st to last place
  
}

document.getElementById("s5pred").onclick = season5
document.getElementById("mystery").onclick = mystery
document.getElementById("zombie").onclick = zombie
document.getElementById("chooser").onclick = chooser
document.getElementById("life").onclick = life
document.getElementById("thisorthat").onclick = thisthat

function tally(dict){
    let best= Object.keys(dict).reduce(function(a, b){ return dict[a] > dict[b] ? a : b });
    console.log(best)
    const maxValue = Object.entries(dict).sort((x, y) => y[1] - x[1])[0];
    console.log(maxValue)
    document.querySelector('p').innerText = `Your favorite is ${maxValue[0]}`



}

function choice1(char1){
    console.log(dict[char1])
    dict[char1]+=1
    console.log(dict)
    document.querySelector("#mainImage").removeEventListener('click', function(){choice1(char1)})


 
    //document.querySelector("button").addEventListener('click', function(){thisthat})
}
function choice2(char2){
    console.log(dict[char2])
    dict[char2]+=1
    console.log(dict)    
    document.querySelector("#char2").removeEventListener('click', function(){choice2(char2)})


 
    //document.querySelector("button").addEventListener('click', function(){thisthat})
}


document.getElementsByTagName("img").onclick = mainCharacter


//count clicks
if (!localStorage.getItem("botscore")){
    localStorage.setItem("botscore",0)
}


//document.querySelector('button').addEventListener('click', add)

function addLine(){
    let botscore = Number(localStorage.getItem("botscore"))

    let charChosen= mainCharacter()

    // if(botscore>0){
    //     document.querySelector('p').innerText = `${charChosen} ${storyArray[botscore-1]}`

    // }
    document.querySelector('p').innerText = `${charChosen} ${storyArray[botscore]}`
    
    document.querySelector('img').src = "images/"+charChosen+".png"

    botscore +=1
    localStorage.setItem("botscore", botscore)

    if (botscore>=storyArray.length+1){
        document.querySelector('p').innerText = `Don't be such a ${charChosen}, select a new game.`

    }

    

}
