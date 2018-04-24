$(document).ready(function() {

    let isOnCaseStudies = false;
    let caseStudies= $('#case-studies');
    let caseStudyItems = caseStudies.find('.items');

    caseStudies.mouseenter(function(){
        isOnCaseStudies = true;
        caseStudies.addClass('mouseHover');
    });
    caseStudies.mouseleave(function(){
        isOnCaseStudies = false;
        caseStudies.removeClass('mouseHover');
        caseStudyItems.css('transform', 'translate(0px , 0px)');
    });

    $(document).on('mousemove', function(event) {
        if (isOnCaseStudies) {
            transformCaseStudies(event);
        }
    });

    function transformCaseStudies (event) {
        let width = $(document).width();
        let percentageWidth = (event.pageX / width) * 100;
        let itemsTransform = - (percentageWidth - 50) / 4;
        caseStudyItems.css('transform', 'translate(' + itemsTransform + '% , 0px)');
    }
});

