var throttleV1 = function(action, delay){
    var last = 0;
    
    return function() {
        var curr = +new Date();
        
        if (curr - last > delay) {
            action.apply(this, arguments);
            last = curr ;
        }
    }
}


// example
function myFunc() {
    console.log("resize");
}

window.onresize = throttleV1(myFunc, 300);


// another implementation
var throttleV2 = function(fn, delay, mustRunDelay) {
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

window.onresize = throttleV2(myFunc, 1000, 300);
