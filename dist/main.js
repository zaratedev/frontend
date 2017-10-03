"use strict";

!function() {
    function t() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function n() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function i() {
        var t = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2 * t;
    }
    function a(t) {
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            data: t.formObject(),
            dataType: "json",
            success: function() {
                alert("sucess");
            }
        });
    }
    var e = !1, s = 0, o = $("[data-name='image-counter']").attr("content");
    $("#form_contact").on("submit", function(t) {
        return t.preventDefault(), a($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    setInterval(function() {
        s < o ? s++ : s = 0, $("#gallery .inner").css({
            left: "-" + 100 * s + "%"
        });
    }, 3e3), $(window).scroll(function() {
        var a = i();
        a && !e && (e = !0, t()), !a && e && (e = !1, n());
    });
}();