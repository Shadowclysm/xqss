(function(){
    window.xqss.msg=function(msg,time){
        var box=document.createElement('div');
        var panel=document.createElement('div');
        box.className='xqss float';
        panel.className='xqss msg';
        panel.innerHTML=msg;

        box.appendChild(panel);
        document.body.appendChild(box);

        setTimeout(function(){
            if(typeof jQuery === 'undefined'){
                document.body.removeChild(box);
            }else{
                jQuery(box).fadeOut('slow',function(){
                    jQuery(this).remove();
                });
            }
        }, time);
    };
})();

