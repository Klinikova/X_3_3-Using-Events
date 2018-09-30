var $ = function(id){
    return document.getElementById(id);
}

var processInfo = function()
{
    var image = $("myimg"); 
    var gender = $("gender");

    if(gender.value == "male"){
        image.src = "http://profperry.com/testimages/male.jpg"; 
    }
    else if(gender.value == "female"){
        image.src = "http://profperry.com/testimages/female.jpg"; 
    }
    else if(gender.value == "droid"){
        image.src = "http://profperry.com/testimages/droid.jpg"; 
    }
    else{
        image.src = "";
    }
}


window.onload = function ()
{
	$("gender").onchange = processInfo;  
      
}