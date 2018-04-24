$(document).ready(function() {

    let isOnCaseStudies;

    let caseStudies= $('#case-studies');
    let caseStudyItems = caseStudies.find('.items');
    caseStudies.mouseenter(function(){
        isOnCaseStudies = true;
        caseStudies.addClass('mouseHover');
    });
    caseStudies.mouseleave(function(){
        isOnCaseStudies = false;
        caseStudies.removeClass('mouseHover');
    });

    $(document).on('mousemove', function(event) {
        if (isOnCaseStudies) {
            let width = $(document).width();
            let percentageWidth = (event.pageX / width) * 100;
            let itemsTransform = - (percentageWidth - 50) * 3.5;
            caseStudyItems.css('transform', 'translate(' + itemsTransform + 'px , 0px)');
        } else {
            caseStudyItems.css('transform', 'translate(0px , 0px)');
        }
    });
});

