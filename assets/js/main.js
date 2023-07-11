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

const thisForm = document.getElementById('contactForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    console.log(JSON.stringify(Object.fromEntries(formData)),'formData');
    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});

