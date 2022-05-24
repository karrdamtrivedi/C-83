var last_position_x,last_position_y;
color="black";
width_of_line=2;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var width=screen.width;

new_w=screen.width-70;
new_h=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_w;
    document.getElementById("myCanvas").height=new_h;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
console.log("my_touchstart");
color=document.getElementById("color").value;
width_of_line=document.getElementById("width").value;

last_position_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_y=e.touches[0].clientY-canvas.offsetTop;

}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("Last position of x and y coordinates =");
    console.log("x= "+last_position_x+",y= "+last_position_y);
    ctx.moveTo(last_position_x,last_position_y);

    console.log("current position of x and y coordinates =");
    console.log("x= "+current_position_x+",y= "+current_position_y);
    ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();

last_position_x=current_position_x;
last_position_y=current_position_y;

   
     
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}