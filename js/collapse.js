// changes the chevron on collapse toggle
$( document ).ready ( function() {
    $(".variant").on("shown.bs.collapse hidden.bs.collapse", function () {
        $("#collapseIcon").toggleClass("glyphicon-chevron-up");
        $("#collapseIcon").toggleClass("glyphicon-chevron-down");
    });
});