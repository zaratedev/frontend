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
    function s() {
        var i = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2 * i;
    }
    var t = !1;
    $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    $(window).scroll(function() {
        var a = s();
        a && !t && (t = !0, i()), !a && t && (t = !1, n());
    });
}();