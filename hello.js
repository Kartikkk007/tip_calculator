const btn1= document.getElementById("calculate")
const billInput= document.getElementById("bill")
const tipInput=document.getElementById("tip")
const totalspan=document.getElementById("total")

function funcal(){
    const billval= billInput.value;
    const tipval=tipInput.value;
    const totalvalue=billval*(1 + tipval/ 100);
    totalspan.innerText= totalvalue.toFixed(2);


}
btn1.addEventListener("click", funcal);
