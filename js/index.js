


$('.button').click(function () {
  $(this).parent().toggleClass('expand');
});





jQuery(function($){

    // Lightbox Triggers
    $(".PopVid1").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid2").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid3").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}



function expandAll(){
  $(".collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});
}

function collapseAll(){
  $(".collapsible-header").removeClass(function(){
    return "active";
  });
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}




jQuery(function($){

    // Lightbox Triggers
    $(".PopVid4").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}



jQuery(function($){

    // Lightbox Triggers
    $(".PopVid5").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid6").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}

jQuery(function($){

    // Lightbox Triggers
    $(".PopVid7").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}

jQuery(function($){

    // Lightbox Triggers
    $(".PopVid8").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}

jQuery(function($){

    // Lightbox Triggers
    $(".PopVid9").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}

jQuery(function($){

    // Lightbox Triggers
    $(".PopVid10").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid11").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid12").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid13").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid14").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}


jQuery(function($){

    // Lightbox Triggers
    $(".PopVid15").videoBox();
});
/* ========================================================================= */
/* FUNCTION TO CREATE LIGHTBOX */
/* ========================================================================= */

jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});


/* ========================================================================= */
/* RESIZE IFRAME VIDEO FUNCTION */
/* ========================================================================= */
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
}
