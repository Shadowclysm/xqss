//javascript:

(function(x){
    window.xqss=x=window.xqss||{};
    x.load=x.load||function(s,f,e){
        e=document.createElement('script');
        e.onload=f;
        document.head.appendChild(e).src=s;
    };
    x.loadcss=x.loadcss||function(s,f,e){
        e=document.createElement('link');
        e.onload=f;
        e.rel='stylesheet';
        document.head.appendChild(e).href=s;
    };
    if(!x.css){
        x.loadcss('//shadowclysm.github.io/xqss/css/xqss.css');
        x.css=1;
    }
    x.load('//shadowclysm.github.io/xqss/js/%s.js');
})();

