


    // event
    var EventUtil = {
        addHandler: function(element, type, handler){
            if (element.addEventListener){
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        
        removeHandler: function(element, type, handler){
            if (element.removeEventListener){
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent){
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        
        getEvent: function(event){
            return event ? event : window.event;
        },
        
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        
        preventDefault: function(event){
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        
        stopPropagation: function(event){
        if (event.stopPropagation){
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };
    
    
    
    // bind
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            if (typeof this !== "function") {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
        
            var aArgs = Array.prototype.slice.call(arguments, 1), 
                fToBind = this, 
                fNOP = function () {},
                fBound = function () {
                    return fToBind.apply(this instanceof fNOP
                                            ? this
                                            : oThis || this,
                                        aArgs.concat(Array.prototype.slice.call(arguments)));
                };
        
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
        
            return fBound;
        };
    }
    
    
    // isArray
    if(typeof Array.isArray === "undefined"){
        Array.isArray = function(arg){
            return Object.prototype.toString.call(arg) === "[Object Array]";
        };
    }
    
    
    
    // query string object
    function getQueryStringObject(url) {
        url = url == null ? window.location.href : url;
        var search = url.substring(url.lastIndexOf("?") + 1);
        var obj = {};
        var reg = /([^?&=]+)=([^?&=]*)/g;
        search.replace(reg, function (rs, $1, $2) {
            var name = decodeURIComponent($1);
            var val = decodeURIComponent($2);                
            val = String(val);
            obj[name] = val;
            return rs;
        });
        return obj;
    }
    
    
    