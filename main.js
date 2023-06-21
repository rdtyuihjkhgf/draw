var mouseevent="empty";
var lastposx,lastposy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=5;
canvas.addEventListener("mousedown",mousedown);
function mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;
    mouseevent="mousedown"
}
canvas.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mouseup",mouseup);
function mouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
    currentposx=e.clientX-canvas.offsetLeft;
    currentposy=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last x and y coordinates=");
        console.log("x="+lastposx+"y="+lastposy);
        ctx.moveTo(lastposx,lastposy);
        console.log("Current x and y coordinates=");
        console.log("x="+currentposx+"y="+currentposy);
        ctx.lineTo(currentposx,currentposy);
        ctx.stroke()
    }
    lastposx=currentposx;
    lastposy=currentposy;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}