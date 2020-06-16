import $ from "jquery";

let team = [{
    id: "Clara",
    name:"Clara",
    text: "Lorem Ipsum is not simply is an action designer random text    It has roots in a peace.",
    direction: "UI Designer"
}, {
    id: "Rayhan",
    name:"Al Rayhan",
    text: "Lorem Ipsum is not simply is an action designer random text    It has roots in a peace.",
    direction: "UI Designer"
}, {
    id: "Ryan",
    name:"Ryan",
    text: "Lorem Ipsum is not simply is an action designer random text    It has roots in a peace.",
    direction: "UI Designer"
}, {
    id: "Jake",
    name:"Jake",
    text: "Lorem Ipsum is not simply is an action designer random text    It has roots in a peace.",
    direction: "UI Designer"
}, {
    id: "Zara",
    name:"Zara",
    text: "Lorem Ipsum is not simply is an action designer random text    It has roots in a peace.",
    direction: "UI Designer"
}, {
    id: "Zina",
    name:"Zina",
    text: "Lorem Ipsum is not simply is an action designer random text    It has roots in a peace.",
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

                personName = item.name;
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
                '<h3 class="popover__title"><span class="person-name">' + personName +
                '<span> <span class="popover__direction">  /' + personDirection + '<span></h3>' +
                '<p class="popover__text">' + aboutPerson + '</p>' +
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