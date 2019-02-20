function require(arr) {
    require(['define'], function(D) {
        console.log(define.add(arr));
    });
};
require(1, 2)

function define() {
    var add = function(a, b) {
        return a + b;
    }

    var reduce = function(a, b) {
        return a - b;
    }

    return {
        add: add,
        reduce: reduce
    }


}