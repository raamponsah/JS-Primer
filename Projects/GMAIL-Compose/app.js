function createComposeButton(){
    const composeButton = document.createElement('button')
    composeButton.innerText = 'Compose'
    composeButton.style.appearance = 'none'
    composeButton.style.padding ='10px 15px'
    composeButton.style.border = 'none'
    composeButton.style.borderRadius = '15px'
    composeButton.style.backgroundColor = 'pink'
    composeButton.style.cursor = 'pointer'
    composeButton.onclick = runComposeButton
    return composeButton;
}

function runComposeButton(){
        compose()
        updateNextPosition()
}

// Utilities
function closeComposeButton(){
    const x = document.createElement('span')
    x.innerText = 'X'
    x.style.position = 'absolute'
    x.style.right ='10px'
    x.style.top ='15px'
    return x
}


function updateNextPosition(){
    let textareas = document.getElementsByTagName('textarea')
    console.log(textareas)
    if(textareas.length > 1){
        textareas[textareas.length - 1].style.right = '90vh'
    }
}


function compose(){
    let textarea = document.createElement('div');
    textarea.setAttribute('contentEditable', 'true');
    textarea.style.width = '70vh';
    textarea.style.height = '60vh';
    textarea.style.border = '1px solid #999';
    textarea.style.position = 'absolute';
    textarea.style.borderTopLeftRadius = '10px'
    textarea.style.borderTopRightRadius = '10px'
    textarea.style.zIndex = '9999'
    textarea.style.bottom = 0;
    textarea.style.right = '5vh';

    textarea.append(closeComposeButton())


    attachElement(textarea)
}


function attachElement(element){
    const body = document.querySelector('body');
    body.appendChild(element);
}


function init(){
    attachElement(createComposeButton());
}

init()