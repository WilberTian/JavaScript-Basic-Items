var queue = function(funcs, scope) {
    (function next() {
          if(funcs.length > 0) {
              funcs.shift().apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
          }
    })();
};


var obj = {
    value: null
};

queue([
    function(callback) {
        var self = this;
        setTimeout(function() {
            self.value = 10;
            callback(20);
        }, 200);
    },
    function(callback, add) {
        console.log(this.value + add);
        callback();
    },
    function() {
        console.log(obj.value);
    }
], obj);