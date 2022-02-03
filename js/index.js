setTimeout(function(){
    $("#iam").attr("class", "swe-shine");
    setTimeout(function(){
        $("#iam").removeClass("swe-shine");
    },1000);
}, 2500);