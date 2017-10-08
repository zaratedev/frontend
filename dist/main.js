"use strict";

!function() {
    function n() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function i() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function t() {
        var n = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2 * n;
    }
    var e = !1, s = 0, a = $("[data-name='image-counter']").attr("content");
    $("#form_contact").on("submit", function(n) {
        return n.preventDefault(), sendForm($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    setInterval(function() {
        s < a ? s++ : s = 0, $("#gallery .inner").css({
            left: "-" + 100 * s + "%"
        });
    }, 3e3), $(window).scroll(function() {
        var s = t();
        s && !e && (e = !0, n()), !s && e && (e = !1, i());
    });
}();