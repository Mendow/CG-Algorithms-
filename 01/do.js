/*
Help link : http://www.w3schools.com/jsref/dom_obj_canvas.asp
            http://www.w3schools.com/html/html5_canvas.asp
some colors
black   #000000
RED     #FF0000
GREEN   #00FF00
BLUE    #0000FF
YELLOW  #FFFF00
PURPLE  #FF00FF
GREY    #C0C0C0
WHITE   #FFFFFF
*/


/*set canvas*/
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

/*draw some dots ,use different color*/
/*context.fillRect(x,y,width,hight) create rectangle */
    var x = 100;
    var y = 100;
    ctx.fillStyle=" #C0C0C0";
    ctx.fillRect(x,y,3,3);
    var x = 500;
    var y = 500;
    ctx.fillStyle="#FF00FF";
    ctx.fillRect(x,y,3,3);
    var x = 100;
    var y = 500;
    ctx.fillStyle="#0000FF";
    ctx.fillRect(x,y,3,3);
    var x = 500;
    var y = 100;
    ctx.fillStyle="#0000FF";
    ctx.fillRect(x,y,3,3);

/*draw line
.moveTo(x,y) first point
.lineTo(x,y) second point
.stroke() make line
*/
    ctx.fillStyle = "#C0C0C0";
    ctx.moveTo(100,100);
    ctx.lineTo(500,100);
    ctx.stroke();

    ctx.fillStyle = "#FF00FF";
    ctx.moveTo(500,100);
    ctx.lineTo(500,500);
    ctx.stroke();
    
    ctx.fillStyle = "#C0C0C0";
    ctx.moveTo(500,500);
    ctx.lineTo(100,500);
    ctx.stroke();
    
    ctx.fillStyle = "#000000";
    ctx.moveTo(100,500);
    ctx.lineTo(100,100);
    ctx.stroke();

/*draw circle
arc(x,y,r,start,stop)
*/
    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.arc(0,0,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.arc(600,600,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.arc(600,0,40,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.arc(0,600,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.arc(300,300,40,0,2*Math.PI);
    ctx.stroke();

/*
draw rectagle
*/
    var x = 200;
    var y = 200;
    ctx.fillStyle=" #C0C0C0";
    ctx.fillRect(x,y,30,30);

    var x = 300;
    var y = 300;
    ctx.fillStyle=" #FF0000";
    ctx.fillRect(x,y,30,30);

    var x = 200;
    var y = 400;
    ctx.fillStyle=" #FF00FF";
    ctx.fillRect(x,y,30,30);

    var x = 400;
    var y = 200;
    ctx.fillStyle=" #000000";
    ctx.fillRect(x,y,30,30);

/*
FILL the area
beginPath() start drawing figure
moveTo()    begin point
lineTo()    draw line start and close point  
closePath() end drawing
then set fill style by fillStyle() and fill()
.stroke to made all above visual
*/

ctx.beginPath();
    ctx.moveTo(150,150);
        ctx.lineTo(160,150);
        ctx.lineTo(160,160);
        ctx.lineTo(150,150);
       
ctx.closePath();
ctx.fillStyle=" #000000";
ctx.fill();
ctx.stroke();
