// This is data of questions and answers
const questionsAndAnswers = [
    {
        question:'What is the independence year of the United States of America?',
        options:[1967,1800,1642,1776],
        answer: '1776',
        duration: 5000,
        mark:20,
        
    },
    {
        question:'What is the longest river in the South Africa?',
        options:['Breeriver', 'Tugela River', 'Limpopo River', 'Orange River'],
        answer:'Orange River',
        duration: 10000,
        mark:12,
    },
    {
        question:'Who was the greatest boxer in the 18th Century?',
        options:['Tom Molineaux', 'Joe Louis', 'James Figg', 'Mohammed Ali'],
        answer:'Joe Louis',
        duration: 6000,
        mark:15
    },

    {
        question:'What is the most dangerous animal in the World?',
        options:['Lion', 'Grizzly Bear','Mosquito','Nile Crocodile'],
        answer:'Mosquito',
        duration: 8000,
        mark:22
    },

    {
        question:'Who was the most dangerous woman in the 19th Century?',
        options:['Mary Ann','Ella Knoweles','Mary Jones','Belle Starr'],
        answer:'Mary Ann',
        duration: 5000,
        mark:14

    }
]

let totalScore = 0;
const displayedScoreboard = document.createElement('h2');

let totalDuration = 0;
let timerDisplayBoard = document.createElement('h4');


for (let i = 0; i <questionsAndAnswers.length; i++) {
    totalDuration += questionsAndAnswers[i].duration/1000;
    // totalDuration =  totalDuration/questionsAndAnswers.length
}


// Run timer and display timer
let id = setInterval(function(){
    totalDuration = totalDuration-1
    timerDisplayBoard.innerText = `Timer: ${totalDuration} seconds`
    console.log(totalDuration)

    if(totalDuration == 0){
            clearInterval(id)
        }
}, 1000)




//selecting the body
const body = document.querySelector('body');  
displayedScoreboard.innerText = `Total Score: ${totalScore}`
body.append(displayedScoreboard)
body.append(timerDisplayBoard)


//creating the set of questions and answers div
const setOfQnADiv = document.createElement('div') 


for (let i = 0; i < questionsAndAnswers.length; i++){
    // Creating the question and answer div
    const qnaDiv = document.createElement('div')

  
    // Creating the question element(h3) on the fly
    let h3 = document.createElement('h3');
    h3.innerText = questionsAndAnswers[i].question
    h3.setAttribute('class', 'question');

    let result = document.createElement('span');

    qnaDiv.appendChild(h3)

    // Animate Question Display: this indicates how long it takes to disappear
    setTimeout(function(){
        qnaDiv.style.display = 'none';
    }, questionsAndAnswers[i].duration * (i+1));


    for (let j = 0; j < questionsAndAnswers[i].options.length; j++){
        // creating the option element (radio button) on the fly
        let optionInput = document.createElement('input');
        optionInput.setAttribute('type','radio')
        optionInput.setAttribute('name', `option-${i}`)
        optionInput.setAttribute('value', questionsAndAnswers[i].options[j])
        optionInput.setAttribute('class',`option-${i}`)

        let label = document.createElement('label')
        label.innerText = questionsAndAnswers[i].options[j]
        label.prepend(optionInput)
        
        // Attaching a change event to each radio input element
        optionInput.addEventListener('change',function(e){
            let cnodes = optionInput.parentElement.parentElement.children //array of nodes
            for (let s = 0; s < cnodes.length; s++){
                if(cnodes[s].childElementCount > 0){
                    cnodes[s].childNodes[0].setAttribute('disabled',true)
                }
            }

            // Checking user answer and returning result
            let userAnswer = e.target.value
            if(questionsAndAnswers[i].answer == userAnswer){  
                totalScore += questionsAndAnswers[i].mark
                result.innerText = 'Correct!'
        
             }else{        
                result.innerText = 'Wrong!'
             }
             h3.append(result)
        
             displayedScoreboard.innerText = `Total Score: ${totalScore}`
        })      
        qnaDiv.appendChild(label)
    } 
    setOfQnADiv.appendChild(qnaDiv)
    
}

body.appendChild(setOfQnADiv)

