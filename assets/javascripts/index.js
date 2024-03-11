var sessionID = Date.now().toString();

$( document ).ready(function() {

    postAPI([["action", {'S': "load"}], 
            ["resource", {"S": "homepage"}]]);

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
	$(".home").fadeIn(1500);
     
});

$("#linkedin").on("click",function(){
    postAPI([["action", {'S': "click"}], 
            ["resource", {"S": "linkedin"}]]);
})

$("#email").on("click",function(){
    postAPI([["action", {'S': "click"}], 
            ["resource", {"S": "email"}]]);
})

$("#github").on("click",function(){
    postAPI([["action", {'S': "click"}], 
            ["resource", {"S": "github"}]]);
})


function postAPI(jsonArgs){

    let jsonRequest = {
        "TableName": "visit_log",
        "Item": {
            "sessionID": {
                "N": sessionID
            },
            "date-time":{
                "S": getDateTime()
            }
        }
    };

    for(let i = 0; i < jsonArgs.length; i++){
        jsonRequest.Item[jsonArgs[i][0]] = jsonArgs[i][1]
    }

    fetch("https://0wha124295.execute-api.us-east-1.amazonaws.com/production/visit",{
        method: "POST",
        body: JSON.stringify(jsonRequest)
    }).catch(error => { console.log(error); });
}

function getDateTime(){

    var currentdate = new Date(); 
    var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate()  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    return datetime;
}
