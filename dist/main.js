"use strict";

!function() {
    function i() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").addClass("hidden"), 
        $("#sticky-navigation").removeClass("hidden");
    }
    function n() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").removeClass("hidden"), 
        $("#sticky-navigation").addClass("hidden");
    }
    function s() {
        var i = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 1.5 * i;
    }
    var a = !1;
    $(window).scroll(function() {
        var d = s();
        d && !a && (a = !0, i()), !d && a && (a = !1, n());
    });
}();