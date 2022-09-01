$(document).ready(function() {
    const about = $('#about');
    const know = $('#know');
    const jobs = $('#jobs');
    const contact = $('#contact');

    var sobreMi = $('#sobreMi').offset().top,
    conocimientos = $('#conocimientos').offset().top,
    trabajos = $('#proyectos').offset().top,
    contacto = $('#Contacto').offset().top;
    
   //scroll menu
    
    about.on('click', function () {
        $('html, body').animate({
            scrollTop: sobreMi - 200
        }, 500);
    });

    know.on('click', function () {
        $('html, body').animate({
            scrollTop: conocimientos - 200
        }, 500);
    });

    jobs.on('click', function () {
        $('html, body').animate({
            scrollTop: trabajos - 200
        }, 500);
    });

    contact.on('click', function () {
        $('html, body').animate({
            scrollTop: contacto - 200
        }, 500);
    });

});
