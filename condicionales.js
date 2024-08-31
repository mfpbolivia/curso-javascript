
function verificar(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    
   if(a>b){
    mayomen.innerText = a+" es mayor que "+b;
   }else if (a==b){
    mayomen.innerText = a+" es igual a "+ b;
   }else{
    mayomen.innerText =  a+" es menor que "+b;
   }
    let suma=parseInt(a)+parseInt(b);
    output.innerText = "La suma de ambos valores es "+suma;

};
