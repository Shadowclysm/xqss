(function(){
    var conflict=false;
    function jsmsg(){
        if(conflict){
            jQuery.noConflict();
            return xqss.msg('Loaded jQuery v'+jQuery.fn.jquery+' with noConflict()',3000);
        }else{
            return xqss.msg('Loaded jQuery v'+jQuery.fn.jquery,3000);
        }
    }
    function loadjs(){
        if(typeof jQuery==='undefined'){
            if(typeof $==='function'){
                conflict=true;
            }
            xqss.load('https://code.jquery.com/jquery-2.2.2.min.js',jsmsg);
        }else{
            return xqss.msg('Detected existing jQuery v'+jQuery.fn.jquery,3000);
        }
    }
    if(typeof xqss.msg==='undefined'){
        xqss.load('//shadowclysm.github.io/xqss/js/message.js',loadjs);
    }else{
        loadjs();
    }
})();
