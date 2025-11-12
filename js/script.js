let phonenum  = document.getElementById("phonenum")
let pinnum = document.getElementById("pinnum")
let loginbtn = document.getElementById("loginbtn")
let successMsg = document.getElementById ("successMsg")
let errorMsg = document.getElementById ("errorMsg")
let firstpg = document.getElementById ("firstpg")
let secpg = document.getElementById ("secpg")


loginbtn.addEventListener( "click" , function () {
   if (phonenum.value =="01234" && pinnum.value == 1234) {
    successMsg.removeAttribute("hidden")
   
     phonenum.value ="";
     pinnum.value="";
    secpg.removeAttribute("hidden");
    firstpg.setAttribute("hidden",true);
   } 
   else if(phonenum.value =="" && pinnum.value == ""){
    alert ("Put Your Info.");
   }
   else {
   errorMsg.removeAttribute("hidden");
   secpg.setAttribute("hidden" , true);
   firstpg.removeAttribute("hidden");
   }
}) 
let totalAmount = document.getElementById("totalAmount")
let plus  = document.getElementById("plus")
let pinplus = document.getElementById("pinplus")
let add = document.getElementById("add")

add.addEventListener( "click", function() {
  let total = parseInt(totalAmount.innerText);
  let addAmounts = parseInt(plus.value);
  if (pinplus.value == 1234 && !isNaN(addAmounts)) {
   let finalamount = total + addAmounts;
   totalAmount.innerText = finalamount;
   
  }
   else if(plus.value =="" && pinplus.value == ""){
    alert ("Put Your Info.")
     
   }
  else{
   alert("Wrong pinNumber.")
    
  }
})

let minus  = document.getElementById("minus")
let pinminus = document.getElementById("pinminus")
let send = document.getElementById("send")

send.addEventListener( "click", function() {
   let total = parseInt(totalAmount.innerText);
  let sendAmounts = parseInt(minus.value);
  if (pinminus.value == 1234 && !isNaN(sendAmounts)) {
   let finalAmount = total - sendAmounts;
   totalAmount.innerText = finalAmount;
   
  }
   else if(minus.value =="" && pinminus.value == ""){
    alert ("Put Your Info.")
     
   }
  else{
   alert("Wrong pinNumber.")
  }
})