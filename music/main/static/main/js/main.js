nowsonf=1

function songg(song,i) {
    if (i==1){
        if (nowsonf!=1){
            songg(nowsonf,0)
            nowsonf=song
            document.getElementById(song).play();
            document.getElementById("play "+song).style.display = "none";
            document.getElementById("pause "+song).style.display = "inline";
        }
        else{
            nowsonf=song
            document.getElementById(song).play();
            document.getElementById("play "+song).style.display = "none";
            document.getElementById("pause "+song).style.display = "inline";
        }
    }
    else{
        nowsonf=1
        document.getElementById(song).pause();
        document.getElementById("pause "+song).style.display = "none";
        document.getElementById("play "+song).style.display = "inline";
    }
    console.log(nowsonf)
  }

  function loop(song){
    audio=document.getElementById(song)
    icon=document.getElementById("repeat "+song)
    if (audio.loop){
        audio.loop = false;
        icon.style.color="black";
    }
    else{
        audio.loop = true;
        icon.style.color="red";
    }
    
  }
let fadeInterval = 10;
function setFadeInterval( theFadeTime ) {
    fadeInterval = 10.*theFadeTime;
}
