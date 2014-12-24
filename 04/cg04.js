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

function Matrix() {
    'use strict';
    return [arguments[0], arguments[1], arguments[2]];
}
var m = new Matrix([1, 2, 1], [1, 2, 1], [1, 2, 1]),
    A = new Matrix([1], [1], [0]);
console.log(A);


function Rotation(fi) {
    'use strict';
    return new Matrix([Math.cos(fi), Math.sin(fi), 0], [-Math.sin(fi), Math.cos(fi), 0], [0, 0, 1]);
}
var roteMatrix = new Rotation(45),
    rotA = multiplyMatrix(roteMatrix, A);
console.log(rotA);

var dilatation = function (a, b) {
    'use strict';
    return new Matrix([this.a, 0, 0], [0, this.b, 0], [0, 0, 1]);
};

var reflection = function () {
    'use strict';
    return new Matrix([1, 0, 0], [0, -1, 0], [0, 0, 1]);
};

var translation = function (gamma, myu) {
    'use strict';
    return new Matrix([1, 0, 0], [0, 1, 0], [this.gamma, this.myu, 1]);
};

function vector(x, y) {
    'use strict';
    return new Matrix([x, 0, 0], [y, 0, 0], [0, 0, 1]);
}
