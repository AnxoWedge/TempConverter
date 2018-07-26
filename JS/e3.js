document.addEventListener("DOMContentLoaded", function() {
    let y = Math.round(Math.random()*20); //entre dois valores *(vfinal - vinicial) +vinicial
    let numx = document.getElementById('numxB');
    let boxR = document.getElementById('returnB');
    let btnsubB=document.getElementById('btnsubB');
   // let x = Number(numx.value);
    let z, resultado;
    z=0;


//clickerino
    btnsubB.addEventListener('click',eventerino,false);
//handlerino
    function eventerino(e) {
        e.preventDefault();
        guess(y);
    }

    function guess(y){
        if (Number(numx.value)>y){
            resultado="Errado! O seu numero és demasiado alto! Tenta outravez!";
        // Dif:hard   y= Math.round(Math.random()*20);
            z++;
        }
        else if (Number(numx.value)<y){ //por alguma razao o js para neste
            resultado="Errado! O seu numero é demasiado baixo! Tenta outravez!";
        // Dif:hard  y= Math.round(Math.random()*20);
            z++;
        }
        if (z>=5) {//Fim do jogo 
            resultado="<h1>Falhaste! Tenta outravez!</h1>"+ "<br> O Numero era: "+ "<br>" + y;
            resultado+= "<br>"+ "tentativas ="+ z;   
        }
        if(Number(numx.value)===y) {
            resultado= "<h1> Parabéns acertou!</h1>" + "<br> O Numero era :"+ "<br>" + y;
            resultado+= "<br>"+ "tentativas ="+ z;
        }
        boxR.innerHTML = resultado; //resultado goes here
    }   
})