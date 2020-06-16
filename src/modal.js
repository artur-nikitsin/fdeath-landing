import $ from "jquery"
import "bootstrap"
import "popper.js"

$(document).ready(function () {
    $('.featured-works__examle-item_active').on('click', function () {
        $('#galleryModal').modal('show')
    })
});
