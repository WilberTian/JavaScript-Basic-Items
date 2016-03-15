if(Object.create) {
    Object.create = function(obj) {
        function F(){};
        F.prototype = obj;
        return new F();
    }
}

var Klass = {
    init: function(){},
    
    prototype: {
        init: function(){}
    },
    
    create: function() {
        var obj = Object.create(this);
        obj.parent = this;
        obj.init.apply(obj, arguments);
        return obj;
    },
    
    instance: function() {
        var instance = Object.create(this.prototype);
        instance.parent = this;
        instance.init.apply(instance, arguments);
        return instance;
    },
    
    proxy: function(func){
        var thisObject = this;
        return function(){ 
            return func.apply(thisObject, arguments); 
        };
    },
    
    include: function(obj){
        var included = obj.included || obj.setup;
        
        delete obj.included;
        delete obj.extended;
        delete obj.setup;
        
        for(var i in obj) {
            this.fn[i] = obj[i];
        }
            
        if(included) {
            included.apply(this);
        }
    },
        
    extend: function(obj){
        var extended = obj.extended || obj.setup;
        
        delete obj.included;
        delete obj.extended;
        delete obj.setup;
        
        for(var i in obj) {
            this[i] = obj[i];
        }
            
        if(extended) {
            extended.apply(this);
        }
        delete extended;
    }
    
};

Klass.fn = Klass.prototype;
Klass.fn.proxy = Klass.proxy;