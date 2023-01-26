/**
 * DARK-KNIGHT PLUGIN
 * This is a vanilla javascript plugin
 * that sets the mode of your website.
 */

function initialiseMode(){
    
    const DAY ='Day'
    const NIGHT ='Night'
    const LIGHT = 'white'
    const DARK = 'black'
    const body = document.querySelector('body')
    const btn = document.createElement('button')

    btn.innerText = NIGHT

    // Styling btn
    btn.style.position = 'absolute'



    detectTimeMode('load',body, btn, 12, DARK,LIGHT, DAY)
   
    activateMode(btn, NIGHT, DAY, 'click', body, DARK, LIGHT)
    body.appendChild(btn)

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
    addEventListener(evt, function(){
    const timeOfDay = new Date().getHours()
        if(timeOfDay > time){
            body.style.background = ncolor
            body.style.color = dcolor
            btn.innerText = dmode
        }
    })
}



initialiseMode()