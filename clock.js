
	var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()

	if (minutes < 10){
	minutes = "0" + minutes}
	if (hours > 12){
		hours = hours - 12
	}



    // Time override
    //var hours = 5
    //var minutes = 45
    // the line below will need to be removed
	//confirm(hours+":"+minutes)
    

    var one = 0
    var one2 = 0
    var two = 0
    var three = 0
    var five = 0

    if (hours === 1){
    	var one = 1
    }
    if (hours === 2){
    	var two = 1
    }
    if (hours === 3){
    	var three = 1
    }
    if (hours === 4){
    	var three = 1
    	var one2 = 1
    }
    if (hours === 5){
    	var five = 1
    }
    if (hours === 6){
    	var three = 1
    	var two = 1 
    	var one2 = 1 
    }
    if (hours === 7){
    	var one = 1
    	var five = 1
    	var one2 = 1
    }
    if (hours === 8){
    	var three = 1
    	var five = 1
    }
    if (hours === 9){
    	var one = 1
    	var one2 = 1
        var two = 1
        var five = 1
    }
    if (hours === 10){
    	var two = 1
    	var three = 1
    	var five = 1
    }
    if (hours === 11){
    	var one = 1
    	var two = 1
    	var three = 1
    	var five = 1
    }
    if (hours === 12){
    	var one = 1
    	var one2 = 1
    	var two = 1
    	var three = 1
    	var five = 1
    }







    


    if (minutes >= 5 && minutes < 10){
    	var one = one + 2
    }
    if (minutes >= 10 && minutes < 15){
    	var two = two + 2
    }
    if (minutes >= 15 && minutes < 20){
    	var two = two + 2
    	var one2 = one2 + 2
    }
    if (minutes >= 20 && minutes < 25){
    	var one = one + 2
    	var three = three + 2
    }
    if (minutes >= 25 && minutes < 30){
    	var five = five + 2
    }
    if (minutes >= 30 && minutes < 35){
    	var three = three + 2
    	var two = two + 2
    	var one = one + 2
    }
    if (minutes >= 35 && minutes < 40){
    	var five = five + 2
    	var one = one + 2
    	var one2 = one2 + 2
    }
    if (minutes >= 40 && minutes < 45){
    	var five = five + 2
    	var three = three + 2
    }		
    if (minutes >= 45 && minutes < 50){
    	var five = five + 2
    	var three = three + 2
    	var one = one + 2
    }
    if (minutes >= 50 && minutes < 55){
    	var two = two + 2
    	var five = five + 2
    	var three = three + 2
    }
    if (minutes >= 55 && minutes < 60){
    	var one = one + 2
    	var two = two +2
    	var three = three + 2
    	var five = five + 2
    }

   



    if (one === 1){
    	document.getElementById("one").style.background = "red";
    }
    if (one === 2){
    	document.getElementById("one").style.background = "blue";
    }
    if (one === 3){
        document.getElementById("one").style.background = "purple";
    }


    if (one2 === 1){
        document.getElementById("one2").style.background = "red";
    }
    if (one2 === 2){
        document.getElementById("one2").style.background = "blue";
    }
    if (one2 === 3){
        document.getElementById("one2").style.background = "purple";
    }

    if (two === 1){
        document.getElementById("two").style.background = "red";
    }
    if (two === 2){
        document.getElementById("two").style.background = "blue";
    }
    if (two === 3){
        document.getElementById("two").style.background = "purple";
    }

    if (three === 1){
        document.getElementById("three").style.background = "red";
    }
    if (three === 2){
        document.getElementById("three").style.background = "blue";
    }
    if (three === 3){
        document.getElementById("three").style.background = "purple";
    }

    if (five === 1){
        document.getElementById("five").style.background = "red";
    }
    if (five === 2){
        document.getElementById("five").style.background = "blue";
    }
    if (five === 3){
        document.getElementById("five").style.background = "purple";
    }






    console.log("one is " +one)
    console.log("one2 is " +one2)
    console.log("two is " +two)
    console.log("three is " +three)
    console.log("five is " +five)

    if (one === 0){
        var random = Math.random();
        if (random < .33){
            document.getElementById("one").style.background = "orange";
        }
        if (random > .67){
            document.getElementById("one").style.background = "yellow";
        }
        if (random >.33 && random <.67){
            document.getElementById("one").style.background = "green";
        }
    }

    if (one2 === 0){
        var random = Math.random();
        if (random < .33){
            document.getElementById("one2").style.background = "orange";
        }
        if (random > .67){
            document.getElementById("one2").style.background = "yellow";
        }
        if (random >.33 && random <.67){
            document.getElementById("one2").style.background = "green";
        }
    }
    

    if (two === 0){
        var random = Math.random();
        if (random < .33){
            document.getElementById("two").style.background = "orange";
        }
        if (random > .67){
            document.getElementById("two").style.background = "yellow";
        }
        if (random >.33 && random <.67){
            document.getElementById("two").style.background = "green";
        }
    }
    

    if (three === 0){
        var random = Math.random();
        if (random < .33){
            document.getElementById("three").style.background = "orange";
        }
        if (random > .67){
            document.getElementById("three").style.background = "yellow";
        }
        if (random >.33 && random <.67){
            document.getElementById("three").style.background = "green";
        }
    }
    

    if (five === 0){
        var random = Math.random();
        if (random < .33){
       document.getElementById("five").style.background = "orange";
        }
        if (random > .67){
            document.getElementById("five").style.background = "yellow";
        }
        if (random >.33 && random <.67){
            document.getElementById("five").style.background = "green";
        }
    }
    
    
 function autoRefresh()
{
    window.location = window.location.href;
}
 
 setInterval('autoRefresh()', 30000); // this will reload page after every 30 secounds; Method I
    