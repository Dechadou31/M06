console.log("Hola!");
let div = window.document.getElementById("div_text");
div.innerHTML =" Hola <h1>  HTML </h1>";
div.innerText+="Hola <h1> HTML </h1>";
// alert("Popupfeo alert");

//let numero = window.prompt("Indica un numero")
let input_numero = document.getElementById("input_numero")
let numero = input_numero.value

let resultat= document.getElementById("resultat")
resultat.innerText=numero;

function sumaValors(){
    resultat.innerText = input_numero.value;
}
let audio = document.getElementById("audio");
const timer = document.getElementById("timer");
const timer_span=document.getElementById("timer_span");

function playAudio(){
    audio.play();
    timer.max=audio.duration;
    timer_span.max=audio.duration;
    let ref_interval = window.setInterval(function(){
        timer.value = audio.currentTime;
        timer_span.innerText=audio.currentTime;
        if(audio.currentTime== audio.duration){
            window.clearInterval(ref_interval)
        }
    } ,1000)
}
function playAudio2(){
    audio.src="2_5357585167588275292.flac"
    audio.play();

}
function clk_btn_stopAudio(){
    audio.pause()
    audio.currentTime=0;
}
function clk_btn_mute(){
    audio.muted=!audio.muted;
}
function clk_btn_volUp(){
    try {
        audio.volume +=0.2
    } catch (error) {
        audio.volume=1
    }
    document.getElementById("vol").value=audio.volume;
}
function clk_btn_volDwn(){
    try {
        audio.volume -=0.2
    } catch (error) {
        audio.volume=0
    }
    document.getElementById("vol").value=audio.volume;
}
function change_inp_vol() {
    audio.volume= document.getElementById("vol").value;
}
window.setTimeout(
    function(){
        document.getElementById("timer_span").innerText = audio.duration;
    },500
);


let llista = document.getElementById("llista_propietats");
let data = new Date();
llista.innerHTML=`<ol> 
<li>Valor mínim que pot tenir un numero JS: `+Number.MIN_VALUE+` </li> 
<li>Amplada total de la pantalla: `+screen.width+`</li>
<li>Amplada interna de la finestra: `+window.innerWidth+`</li>
<li>Titol de la web: `+document.title+`</li>
<li>Hora actual: `+data.getDate()
                +`/`+ data.getFullYear()
                +`/`+ data.getMonth() + ' - '
                +`/`+ data.getHours()
                +`/`+ data.getMinutes()
                +`/`+ data.getSeconds()+
                `</li>
</ol>"`;
