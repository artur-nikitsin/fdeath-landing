import $ from "jquery";


let team = [{
    id: "Clara",
    text: "rfrsgrger"
}, {
    id: "Sam",
    text: "rfrsgrger"
}, {
    id: "Ryan",
    text: "rfrsgrger"
}, {
    id: "Jake",
    text: "rfrsgrger"
}, {
    id: "Zara",
    text: "rfrsgrger"
}, {
    id: "Zina",
    text: "rfrsgrger"
}];


$(function () {

    let personName = "";
    let aboutPerson = "";
    let social = "";


    $(".person-item").popover({
        trigger: 'manual',
        animation: true,
        content: " ",
        template: '<div class="popover" ' +
            'role="tooltip">' +
            '<div class="arrow"></div>' +
            '<h3 class="popover-header"></h3>' +
            '<p class="popover-text"></p>' +
            '<ul class="popover-social"></ul>' +
            '<div class="popover-body"></div>' +
            '</div>'
    });


    $(".person-item").hover(function (e) {

        let currentPerson = e.target.getAttribute("id")

        console.log(currentPerson);

        team.forEach(function (item, i) {

            if (item.id === currentPerson) {
                console.log(item);
                personName = item.id;
                aboutPerson = item.text;
            }
        })


        $('[data-toggle="popover"]').popover("hide");

        $(".popover-text").text(personName);

        $(this).popover("show");

    });


    $(".person-item").mouseout(function (e) {

        let nextElement = e.relatedTarget.getAttribute("class");

        if (nextElement !== "popover bs-popover-bottom fade show" && nextElement !== "popover-body" &&
            nextElement !== "arrow" && nextElement !== "popover-text" && nextElement !== "popover-social") {
            $(this).popover("hide");

        }

    });


})