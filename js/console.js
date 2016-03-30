(function(){

    var box = document.createElement('input');
    box.type='text';
    box.className='xqss console';
    document.body.appendChild(box);

    box.onkeypress=function(e){
        if(e.which==13){
            xqss.load('//shadowclysm.github.io/xqss/js/'+box.value+'.js');
        }
    };

    document.addEventListener('keypress',function(e){
        if(e.which==96){
            box.value='';
            box.style.display=(box.style.display=='none'?'block':'none');
        }
    });

})();
