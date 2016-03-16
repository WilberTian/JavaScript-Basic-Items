function getUrlVariables(url) {
    url = url ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1),
          obj = {},
          reg = /([^?&=]+)=([^?&=]*)/g;
          
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);                
        val = String(val);
        obj[name] = val;
        return rs;
    });
    
    return obj;
}