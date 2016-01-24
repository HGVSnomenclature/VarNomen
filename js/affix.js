$( document ).ready ( function() {
    // moves sidemenu when it hits the footer
    $("#affix").affix({
      offset: {
        bottom: function () {
          return (this.bottom = $(".footer").outerHeight(true));
        }
      }
    });

    // governs behaviour of sidemenu when scrolling past footer
    $("#affix").on("affixed-bottom.bs.affix", function() {
        $(".recs-main").removeClass("col-md-offset-2");        
    });

    $("#affix").on("affixed.bs.affix", function() {
        $(".recs-main").addClass("col-md-offset-2");
    });

});

