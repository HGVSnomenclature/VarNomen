$( document ).ready ( function() { 
    $(".credits > span").click( function () {
        $(this).animate({
            fontSize: "40px",
            color: "green"
        }, 1000);

        $(this).animate({
            color: "red"
        }, 1000);

        $(this).animate({
            color: "yellow"
        }, 1000);

        $(this).animate({
            color: "blue"
        }, 1000);


        $(this).animate({
            fontSize: "0px",
            opacity: 0,
            color: "#333"
        }, 600);

        $(this).animate({
            fontSize: "0px"
        }, 2000);

        $(this).animate({
            fontSize: "15px",
            opacity: 100
        }, 1000);
    });
});