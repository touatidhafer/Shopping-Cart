let qte = document.getElementById('qte');
let price = document.getElementById('price');
let total = document.getElementById('bag');
let qte2 = document.getElementById('qte2');
let price2 = document.getElementById('price2');
let qte3 = document.getElementById('qte3');
let price3 = document.getElementById('price3');

//product1
document.getElementById('plus-btn').addEventListener("click",incr);

function incr(){
    qte.innerHTML =+ qte.innerHTML + 1;
    price.innerHTML =+ price.innerHTML+200;
    total.innerHTML =+ total.innerHTML +200;
}
document.getElementById('minus-btn').addEventListener("click",decr);

function decr(){
    if(qte.innerHTML > 0){
        qte.innerHTML=+ qte.innerHTML - 1;
        price.innerHTML =+ price.innerHTML - 200;
        total.innerHTML =+ total.innerHTML -200;
     }
}
document.getElementById('like-btn').addEventListener("click",changeColor);

let like = document.getElementById('like-btn');

function changeColor(){
    if(like.style.color !== 'red'){
        like.style.color = "red";
    }else{
        like.style.color = "grey";
    }
}
document.getElementById('delete-btn').addEventListener("click",removeItem1);

let x1 = document.getElementById('product1');
function removeItem1(){
    x1.style.display = 'none';
    total.innerHTML =+ total.innerHTML - price.innerHTML;
}
//product2
document.getElementById('plus-btn2').addEventListener("click",incr2);

function incr2(){
    qte2.innerHTML =+ qte2.innerHTML + 1;
    price2.innerHTML =+ price2.innerHTML+350;
    total.innerHTML =+ total.innerHTML +350;
}
document.getElementById('minus-btn2').addEventListener("click",decr2);

function decr2(){
    if(qte2.innerHTML > 0){
        qte2.innerHTML=+ qte2.innerHTML - 1;
        price2.innerHTML =+ price2.innerHTML - 350;
        total.innerHTML =+ total.innerHTML -350;
    }
}

document.getElementById('like-btn2').addEventListener("click",changeColor2);

let like2 = document.getElementById('like-btn2');

function changeColor2(){
    if(like2.style.color !== 'red'){
        like2.style.color = "red";
    }else{
        like2.style.color = "grey";
    }
}
document.getElementById('delete-btn2').addEventListener("click",removeItem2);

let x2 = document.getElementById('product2');
function removeItem2(){
    x2.style.display = 'none';
    total.innerHTML =+ total.innerHTML - price2.innerHTML;
}
//product3
document.getElementById('plus-btn3').addEventListener("click",incr3);

function incr3(){
    qte3.innerHTML =+ qte3.innerHTML + 1;
    price3.innerHTML =+ price3.innerHTML+150;
    total.innerHTML =+ total.innerHTML +150;
}
document.getElementById('minus-btn3').addEventListener("click",decr3);

function decr3(){
    if(qte3.innerHTML > 0){
        qte3.innerHTML=+ qte3.innerHTML - 1;
        price3.innerHTML =+ price3.innerHTML - 150;
        total.innerHTML =+ total.innerHTML -150;
    }
}

document.getElementById('like-btn3').addEventListener("click",changeColor3);

let like3 = document.getElementById('like-btn3');

function changeColor3(){
    if(like3.style.color !== 'red'){
        like3.style.color = "red";
    }else{
        like3.style.color = "grey";
    }
}
document.getElementById('delete-btn3').addEventListener("click",removeItem3);

let x3 = document.getElementById('product3');
function removeItem3(){
    x3.style.display = 'none';
    total.innerHTML =+ total.innerHTML - price3.innerHTML;
}
