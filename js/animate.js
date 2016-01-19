var click = 1;
$( document ).ready ( function() { 
    $(".credits > span").click( function () {
        if (click % 3) {
            click += 1;

            $(this).animate({
                color: "blue"
            }, 1000);

            $(this).animate({
                color: "red"
            }, 1000);

            $(this).animate({
                color: "yellow"
            }, 1000);

            $(this).animate({
                color: "green"
            }, 1000);

            $(this).animate({
                color: "#333"
            }, 1000);

        } else {
            click += 1;

            $(this).animate({
                fontSize: "0px",
                opacity: 0,
            }, 600);

            $(this).animate({
                fontSize: "0px"
            }, 3000);

            $(this).animate({
                fontSize: "15px",
                opacity: 100
            }, 1000);
        };
    });
});