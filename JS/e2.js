document.addEventListener("DOMContentLoaded", function(){ // Iniciar o documento
    //Criar as variaveis necessárias para resolver o problema
    let a = document.getElementById('numxA'); // numero introduzido
    let btnsubA = document.getElementById('btnsubA'); //Btn para submeter
    let boxR = document.querySelector('.boxR'); // div para os resultados
    let temp = document.getElementsByClassName('temp'); //radio 
    let fahrenheitTemperature,celsiusTemperature // Resultado
    
    btnsubA.addEventListener('click',eventorino,false);
    
    function eventorino(e){
        e.preventDefault();
        max(a);
    }
    function max(a){ 
        for(let k=0; k<temp.length; k++) // correr os 2 butões
         if(temp[k].checked){ // verificar se qual deles está marcado
            switch (temp[k].value){ // retirar o valor
                case "C": // caso for C então quer dizer que o utilizador selecionou que a temperatura que introduziu está em Celsius
                    fahrenheitTemperature = a.value * 9/5 + 32; // Converter para Fahrenheit
                    boxR.innerHTML= fahrenheitTemperature +'ºF';// introduzir valor + ºF
                    break;
                case "F": // vice-versa
                    celsiusTemperature = (a.value - 32) * 5/9;
                    boxR.innerHTML= celsiusTemperature +'ºC';
                    break;
                        
                    }
                }
            }
}) 