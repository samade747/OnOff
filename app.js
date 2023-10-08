const Onbutton = document.getElementById('on');
const Offbutton = document.getElementById('off');



const bulb = document.getElementById('Bulb');



console.log(bulb, 'Bulb')

function on(){
    bulb.src = './image/bulb on.png'

}

function off(){
    bulb.src = './image/bulb off.png'

}