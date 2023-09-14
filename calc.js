function display(input) {
    document.getElementById("tb").value+= input;
}
function clearscreen() {
    document.getElementById("tb").value="";
}
function backspace() {
   var r= document.getElementById("tb").value;
   document.getElementById("tb").value=r.substring(0,r.length-1);


}
function calculate() {
    var result=eval(document.getElementById("tb").value);
    document.getElementById("tb").value=result;
}

