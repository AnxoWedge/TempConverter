document.addEventListener("DOMContentLoaded", function() {
  //  let y=Math.round(Math.random()*(1500-1000)+1000);
    //console.log(y);

    //variaveis
    let newbtn = document.getElementById('btn-new');
    let newItemform = document.getElementById('new-form');
    let addbtn=document.getElementById('addbtn');
    let prodName=document.getElementById('prodName');
    let prodPrice=document.getElementById('prodPrice');
    let product=document.querySelector('#product');
    let price=document.querySelector('#price');
    let button=document.getElementById('button');
    let productList= [];
    let productListN=product.querySelectorAll('#product li');

   
    
    
    //button Hide/show
    newbtn.className= 'show';
    newItemform.className='hide';

    newbtn.addEventListener('click', showrino, false);

    function showrino(){
        newbtn.className= 'hide';
        newItemform.className='show';
    }
    
    
    //criação de um item
    addbtn.addEventListener('click', addItem, false);
    
    function Product(name, price){
        this.name=prodName.value;
        this.price=prodPrice.value;
    }

    function addItem(e){ 
        e.preventDefault();
        //create new elem
        let newliproduct=document.createElement('li');
        newliproduct.className="normal";
        newliproduct.innerHTML=`${prodName.value} | ${prodPrice.value}€`;
        
        let produto= new Product(prodName.value, prodPrice.value)
        productList.push(produto);
        console.log(productList);


        //throw them to the lists
        product.appendChild(newliproduct);



        newbtn.className= 'show';
        newItemform.className='hide';
        prodName.value="";
        prodPrice.value="";
    }

    let delBtn=document.getElementById("delBtn");
    let editBtn=document.getElementById("editBtn");
    let cancelBtn=document.getElementById("cancelBtn");
    console.log(delBtn);
    let ChangeMode=1;
    product.addEventListener("click", getEm, false);

    function getEm(){
    
    switch (ChangeMode){
        case 2: product.addEventListener("click", annihilate,false);
        break;
        case 3: product.addEventListener("click", mutate, false);
        break;
    }
}

    delBtn.addEventListener("click", deleteState,false);
    function deleteState(e){
        ChangeMode=2;
        console.log(ChangeMode)
        product.className="delete";
        cancelBtn.className="show";
    }
    editBtn.addEventListener("click",editState,false);
    function editState(e){
        ChangeMode=3;
        console.log(ChangeMode)
        product.className="edit";
        cancelBtn.className="show";
    }
    cancelBtn.addEventListener("click", normalState,false);
    function normalState(e){
        ChangeMode=1;
        product.className="";
        cancelBtn.className="hide";
    }


     function annihilate(e){
        e.preventDefault();
        let targetedLi= e.target.closest("li");
        let listNode = Array.from( targetedLi.closest('ul').children );
        let index= listNode.indexOf( targetedLi );
        targetedLi.parentNode.removeChild(targetedLi);
        productList.splice(index, 1)
        console.log(productList);
        console.log(index);
        
    }
        
        
    let x=0;
    function mutate(e){
        e.preventDefault();
        let inputProduct = document.createElement("input");
        let inputPrice = document.createElement("input");
        let save = document.createElement("input");
        let targetedLi= e.target.closest("li");
        let listNode = Array.from( targetedLi.closest('ul').children );
        let index= listNode.indexOf( targetedLi );

        //create the variables
        
        if(x<1){
        //define the new elements

        inputProduct.setAttribute("type","name");
        inputProduct.value=productList[index].name;
        inputProduct.className="show";

        
        inputPrice.setAttribute("type","number");
        inputPrice.value=productList[index].price;
        inputPrice.className="show";


        
        save.setAttribute("type", "button");
        save.id="savebtn"
        save.value="save";

        targetedLi.appendChild(inputProduct);
        targetedLi.appendChild(inputPrice);
        targetedLi.appendChild(save);

        x++;//add to the counter
    }
     

    }

    // have the save button do the dirty job
    let allInput= document.querySelector("li.normal input");
    let saveBtn=document.getElementById("savebtn");
  /*  saveBtn.addEventListener("click", saveit, false);*/
    function saveit(e) {
        e.preventDefault();
        let dataEdit= targetedLi.children;
        if(x>=1){
        x=0;
    }
        allInput.className="hide";

    }


    
    //editBtn.addEventListener("click", editIt, false);
  //  modBtns.addEventListener("click", moditorino, false);

    function moditorino(e){
        debugger;
        let target=e.target;
        if(target.innerText==="Edit"){
            console.log(target.value)
        }
        else{
        
        productList[k].splice;
        productList[k].parentNode.removeChild(productList[k]);
        }
    }
    
    //fatura
    let invoicebtn=document.getElementById('invoice');
    let faturaLista=document.getElementById('faturaLista');
    let faturaList=document.querySelector('#faturaLista>ul')
    
    
    invoicebtn.addEventListener('click', faturacao, false);
    
    function faturacao(e) {
        e.preventDefault();
        let invoiceClone=product.cloneNode(true);
        invoiceClone.className="cloned";
        faturaList.appendChild(invoiceClone);
       }
    
    
    

    
});

 // ==============  code trash can ============//

   // let priceListN=price.querySelectorAll('#price li');
    //let priceList=[].slice.call(priceListN);
    //let editBtns=button.firstElementChild;


           // let newliprice=document.createElement('li');
        //newliprice.textContent=prodPrice.value+'€';
        /*make buttons
        let newEditbtn=document.createElement('button');
        let newDelbtn=document.createElement('button');
        newEditbtn.textContent=`Edit`;
        newDelbtn.textContent=`Del`; */
        // newliproduct.appendChild(newEditbtn);
        //newliproduct.appendChild(newDelbtn);

   


    /*======== Code for func======= */

   /*     if(delBtn!=="activated"){
        delBtn.className="activated";
        debugger;
        let z = document.getElementsByClassName('normal');
        for(let w=0;w>z.length;w++){(
            (w)=>{
                console.log(w);
                z[w].className="delete";
             });
            w++;
        }
        }*/
    
    
    
    
    
    
    
    
          /*  (k)=>{
        for(let k=0;k<z;k++){
            (index)=>{
                product.children[k].onclick=()=>{
                    console.log(index);
                    return index;
                }
            }
            k++
        }
        }*/

/*
//Edit and delete Buttons created
let boxR = document.getElementById('boxR');

let listItens= boxR.getElementsByTagName('li');
let editBtn = document.createElement("button");
editBtn.textContent=`edit`;
let deleteBtn= document.createElement('button');   
deleteBtn.textContent=`delete`;  
//Hide'em
editBtn.className= "hide";
deleteBtn.className="hide";

boxR.addEventListener("mouseover", editButtons, false);
boxR.addEventListener("mouseout", buttonOut, false);

//buttons in
function editButtons(e){
    e.preventDefault;
    for(k=0; k>listItens.length;k++){    
    listItens[k].appendChild(editBtn);
    listItens[k].appendChild(deleteBtn);
    editBtn.className=" show";
    deleteBtn.className="show";   
    }
}
//buttons out
function buttonOut (e){
   setTimeout(() => {
    for(k=0; k>listItens.length;k++){    
        listItens[k].removeChild(editBtn);
        listItens[k].removeChild(deleteBtn);
    }
   }, 1000);


}
*/
