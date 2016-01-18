$( document ).ready ( function() { 
    $(".credits > span").click( function () {
        $(this).animate({
            fontSize: "40px"
        }, 600);

        $(this).animate({
            fontSize: "0px",
            opacity: 0
        }, 600);

        $(this).animate({
            fontSize: "0px"
        }, 2000);

        $(this).animate({
            fontSize: "15px",
            opacity: 100
        }, 0);
    });
});