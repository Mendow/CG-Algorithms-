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

/*lineSimple*/


function lineSimple(x1, y1, x2, y2) {
    'use strict';
    if (x1 > x2) {
        x2 = [x1, x1 = x2][0];
    }
    if (y1 > y2) {
        y2 = [y1, y1 = y2][0];
    }
    var Dx = 1,
        Dy = Math.abs((y2 - y1) / (x2 - x1)),
        x  = x1,
        y  = y1,
        i;
    for (i = 0; i < x2 - 1; i += 1) {
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(x, y, 1, 1);
        x += Dx;
        y += Dy;
    }
}


/*lineOpt*/

function lineOpt(x1, y1, x2, y2) {
    'use strict';
    if (x1 > x2) {
        x2 = [x1, x1 = x2][0];
    }
    if (y1 > y2) {
        y2 = [y1, y1 = y2][0];
    }
    var x = x1,
        y = y1,
        n = x2 - x1,
        m = y2 - y1,
        d = m / n,
        e = d / 2,
        i;
    for (i = 1; i < (m + n); i += 1) {
        x += 1;
        e += d;
        if (e > 0.5) {
            y += 1;
            e -= 1;
        } else {
            x += 1;
            e += d;
        }
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(x, y, 1, 1);
    }
}

/*lineNDA*/

function lineNDA(x1, y1, x2, y2) {
    'use strict';
    if (x1 > x2) {
        x2 = [x1, x1 = x2][0];
    }
    if (y1 > y2) {
        y2 = [y1, y1 = y2][0];
    }
    var x  = x1,
        y  = y1,
        n  = x2 - x1,
        m  = y2 - y1,
        dx = 2 * m,
        dy = 2 * n,
        e  = m,
        i;
    for (i = 1; i < n + m; i += 1) {
        x += 1;
        e += dx;
        if (e > n) {
            y += 1;
            e -= dy;
        } else {
            x += 1;
            e += dx;
        }
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(x, y, 1, 1);
    }
}

function lineBras(x1, y1, x2, y2) {
    'use strict';
    if (x1 > x2) {
        x2 = [x1, x1 = x2][0];
    }
    if (y1 > y2) {
        y2 = [y1, y1 = y2][0];
    }
    var x = x1,
        y = y1,
        Px = x2 - x1,
        Py = y2 - y1,
        E = 2 * Py - Px,
        i = Px;
    ctx.fillStyle = "#FF00FF";
    ctx.fillRect(x, y, 1, 1);
    while ((i = i - 1) >= 0) {
        if (E >= 0) {
            x += 1;
            y += 1;
            E += 2 * (Py - Px);
        } else {
            x += 1;
            E += 2 * Py;
        }
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(x, y, 1, 1);
    }
}

function lineBrasInt(x1, y1, x2, y2) {
    'use strict';
    if (x1 > x2) {
        x2 = [x1, x1 = x2][0];
    }
    if (y1 > y2) {
        y2 = [y1, y1 = y2][0];
    }
    var dx = Math.abs(x2 - x1),
        dy = Math.abs(y2 - y1),
        error = 0,
        derror = dy,
        y = y1,
        x,
        i;
    for (x = x1; x < x2; x += 1) {
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(x, y, 1, 1);
        error += derror;
        if ((2 * error) >= dx) {
            y += 1;
            error -= dx;
        }
    }
}
lineSimple(1, 2, 3, 5);
lineNDA(7, 11, 13, 17);
lineOpt(19, 23, 29, 37, 43);
lineBras(47, 53, 67, 73);
lineBrasInt(89, 65, 12, 300);
lineBrasInt(0, 0, 600, 600);
