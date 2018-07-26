document.addEventListener("DOMContentLoaded", function() {
    let numx = document.getElementById('numx');
    let numy = document.getElementById('numy');
    let btnsub = document.getElementById('btnsub');
    let boxR = document.getElementById('return');


    btnsub.addEventListener('click', eventerino, false);
    
    function eventerino(e){
        e.preventDefault();
        max(numx,numy)
}

    function max(numx,numy){
        if(Number(numx.value)<Number(numy.value)){
            boxR.textContent=`O numero maior é ${numy.value}`;
            //return Number(numy.value);
        }else{
            boxR.textContent=`O numero maior é ${numx.value}`;
           // return Number(numx.value);
        }
    }
    boxR.textContent=`O numero maior é ${max(numx,numy)}`;

    
})