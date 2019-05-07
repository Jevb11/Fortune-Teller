$("button").click(function() {
    var username = $(".name").val();
    var movie = $(".movie").val();
    var timespermonth =  $(".number").val();
    var times = timespermonth *12*10;
    $(".answer").text("Hello " + username + " by 2020 you will have gone to the movies " + times + " times.");
    
});