const container = document.getElementById('container');
const text = document.getElementById('text');


const totalTime = 7500;
const breathTime  = (totalTime/5*2)
const holdTime = totalTime / 5;

function breathAnimation() {
    text.innerText = 'Breathe in - puraka!';
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Kumbhaka!';
        setTimeout(() => {
            text.innerText = 'Breathe out - rechaka!';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime);
}

setInterval(breathAnimation, totalTime);