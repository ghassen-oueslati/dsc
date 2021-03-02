window.onload=function(){
var t=setInterval(move,100);
var pos=0;
var sandouk= document.getElementById("box") ;
function move(){
    if(pos < 150 )
    {
    pos += 1 ; 
    sandouk.style.left = pos+"px" ; 
    }
    else {clearInterval(move)}

}}