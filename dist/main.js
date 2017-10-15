"use strict";

navigator.serviceWorker && navigator.serviceWorker.register("sw.js"), function() {
    function n() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function e() {
        $("#responsive-nav ul").toggleClass("active"), $("#menu-opener").toggleClass("fa-bars");
    }
    function i() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function t() {
        var n = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2 * n;
    }
    var s = !1, a = 0, o = $("[data-name='image-counter']").attr("content");
    $("#form_contact").on("submit", function(n) {
        return n.preventDefault(), sendForm($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    $("#menu-opener").on("click", function() {
        $("#responsive-nav ul").toggleClass("active"), $(this).toggleClass("fa-bars");
    }), $(".menu-link").on("click", e), setInterval(function() {
        a < o ? a++ : a = 0, $("#gallery .inner").css({
            left: "-" + 100 * a + "%"
        });
    }, 3e3), $(window).scroll(function() {
        var e = t();
        e && !s && (s = !0, n()), !e && s && (s = !1, i());
    });
}();