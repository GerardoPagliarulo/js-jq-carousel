$(document).ready(function () {

    // References
    var firstImage = $('.first-image');
    var nextImage = $('.next-image');
    var lastImage = $('.last-image');
    var arrowRight = $('.arrow-right');
    var arrowLeft = $('.arrow-left');

    arrowRight.click( function () {
        if (firstImage.hasClass('active')) {
            firstImage.removeClass('active').next().addClass('active');
        }
        else if (nextImage.hasClass('active')) {
            nextImage.removeClass('active').next().addClass('active');
        }
        else if (lastImage.hasClass('active')) {
            lastImage.removeClass('active');
            firstImage.addClass('active');
        }
    });
    
    arrowLeft.click( function () {
        if (firstImage.hasClass('active')) {
            firstImage.removeClass('active');
            lastImage.addClass('active');
        }
        else if (lastImage.hasClass('active')) {
            lastImage.removeClass('active').prev().addClass('active');
        }
        else if (nextImage.hasClass('active')) {
            nextImage.removeClass('active').prev().addClass('active');
        }
    });

    $(document).keydown(function (e) { 
        if (e.keyCode == 39 && firstImage.hasClass('active')) {
            firstImage.removeClass('active').next().addClass('active');
        }
        else if (e.keyCode == 39 && nextImage.hasClass('active')) {
            nextImage.removeClass('active').next().addClass('active');
        }
        else if (e.keyCode == 39 && lastImage.hasClass('active')) {
            lastImage.removeClass('active');
            firstImage.addClass('active');
        }

        if (e.keyCode == 37 && firstImage.hasClass('active')) {
            firstImage.removeClass('active');
            lastImage.addClass('active');
        }
        else if (e.keyCode == 37 && lastImage.hasClass('active')) {
            lastImage.removeClass('active').prev().addClass('active');
        }
        else if (e.keyCode == 37 && nextImage.hasClass('active')) {
            nextImage.removeClass('active').prev().addClass('active');
        }

        //console.log(e.keyCode);
    });
});