import $ from "jquery";


let team = [{
    id: "Clara",
    text: "rwerwerfrsgrger"
}, {
    id: "Sam",
    text: "rfryjryjrtysgrger"
}, {
    id: "Ryan",
    text: "rfrsg25d2dft54rger"
}, {
    id: "Jake",
    text: "rfrs4rtwrtfwergrger"
}, {
    id: "Zara",
    text: "rfrs24yb3v6ertgsdfgrger"
}, {
    id: "Zina",
    text: "rfr2d34d24d23r4wsgrger"
}];


$(function () {


    $(".person-item").hover(function (e) {

        $('[data-toggle="popover"]').popover("hide");

        let personName = "";
        let aboutPerson = "";
        let social = "";

        let currentPerson = e.target.getAttribute("id")


        team.forEach(function (item, i) {

            if (item.id === currentPerson) {

                personName = item.id;
                aboutPerson = item.text;
            }
        })


        $(this).popover({
            trigger: 'manual',
            animation: true,
            content: " ",
            template: '<div class="popover" ' +
                'role="tooltip">' +
                '<div class="arrow"></div>' +
                '<h3 class="popover-title">' + personName + '</h3>' +
                '<p class="popover-text">' + aboutPerson + '</p>' +
                '<ul class="popover-social">' +
                '<li><i class="fab fa-facebook-f"></i><li/> ' +
                '<li><i class="fab fa-twitter"></i><li/> ' +
                '<li><i class="fas fa-basketball-ball"></i><li/> ' +
                '<li><i class="far fa-envelope"></i><li/> ' +

                '</ul>' +
                '<div class="popover-body"></div>' +
                '</div>'
        });

        $(this).popover("show");

    });


    $(".person-item").mouseout(function (e) {

        let nextElement = e.relatedTarget.getAttribute("class");

        console.log(nextElement);
        if (nextElement !== "popover bs-popover-bottom fade show" && nextElement !== "popover-body" &&
            nextElement !== "arrow" && nextElement !== "popover-text" && nextElement !== "popover-social" &&
            nextElement !== "popover-title" &&
            nextElement !== "popover-social" &&
            nextElement !== "fa-facebook-f" &&
            nextElement !== "fa-twitter" &&
            nextElement !== "fa-basketball-ball" &&
            nextElement !== "fa-envelope"&&
            nextElement !== null) {
            $(this).popover("hide");
        }

    });


})