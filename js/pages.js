(function ($) {
    var top = 0;

    $(document).ready(function () {
        var contentHeight = $('.right').height(),
            contents = $('.right > .content').length;

        top = (0 - (contentHeight * (contents - 1)));

        $('.right').css('top', top + 'px');
    });

    $(window).resize(function () {
        var contentHeight = $('.right').height(),
            contents = $('.right > .content').length;

        top = (0 - (contentHeight * (contents - 1)));

        $('.right').css('top', (top + $(window).scrollTop()) + 'px');
    });

    $(window).scroll(function () {
        $('.right').css('top', (top + $(window).scrollTop()) + 'px');
    });

})(jQuery);