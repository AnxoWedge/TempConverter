document.addEventListener("DOMContentLoaded", function() {
    //scrollnav header changing place
    let footer = document.getElementById('navFooter');
    
    window.onscroll = function(){
        Scroll();
    };

    function Scroll(){
        if(document.body.scrollTop > 65 || document.documentElement.scrollTop > 65){
            footer.className=" ";
        }
        else{
            footer.className="top";
        }
    }

    // menu

    let logo=document.getElementById('logo');
    let navUl=document.getElementById('navUL'); 
        
    logo.addEventListener('click',clicked,false);
        function clicked(e){
            e.preventDefault;
            if(window.innerWidth < 1100){    
                if(navUl.className==="open"){
                navUl.className=" ";
                footer.className=" ";
                }
                else{
                    navUl.className="open";
                    footer.className="open";
                    window.onscroll= function(){
                        navUl.className=" ";
                        footer.className=" ";
                    }
                }
            }
        }
/*
        if(window.innerWidth < 1100){
           let warn = document.createElement('div');
           warn.className="floater";
           footer.appendChild(warn);
        }*/

    //hide and show
    let nav = document.getElementById('navbar');
    let beta=document.getElementById('beta');
    let alpha=document.getElementById('alpha');
    let omega=document.getElementById('omega');
    let lambda=document.getElementById('lambda');

    nav.addEventListener('click',openSect, false)

    function openSect(e){
        e.preventDefault();
        let target= e.target;
        switch(target.id){

            case "ex1":
                alpha.className= "_alpha";
                beta.className= "_alpha show";
                omega.className= "_alpha";
                lambda.className= "_alpha";
                break;
            case "ex2":
                alpha.className= "_alpha show";
                beta.className= "_alpha";
                omega.className= "_alpha";
                lambda.className= "_alpha";
                break;
            case "ex3":
                alpha.className= "_alpha";
                beta.className= "_alpha";
                omega.className= "_alpha show";
                lambda.className= "_alpha";
                break;
            case "ex4":
                alpha.className= "_alpha";
                beta.className= "_alpha";
                omega.className= "_alpha";
                lambda.className= "_alpha show";
                break;
        }

    }



}); 