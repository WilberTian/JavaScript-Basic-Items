var debounce = function(action, idle) {
    var last;
    
    return function() {
        var ctx = this, 
              args = arguments;
              
        clearTimeout(last);
        last = setTimeout(function() {
            action.apply(ctx, args)
        }, idle);
    }
}


// example
function myFunc() {
    console.log("resize");
}

window.onresize = debounce(myFunc, 300);