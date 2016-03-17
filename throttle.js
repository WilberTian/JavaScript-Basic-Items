// first implementation
function throttleV1(method, context) {
    clearTimeout(method.tId);
    
    method.tId = setTimeout(function(){
        method.call(context)
    }, 100);
}

window.onresize = function(){
    throttle(myFunc);
}


// second implementation
var throttleV2 = function(fn, delay) {
    var timer = null;
    
    return function() {
        var context = this,
              args = arguments;
        
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
};

window.onresize = throttleV2(myFunc, 100);


// third implementation
var throttleV3 = function(fn, delay, mustRunDelay) {
 	var timer = null,
 	      t_start;
          
 	return function() {
 		var context = this, 
              args = arguments, 
              t_curr = new Date();
              
 		clearTimeout(timer);
        
 		if(!t_start) {
 			t_start = t_curr;
 		}
        
 		if(t_curr - t_start >= mustRunDelay) {
 			fn.apply(context, args);
 			t_start = t_curr;
 		}
 		else {
 			timer = setTimeout(function() {
 				fn.apply(context, args);
 			}, delay);
 		}
    };
};

window.onresize = throttleV3(myFunc, 50, 100);
