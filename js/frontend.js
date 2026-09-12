(function ($) {
    "use strict";
	
    var isEditMode = false;

	var heading_js = function ($scope, $) {
        // Draw Line Screen Event js
        if (document.querySelector(".draw-line")) {
            function handleIntersection(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
						setTimeout(() => {
                        	entry.target.classList.add("start-draw");
						}, 300);
                    } else {
                        entry.target.classList.remove("start-draw");
                    }
                });
            }
            const drawLines = document.querySelectorAll(".draw-line");
            const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
            drawLines.forEach(drawLine => {
                observer.observe(drawLine);
            });
        }
    };


    $(window).on('elementor/frontend/init', function () {
        if ( elementorFrontend.isEditMode() ) {
			isEditMode = true;
		}
		elementorFrontend.hooks.addAction('frontend/element_ready/rs-heading.default', heading_js);
       
    });
    
}(jQuery));