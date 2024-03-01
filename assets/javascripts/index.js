$( document ).ready(function() {
	//Init waterpipe
	var smokyBG = $('#wavybg-wrapper').waterpipe({
        //Default values
        gradientStart: '#e0e0e0',
        gradientEnd: '#7d7d7d',
        smokeOpacity: 0.1,
        numCircles: 1,
        maxMaxRad: 'auto',
        minMaxRad: 'auto',
        minRadFactor: 0,
        iterations: 8,
        drawsPerFrame: 10,
        lineWidth: 2,
        speed: 1,
        bgColorInner: "#2b2b2b",
        bgColorOuter: "#000000"
    });
	$(".home").fadeIn(1000);

});


