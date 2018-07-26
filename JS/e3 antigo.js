document.addEventListener("DOMContentLoaded", function() {
    let y = Math.round(Math.random()*20); //entre dois valores *(vfinal - vinicial) +vinicial
    let numx = document.getElementById('numx');
    let boxR = document.getElementById('return');
    let btnsub=document.getElementById('btnsub');
   // let x = Number(numx.value);
    let z, resultado;
    z=1;


//clickerino
    btnsub.addEventListener('click',eventerino,false);
//handlerino
    function eventerino(e) {
        e.preventDefault();
        guess(y);
    }

    function guess(y){
        //loop para hints
        if (numx.value>y){
         //   x = Number(numx.value);
            boxR.textContent="Errado! O seu numero és demasiado alto! Tenta outravez!";
        // Dif:hard   y= Math.round(Math.random()*20);
            z++;
        }
        else if (numx.value<y){ //por alguma razao o js para neste
          //  x = Number(numx.value);
            boxR.textContent="Errado! O seu numero é demasiado baixo! Tenta outravez!";
        // Dif:hard  y= Math.round(Math.random()*20);
            z++;
        }
     /*   else if(z>=5){  //se tudo correr bem deve passar por aqui se o jogador tiver efectuado 5 tentativas 
            break;//RIP
        }*/
        // é o loop que é irrelevante  :-)
        
        //Fim do jogo, estou a pensar fazer desta parte uma função 
        if (z>=5) { 
            resultado="<h1>Falhaste! Tenta outravez!</h1>"+ "<br> O Numero era: "+ "<br>" + y;
            resultado+= "<br>"+ "tentativas ="+ z;
            
            
        }
            
        else if(numx.value==y) {
            resultado= "<h1> Parabéns acertou!</h1>" + "<br> O Numero era :"+ "<br>" + y;
            resultado+= "<br>"+ "tentativas ="+ z;
        }
    }

    //código para escrever na div output
    boxR.innerHTML = resultado;
    
})