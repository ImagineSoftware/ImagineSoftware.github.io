$(document).ready(function(){
    //for loader
    const myTimeout = setTimeout(stopLoading, 1000);
    //smooth scroll
    $(".navbar .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

function stopLoading() {
    $('#loader-div').addClass('hide-loader-div');
}