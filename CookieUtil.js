var CookieUtil = {
    getCookie: function(cName) {
        // 先查询cookie是否为空，为空就return ""
        if (document.cookie.length>0) {　　
            // 通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1　　
　　　　　　 cStart=document.cookie.indexOf(cName + "=");　　
　　　　　　 if (cStart!=-1) { 
                // 最后这个+1其实就是表示"="号啦，这样就获取到了cookie值的开始位置
                cStart=cStart + cName.length+1　　
                cEnd=document.cookie.indexOf(";", cStart);　　
                if (cEnd==-1) {
                   cEnd=document.cookie.length;　　
                }
                
                // 注意unescape()
                return unescape(document.cookie.substring(cStart, cEnd));　　
　　　　　　 } 
　　　　}
　　　　return "";
    },
    setCookie: function(cName, cValue, expires, path, domain, secure) {
        // cookie value需要进行escape()处理
        document.cookie = cName + "=" + escape(cValue) +
            // expires需要是GTM格式
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    },
    delCookie: function(cName) {
        // 设置一个已经过去的时间点
        var date = new Date();
        date.setTime(date.getTime() - 1);
 
        var cValue=getCookie(cName);
        if (cValue!=null) {
            document.cookie= cName + "="+cValue+";expires="+date.toGMTString();
        }
    },
    getExpDate: function(days, hours, minutes) {
        var expDate = new Date();
        if(typeof(days) == "number" && typeof(hours) == "number" && typeof(hours) == "number") {
            expDate.setDate(expDate.getDate() + parseInt(days, 10));
            expDate.setHours(expDate.getHours() + parseInt(hours, 10));
            expDate.setMinutes(expDate.getMinutes() + parseInt(minutes, 10));
            return expDate.toGMTString();
        }
    }

};