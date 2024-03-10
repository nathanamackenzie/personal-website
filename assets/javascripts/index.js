var sessionID = Date.now()

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
	$(".home").fadeIn(2000);

    sessionID = Date.now()
     
   
});

console.log(getNow())

function test(blah){
    console.log(sessionID)
    
    fetch("https://ys8no68323.execute-api.us-east-1.amazonaws.com/test/visit",{
        method: "POST",
        body: JSON.stringify({
            "TableName": "test",
            "Item": {
    	        "sessionID": {
        	        "S":"1"
                },
                "epoch":{
        	        "N": Date.now().toString()
                },
                "action":{
        	        "S": blah
                }
            }
        })
    }).catch(error => { console.log(error); });
}

function getNow(){

    var currentdate = new Date(); 
    var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate()  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    return datetime;
}
