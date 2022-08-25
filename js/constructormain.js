
class Game{
    constructor(storyArray, buttonText, alertText){
        this.storyArray=storyArray;
        this.buttonText=buttonText;
        this.alertText=alertText;
        localStorage.setItem("botscore",0)
        document.querySelector('button').innerText = this.buttonText
        document.querySelector('button').addEventListener('click', addLine)
    }
    addline(){
        let botscore = Number(localStorage.getItem("botscore"))
        let charChosen= mainCharacter()
        let paragraphLine=`${charChosen} ${this.storyArray[botscore]}`
        let para = paragraph.concat(" ", paragraphLine);
        paragraph=para
        document.querySelector('p').innerText = String(paragraph)
        document.querySelector('img').src = "images/"+charChosen+".png"
        botscore +=1
        localStorage.setItem("botscore", botscore)
        //varied
        if (botscore>=storyArray.length+1){
            document.querySelector('p').innerText = this.alertText

    }
}

// function addLine(){

//     //same
//     let botscore = Number(localStorage.getItem("botscore"))
//     //same
//     let charChosen= mainCharacter()
//     //varied?
//     let paragraphLine=`${charChosen} ${storyArray[botscore]}`
//     let para = paragraph.concat(" ", paragraphLine);
//     paragraph=para
//     document.querySelector('p').innerText = String(paragraph)
//     //same
//     document.querySelector('img').src = "images/"+charChosen+".png"
//     //same
//     botscore +=1
//     localStorage.setItem("botscore", botscore)
//     //varied
//     if (botscore>=storyArray.length+1){
//         document.querySelector('p').innerText = `Don't be such a ${charChosen}, select a new game.`

//     }
}

    let storyArray = ["will be the main character this season. ", "will go missing and start the story. ",
"wants to investigate but ", "protests against this ", ", ", ", ", "and " ,"go off to search for them. ", 
"will find a clue while ", "solves it. Which leads them to believe that ","killed them. But they figure out that it was actually ", 
". ", "and ","will sacrifice themselves to defeat the killer and ",  "will cry.But at the end we find out that ", 
"was responsible for these deaths and they get arrested. Ultimately ","was the most heroic character. "]

function season5(){
    localStorage.setItem("botscore",0)
    //varied
    document.querySelector('button').innerText = "what happens season 5?"
    //same (method)
    document.querySelector('button').addEventListener('click', addLine)

}
const season5 = new Game(["will be the main character this season. ", "will go missing and start the story. ",
"wants to investigate but ", "protests against this ", ", ", ", ", "and " ,"go off to search for them. ", 
"will find a clue while ", "solves it. Which leads them to believe that ","killed them. But they figure out that it was actually ", 
". ", "and ","will sacrifice themselves to defeat the killer and ",  "will cry.But at the end we find out that ", 
"was responsible for these deaths and they get arrested. Ultimately ","was the most heroic character. "], 
"what happens season 5?", `Don't be such a ${this.charChosen}, select a new game.`)

document.getElementById("s5pred").onclick = season5


//mixins, prototypes,

class LivingThings{
    constructor(livingname, age, strength, agility, IQ, wisdom, speed, health, trust, posChem, NegChem, items, mainAttack, specialAttack)
}