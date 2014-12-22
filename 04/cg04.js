/*change structure array to model [[],[],[]]*/
function multiplyMatrix(A, B) {
    'use strict';
    var rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length,
        colsB = B[0].length,
        C = [],
        i,
        t,
        j,
        k;
    if (colsA !== rowsB) {
        return false;
    }
    for (i = 0; i < rowsA; i += 1) {
        C[i] = [];
    }
    for (k = 0; k < colsB; k += 1) {
        for (i = 0; i < rowsA; i += 1) {
            t = 0;
            for (j = 0; j < rowsB; j += 1) {
                t += A[i][j] * B[j][k];
            }
            C[i][k] = t;
        }
    }
    return C;
}

var rotation = function (fi) {
    'use strict';
    return [Math.cos(this.fi), Math.sin(this.fi), 0,
            -Math.sin(this.fi), Math.cos(this.fi), 0,
            0, 0, 1];
};


var dilatation = function (a, b) {
    'use strict';
    return [this.a, 0, 0,
            0, this.b, 0,
            0, 0, 1];
};

var reflection = function () {
    'use strict';
    return [1, 0, 0,
            0, -1, 0,
            0, 0, 1];
};

var translation = function (gamma, myu) {
    'use strict';
    return [1, 0, 0,
            0, 1, 0,
            this.gamma, this.myu, 1];
};

function vector(x, y) {
    'use strict';
    return [x, 0, 0,
            y, 0, 0,
            0, 0, 1];
}
/*Action*/
var dot = new vector(7, 7),
    xplace = 0,
    yplace = 3;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillRect(dot[xplace], dot[yplace], 3, 3);
var newdot = multiplyMatrix(dot,dilatation);
ctx.fillRect(newdot[xplace], newdot[yplace], 3, 3);
