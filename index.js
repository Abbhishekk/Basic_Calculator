var a = document.getElementById('demo')
var b = document.getElementById('text')
window.onload= ()=>{
    a.value= null;
    b.value = null;
}
function fun1( v) {
    var x;
    x=document.getElementById(v).value;
    a.value=a.value+x;
}
function getstring(){
    
    var result;
    try {
        result = eval(a.value);
        if(Number.isInteger(result)){
            b.value = result;
        }
        else{
            b.value = result.toFixed(2);
        }    
    } catch (error) {
        alert("Invalid number");
    }
    
    console.log(result);
   


}
function reset() {
    a.value=null;
    b.value = null;
}
