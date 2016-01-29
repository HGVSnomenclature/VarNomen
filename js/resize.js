function resize() {
    $( document ).ready( function() {
        // called by clicking resize button in /bg-material/numbering
        // resizes the figure
        $("#resize").toggleClass("glyphicon-resize-full");
        $("#resize").toggleClass("glyphicon-resize-small");
        $("#refSeqFig").toggleClass("img-responsive");
    });
};