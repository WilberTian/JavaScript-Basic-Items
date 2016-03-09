function DOMReady(fn){
    if(document.addEventListener) {        
        // 标准浏览器
        document.addEventListener("DOMContentLoaded", function() {
            // 注销事件
            document.removeEventListener("DOMContentLoaded",arguments.callee, false);
            // 执行函数
            fn();            
        }, false);
    }else if(document.attachEvent) {        
        // IE
        document.attachEvent("onreadystatechange", function() {
            if(document.readyState == "complete") {
                // 注销事件
                document.detachEvent("onreadystatechange", arguments.callee);
                // 函数执行
                fn();        
            }
        });
    }
};
