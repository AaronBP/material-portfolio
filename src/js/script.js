$(document).ready(function() {

    //*** Local vars ***/
    let isOnCaseStudies = false;
    let caseStudies = $('#case-studies');
    let caseStudyItems = caseStudies.find('.items');
    let serviceSection = $('#services');
    let services = serviceSection.find('.item');
    //*** END - Local vars ***/


    //*** Case Studies section animate ***//
    // caseStudies.mouseenter(function(){
    //     isOnCaseStudies = true;
    //     caseStudies.addClass('mouseHover');
    // });
    // caseStudies.mouseleave(function(){
    //     isOnCaseStudies = false;
    //     caseStudies.removeClass('mouseHover');
    //     caseStudyItems.css('transform', 'translate(0px , 0px)');
    // });
    $(document).on('mousemove', function(event) {
        // if (isOnCaseStudies) {
            transformCaseStudies(event);
        // }
    });
    function transformCaseStudies (event) {
        let width = $(document).width();
        let percentageWidth = (event.pageX / width) * 100;
        let itemsTransform = - (percentageWidth - 50) / 4;
        caseStudyItems.css('transform', 'translate(' + itemsTransform + '% , 0px)');
    }
    //*** END - Case Studies section animate ***//

    //*** Services section animate ***//
    services.on('click', function(e) {
        let itemClicked = $(e.target).closest('.item');
        if (itemClicked.hasClass('expanded')) {
            itemClicked.removeClass('expanded');
        } else {
            services.removeClass('expanded'); // remove class from any already expanded items
            itemClicked.addClass('expanded');
        }
    });
    //*** END - Services section animate ***//
});

