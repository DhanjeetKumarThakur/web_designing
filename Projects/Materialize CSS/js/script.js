//JQuery Code
$(document).ready(function(){
    $('.modal').modal(); //materialize js -- modal got enable just like that
    $('.parallax').parallax(); //parallax got enable
    $('.sidenav').sidenav();
    $('.slider').slider({ full_width:true });
    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible : 7,
        shift: 55,
        padding:55
    });
})

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}