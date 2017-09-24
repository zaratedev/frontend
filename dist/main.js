"use strict";

!function() {
    function i() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function n() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function t() {
        var i = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2 * i;
    }
    var a = !1, s = 0, e = $("[data-name='image-counter']").attr("content");
    $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    setInterval(function() {
        s < e ? s++ : s = 0, $("#gallery .inner").css({
            left: "-" + 100 * s + "%"
        });
    }, 3e3), $(window).scroll(function() {
        var s = t();
        s && !a && (a = !0, i()), !s && a && (a = !1, n());
    });
}();