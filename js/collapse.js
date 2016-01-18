// changes the chevron on collapse toggle
$( document ).ready ( function() {
    $(".collapse").on("shown.bs.collapse hidden.bs.collapse", function () {
        // grab all classes of this element
        var classes = $(this).attr("class")

        // grab first element
        classes = classes.split(" ")[0];
        console.log(classes);

        // loop through every collapse button
        $("button#collapse").each( function () {
            // find the data-target and strip the leading "."
            btnClass = $(this).attr("data-target");
            btnClass = btnClass.slice(1, btnClass.length)
            console.log(btnClass);

            // if target and element collapsed match, change the icon of the child of the collapse button
            if (classes == btnClass) {
                $(this).children("span").toggleClass("glyphicon-chevron-up");
                $(this).children("span").toggleClass("glyphicon-chevron-down");
                return false;
            };
        });
    });
});