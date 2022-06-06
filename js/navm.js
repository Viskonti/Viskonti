function shineLinks(navbar__menu){
    try{
        var el=document.getElementById(id).getElementsByTagName('a');
        var url=document.location.href;
        for(var i=0;i<el.length; i++){
            if (url==el[i].href){
                el[i].classname += 'active';
            };
        };
    }catch(e){
        alert("Серанул ты");
    }
};