$(document).ready(function() {

    //*** Local vars ***/
    let caseStudies = $('#case-studies');
    let caseStudyItems = caseStudies.find('.items');
    let serviceSection = $('#services');
    let services = serviceSection.find('.item');
    let navExpanded = false;
    let fixedNav = $('nav.fixed-nav');
    let contactNavButton = $('nav .right .contact');
    let width = $(document).width();
    //*** END - Local vars ***/

    $(window).scroll(function() {
        if (!navExpanded && $(document).scrollTop() > 400) {
            navExpanded = true;
            fixedNav.addClass('expanded');
        } else if (navExpanded && $(document).scrollTop() < 400) {
            navExpanded = false;
            fixedNav.removeClass('expanded');
        }
        if ($(document).scrollTop() > 100) {
            $('#summary').find('.hello').addClass('animate')
        }
    });
    //*** Case Studies section animate ***//
    $(document).on('mousemove', function(event) {
        width = $(document).width();
        if (width > 992) {
            transformCaseStudies(event);
        }
    });
    function transformCaseStudies (event) {
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
    contactNavButton.on('click', function() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
    //*** Scroll to contact ***//

});

