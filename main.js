
var last_x="";
var last_y="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black"
width=2;
if (screen.width<992) {
    document.getElementById("myCanvas").width=screen.width-50;
    document.getElementById("myCanvas").height=screen.height-300
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    colour=document.getElementById("Colour").value;
    width=document.getElementById("Width").value;
    last_x=e.touches[0].clientX-canvas.offsetLeft
    last_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(event){
    current_x=event.touches[0].clientX-canvas.offsetLeft;
current_y=event.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.moveTo(last_x,last_y)
    ctx.lineTo(current_x,current_y)
    ctx.stroke();    
last_x=current_x;
last_y=current_y;
}
function Clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}