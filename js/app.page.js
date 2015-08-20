(function ($, $window, $document) {
   
})(jQuery, jQuery(window), jQuery(document));

(function ($, $window, $document) {
    function Square() {
        this.objects = [];

        this.resize = function (el) {
            var $e = $(el);
            var w = $e.width();
            $e.height(w);
            $e.trigger('brick.resize');
        };
    }

    Square.prototype = {
        add: function (el) {
            this.objects.push(el);
            this.resize(el);
        },

        resizeEv: function () {
            var t = this;
            $.when(t.objects, function () {t.resize(this)}).then($.each)
                .done(function () {
                    $window.trigger('resizeEnd.square')
                });
        }
    };

    var sq = new Square();

    $window.on('resize.md', function () {
        sq.resizeEv();
    });

    $.fn.square = function () {
        if (this.length) {
            this.each(function () {
                sq.add(this);
            });
        }
    };
})(jQuery, jQuery(window), jQuery(document));

(function ($) {
    var hover = function (e) {
        //e.preventDefault();
        $('.b-brick-item.hover').removeClass('hover');
        $(this).closest('.b-brick-item').addClass('hover').find('a')
            .on('click', function () {
                $(this).off('click');
                return false;
            })
            .on({'touchend': unhover});
    };

    var unhover = function (e) {
        $(this).closest('.b-brick-item').find('a').off('click');
    };

})(jQuery);