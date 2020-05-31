import $ from "jquery"
import "bootstrap"
import "popper.js"

$(document).ready(function () {
    $('.show-modal').on('click', function () {
        $('#galleryModal').modal('show')
    })
});
