$(".start-text").hover(function(){
    $(".start-text").css("color","lightgreen");
});

$(".electrical").click(function() {
    $(".task").show();
    $(".start").hide();
    $("button").hide();
});

$(".admin").click(function() {
    $(".admin-task").show();
    $(".start").hide();
    $("button").hide();
});

$(".admin-task").click(function() {
    $(".admin-done").show();
});

$(".admin-done").dblclick(function() {
    $(".kill").show();
    $(".admin-task").hide();
    $(".admin-done").hide();
});
$(".kill").hover(function() {
    $(".meeting").show();
    $(".kill").hide();
});
$(".meeting").click(function() {
    $(".game-over").show();
    $(".meeting").hide();
});


$(".task").click(function() {
    $(".task-done").show();
});

$(".task-done").dblclick(function() {
    $(".death").fadeIn();
    $(".task").fadeOut();
    $(".task-done").fadeOut();
});

$(".death").hover(function() {
    $(".meeting").show();
    $(".death").hide();
});

$(".meeting").click(function() {
    $(".game-over").show();
    $(".meeting").hide();
});



$(".task").hide();
$(".task-done").hide();
$(".death").hide();
$(".meeting").hide();
$(".game-over").hide();
$(".admin-task").hide();
$(".admin-done").hide();
$(".kill").hide();