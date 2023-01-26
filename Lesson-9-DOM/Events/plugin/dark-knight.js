/**
 * DARK-KNIGHT PLUGIN
 * This is a vanilla javascript plugin
 * that sets the mode of your website.
 * 
 * License: MIT
 */

function initialiseMode(config={}){
    
    const DAY ='Day'
    const NIGHT ='Night'
    const LIGHT = 'white'
    const DARK = 'black'
    const body = document.querySelector('body')
    const btn = document.createElement('button')

    btn.innerText = NIGHT
    detectTimeMode('load',body, btn, 12, DARK,LIGHT, DAY)
   
    activateMode(btn, NIGHT, DAY, 'click', body, DARK, LIGHT)
    body.appendChild(btn)

    // Styling BTN

    btn.style.position = config.position || 'fixed'
    btn.style.top = config.positionTop || '90vh'
    btn.style.right = config.positionRight || '2vh'
    btn.style.border = config.borderThickness || 'none'
    btn.style.borderRadius =config.borderRadius || '25px'
    btn.style.width =config.width || '50px'
    btn.style.height =config.height || '50px'
    btn.style.background = config.background || 'pink'
    btn.style.appearance ='none' 
    btn.style.color = config.color || 'black'

}


function activateMode(btn,nmode, dmode, evt, body,ncolor, dcolor){
    btn.addEventListener(evt, function(){
        if(this.innerText == nmode){
            this.innerText = dmode
            body.style.background = ncolor
            body.style.color = dcolor
        }else{
            this.innerText = nmode
            body.style.background = dcolor
            body.style.color = ncolor

        }

    })
}



function detectTimeMode(evt,body, btn, time, ncolor, dcolor, dmode){
    const timeOfDay = new Date().getHours()
    addEventListener(evt, function(){
        if(timeOfDay > time){
            body.style.background = ncolor
            body.style.color = dcolor
            btn.innerText = dmode
        }
    })
}



// initialiseMode()