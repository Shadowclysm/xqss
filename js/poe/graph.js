(function(){

    var gem=$("table.GemLevelTable > tbody > tr");
    var width=$("th",gem.first()).size();
    var height=$(gem).size();
    var result="",buffer="";
    for(i=1;i<width;i++){
        buffer=$("th:eq("+i+") > abbr",gem.eq(0)).attr("title")+"\nquadratic fit{";

        for(ii=1;ii<height;ii++){
            data=$(":eq("+i+")",gem.eq(ii)).html().trim();
            if(data.contains('–')){
                buffer+=(parseInt(data.substring(0,data.indexOf('–'))) + parseInt(data.substring(data.indexOf('–')+1,data.length))) / 2.0;
            }else{
                buffer+=data.replace(/[,%]/g,"");
            }
            if(ii!==height-1)buffer+=",";
        }

        buffer+="}\n";
        result+=buffer.replace(/(.*\d)\D+(})/g,"$1$2");
    }
    console.log(result);





    var table=$('table.GemLevelTable > tbody')
    var width=$('tr:eq(0) > th',table).size();
    var height=$('tr',table).size();
    for(i=1;i<width;i++){
        let query='http://www.wolframalpha.com/input/?i=quadratic fit{';
        for(i2=1;i2<=height;i2++){
            var data=$('tr:eq('+i2+') > :eq('+i+')',table).html().trim();
            if(data.contains('–')){
                data=(parseInt(data.substring(0,data.indexOf('–'))) + parseInt(data.substring(data.indexOf('–')+1,data.length))) / 2.0;
            }else{
                data=data.replace(/[,%]/g,"");
            }
            if(!$.isNumeric(data)) break;
            if(i2!==height-1)query+=data+',';
        }
        $('tr:eq(0) > :eq('+i+') > abbr',table).click(function(){window.open(query.slice(0,-1)+'}')});
    }
})();

