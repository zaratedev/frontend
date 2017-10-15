"use strict";

!function() {
    function t() {
        e() ? n() : a($(i).find(".input:invalid").first().parent());
    }
    function e() {
        return document.querySelector(i).checkValidity();
    }
    function a(t) {
        $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();
        var e = t.index(".step") + 1;
        $(".path-step.active").removeClass("active"), $(".path-step:nth-child(" + e + ")").addClass("active");
    }
    function n() {
        var t = $(i);
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            data: t.formObject(),
            dataType: "json",
            success: function() {
                t.slideUp(), swal("Muy bien!", "Enviamos tu correo", "success");
            }
        });
    }
    var i = "#form_contact";
    $(".step textarea").on("keydown", function(t) {
        13 == t.keyCode && (t.preventDefault(), $(t.target).blur());
    }), $(".path-step").on("click", function(t) {
        var e = $(t.target);
        $(".path-step.active").removeClass("active"), e.addClass("active"), console.log(e.index(".path-step"));
        var n = e.index(".path-step") + 1;
        a($(".step:nth-child(" + n + ")"));
    }), $(i).find(".input").on("change", function(n) {
        var i = $(n.target).parent().next(".step");
        !e() && i.length > 0 ? a(i) : t();
    });
}();