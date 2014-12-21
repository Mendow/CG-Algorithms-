/*global alert*/
/*global console*/
/*global tElement*/
var c = document.getElementById("myCanvas"),
    ctx = c.getContext("2d");
ctx.strokeStyle = "#f00";
ctx.strokeRect(0, 0, 30, 30);

function matchStartColor(pixelPos) {
    'use strict';
    var r = colorLayer.data[pixelPos];
    var g = colorLayer.data[pixelPos + 1];
    var b = colorLayer.data[pixelPos + 2];

    return (r === startR && g === startG && b === startB);
}

function colorPixel(pixelPos) {
    'use strict';
    colorLayer.data[pixelPos] = fillColorR;
    colorLayer.data[pixelPos + 1] = fillColorG;
    colorLayer.data[pixelPos + 2] = fillColorB;
    colorLayer.data[pixelPos + 3] = 255;
}

function fillAreaRec(startX, startY) {
    'use strict';
    var pixelStack = [[startX, startY]],
        newPos,
        x,
        y,
        pixelPos,
        reachLeft,
        reachRight;


    while (pixelStack.length) {
        newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];

        pixelPos = (y * ctx.width + x) * 4;
        while (y -= 1 >= drawingBoundTop && matchStartColor(pixelPos)) {
            pixelPos -= canvasWidth * 4;
        }
        pixelPos += canvasWidth * 4;
        ++y;
        reachLeft = false;
        reachRight = false;
        while (y++ < canvasHeight - 1 && matchStartColor(pixelPos)) {
            colorPixel(pixelPos);

            if (x > 0) {
                if (matchStartColor(pixelPos - 4)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }

            if (x < canvasWidth - 1) {
                if (matchStartColor(pixelPos + 4)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }

            pixelPos += canvasWidth * 4;
        }
    }
    context.putImageData(colorLayer, 0, 0);



}

function getPosition(event) {
    'use strict';
    var x,
        y,
        canvas = document.getElementById("myCanvas"),
        coordinate = [];

    if (event.x !== undefined && event.y !== undefined) {
        x = event.x;
        y = event.y;
    } else { /*firefox style*/
        x = event.clientX + document.body.scrollLeft +
            document.documen + tElement.scrollLeft;
        y = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    coordinate[0] = x;
    coordinate[1] = y;
    console.log(coordinate[0], coordinate[1]);
    fillAreaRec(x, y);
}



function init() {
    'use strict';
    var canvas = document.getElementById("myCanvas");
    canvas.addEventListener("mousedown", getPosition, false);
}
document.addEventListener("DOMContentLoaded", init, false);
