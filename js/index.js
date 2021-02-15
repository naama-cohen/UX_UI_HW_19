console.log("Your index.js file is loaded correctly!");
$("#skills").click(function() {
    $("#skills").css({'font-size':"25px"});
    $("#home").css({'font-size':"16px"});
    $("#work").css({'font-size':"16px"});
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#myskills").offset().top,
    }, 2000);
});

$("#work").click(function() {
    $("#work").css({'font-size':"25px"});
    $("#home").css({'font-size':"16px"});
    $("#skills").css({'font-size':"16px"});
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#mywork").offset().top,
    }, 2000);
});

$("#home").click(function() {
    $("#home").css({'font-size':"25px"});
    $("#skills").css({'font-size':"16px"});
    $("#work").css({'font-size':"16px"});
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#myhome").offset().top,
    }, 2000);
});
