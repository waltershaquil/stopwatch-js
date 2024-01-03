var sec=0;
var min=0;
var hr =0;
var intervalo;
function start(){
    // a funcao setinterval, leva uma funcao x e tempo t em ms, a funcao x e executada a cada t;
    ticktock();
    intervalo = setInterval(ticktock, 1000);
}

function ticktock(){
    // sempre que a funcao e executada aumentamos uma vez o segundo,
    sec++;
    document.getElementById("watch").innerText=hr + ':' + min + ':' + sec;
    if (sec==60){
        min ++;
        sec=0;

        if(min==60){
            min=0;
            hr++;
        }
        document.getElementById('watch').innerText='00:00:00';
    }
}

function pause(){
    clearInterval(intervalo);
}

function stop(){
    clearInterval(intervalo);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById('watch').innerText='00:00:00';

}