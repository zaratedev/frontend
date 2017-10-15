"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, o, t) {
        return o && e(n.prototype, o), t && e(n, t), n;
    };
}();

!function() {
    var e = function() {
        function e() {
            _classCallCheck(this, e);
        }
        return _createClass(e, null, [ {
            key: "get",
            value: function(e) {
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(n) {
                    e({
                        lat: n.coords.latitude,
                        lng: n.coords.longitude
                    });
                }) : swal("Oops..", "Tu navegador no soporta geolocalizacón", "error");
            }
        } ]), e;
    }(), n = {
        lat: 19.4007,
        lng: -99.1573
    };
    google.maps.event.addDomListener(window, "load", function() {
        var o = new google.maps.Map(document.getElementById("map"), {
            center: n,
            zoom: 15
        });
        new google.maps.Marker({
            map: o,
            position: n,
            title: "Evolution",
            visible: !0
        }), e.get(function(e) {
            var o = new google.maps.LatLng(e.lat, e.lng), t = new google.maps.LatLng(n.lat, n.lng);
            new google.maps.DistanceMatrixService().getDistanceMatrix({
                origins: [ o ],
                destinations: [ t ],
                travelMode: google.maps.TravelMode.DRIVING
            }, function(e, n) {
                if (n === google.maps.DistanceMatrixStatus.OK) {
                    var o = e.rows[0].elements[0].duration.text;
                    console.log(o), document.querySelector("#message").innerHTML = "Estas a " + o + " de <span class='dancing-script medium'>Evolution</span>";
                }
            });
        });
    });
}(), $.fn.formObject = function() {
    var e = {};
    return $.each($(this).serializeArray(), function(r, n) {
        e[n.name] = n.value || "";
    }), e;
}, navigator.serviceWorker && navigator.serviceWorker.register("sw.js"), function() {
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
}(), function() {
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