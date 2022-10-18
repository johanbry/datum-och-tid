
function formatTime(time){
    return ('0' + time).slice(-2); 
}

let watchTimer = setInterval(function(){
    const date = new Date();
    document.getElementById('watch').innerHTML = `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}:${formatTime(date.getSeconds())}`;
}, 1000);