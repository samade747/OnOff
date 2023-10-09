let isBulbOn = false;

function toggle(){
    const imgElement = document.getElementById('img');
    const imgElement1 = document.getElementById('bb');

    if (isBulbOn){
        imgElement.src = "./images/off.jpeg";
    } else {
        imgElement.src = "./images/on.jpeg";
        imgElement.style.backgroundColor = 'yellow';
    }
isBulbOn = !isBulbOn;

}







// function bulbOn() {
//     document.getElementById('img').src = "./images/on.jpeg"
    

// }

// function bulbOff(){
//     document.getElementById('img').src = "./images/off.jpeg"
    
// }