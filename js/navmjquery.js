$(function () { 
    $('.container__header__lis a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('navm_act');
        }
    });
});