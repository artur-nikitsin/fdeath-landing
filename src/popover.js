import $ from "jquery";

let team = [{
    id: "Clara",
    text: "rwerwerfrsgrger",
    direction: "UI Designer"
}, {
    id: "Sam",
    text: "rfryjryjrtysgrger",
    direction: "UI Designer"
}, {
    id: "Ryan",
    text: "rfrsg25d2dft54rger",
    direction: "UI Designer"
}, {
    id: "Jake",
    text: "rfrs4rtwrtfwergrger",
    direction: "UI Designer"
}, {
    id: "Zara",
    text: "rfrs24yb3v6ertgsdfgrger",
    direction: "UI Designer"
}, {
    id: "Zina",
    text: "rfr2d34d24d23r4wsgrger",
    direction: "UI Designer"
}];


$(function () {
    
    $(".person-item").on("mouseenter", function (e) {

        let _this = this;
        let personName = "";
        let personDirection = "";
        let aboutPerson = "";
        let social = "";
        let currentPerson = e.target.getAttribute("id")

        team.forEach(function (item, i) {

            if (item.id === currentPerson) {

                personName = item.id;
                personDirection = item.direction;
                aboutPerson = item.text;
            }
        })


        $(this).popover({
            trigger: "manual",
            html: true,
            animation: false,
            content: " ",
            template: '<div class="popover" ' +
                'role="tooltip">' +
                '<div class="arrow"></div>' +
                '<h3 class="popover-title">' + personName + '<span>' + personDirection + '<span></h3>' +
                '<p class="popover-text">' + aboutPerson + '</p>' +
                '<ul class="popover-social">' +
                '<li><a href=""><i class="fab fa-facebook-f"></a></i><li/> ' +
                '<li><a href=""><i class="fab fa-twitter"></i></a><li/> ' +
                '<li><a href=""><i class="fas fa-basketball-ball"></a></i><li/> ' +
                '<li><a href=""><i class="far fa-envelope"></i></a><li/> ' +

                '</ul>' +
                '<div class="popover-body"></div>' +
                '</div>'
        })


        $(this).popover("show");

        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });

    }).on("mouseleave", function () {
        let _this = this;

        if (!$(".popover:hover").length) {
            $(_this).popover("hide");
        }

    });

})
;