var total=document.querySelector(".total");
var unitPrices=document.querySelectorAll(".unit-price");
var plusBtns=document.querySelectorAll(".fa-plus");
var minusBtns=document.querySelectorAll(".fa-minus");
var quantities=document.querySelectorAll(".form-control");
var removeBtns=document.querySelectorAll(".fa-trash");
var hearts=document.querySelectorAll(".fa-heart");


function totalPrice(){
let sum=0
quantities=document.querySelectorAll(".form-control");
unitPrices=document.querySelectorAll(".unit-price");
for(let i=0;i<quantities.length;i++){
sum+=quantities[i].value*unitPrices[i].innerText
}
total.innerText=sum
}


for(let i=0;i<quantities.length;i++){
    quantities[i].addEventListener('input',function(){
        totalPrice()
    })
}
for (let heart of hearts){
    heart.addEventListener('click',function(){
        if (heart.style.color!=="red"){
            heart.style.color="red";
        }else{
            heart.style.color="white";
        }

    })
}
for (let removeBtn of removeBtns){
    removeBtn.addEventListener('click',function(){
        removeBtn.parentNode.parentNode.parentNode.remove()  
        totalPrice();
    })
}
