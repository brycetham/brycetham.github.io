$(document).ready(function() {
    appear();
    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
        appear();
    });
    $(window).resize(function(){
        appear();
    });
});
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({scrollTop: target.offset().top}, 1000);
            return false;
        }
    }
});
function appear() {
    /* Check the location of each desired element */
    $('.row').each(function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight()*0.1;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if(bottom_of_window > bottom_of_object){
            $(this).animate({'opacity':'1'},1000);
            if($(this).attr('id')==='skills') {
                progress()
            }
        }
    });
}
function progress() {
    $('.progress-bar').each(function(){
        bar_width = $(this).attr('aria-valuenow');
        $(this).width(bar_width + '%');
    });
}