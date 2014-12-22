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

function circleSimple(x0, y0, r) {
    'use strict';
    var x           = r,
        y           = 0,
        radiusError = 1 - x;
    ctx.fillStyle = "#FF00FF";
    
    while (x >= y) {
        ctx.fillRect(x + x0,   y + y0, 1, 1);
        ctx.fillRect(y + x0,   x + y0, 1, 1);
        ctx.fillRect(-x + x0,  y + y0, 1, 1);
        ctx.fillRect(-y + x0,  x + y0, 1, 1);
        ctx.fillRect(-x + x0,  -y + y0, 1, 1);
        ctx.fillRect(-y + x0,  -x + y0, 1, 1);
        ctx.fillRect(x + x0,   -y + y0, 1, 1);
        ctx.fillRect(y + x0,   -x + y0, 1, 1);
        y += 1;
        if (radiusError < 0) {
            radiusError += 2 * y + 1;
        } else {
            x -= 1;
            radiusError += 2 * (y - x + 1);
        }
    }
}




circleSimple(250, 250, 20);
