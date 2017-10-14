"use strict";

navigator.serviceWorker && navigator.serviceWorker.register("sw.js"), function() {
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
    var e = !1, s = 0, a = $("[data-name='image-counter']").attr("content");
    $("#form_contact").on("submit", function(i) {
        return i.preventDefault(), sendForm($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    setInterval(function() {
        s < a ? s++ : s = 0, $("#gallery .inner").css({
            left: "-" + 100 * s + "%"
        });
    }, 3e3), $(window).scroll(function() {
        var s = t();
        s && !e && (e = !0, i()), !s && e && (e = !1, n());
    });
}();