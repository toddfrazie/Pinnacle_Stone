var main = function() {
    //Displays Detailed information about hunters crafters and explorers
$('#huntLearnMore').click(function(){
    $('#craftExpandInfo').hide();
    $('#exploreExpandInfo').hide();
    $('#huntExpandInfo').toggle();
});

$('#craftLearnMore').click(function(){
    $('#huntExpandInfo').hide();
    $('#exploreExpandInfo').hide();
    $('#craftExpandInfo').toggle();
});

$('#exploreLearnMore').click(function(){
    $('#huntExpandInfo').hide();
    $('#craftExpandInfo').hide();
    $('#exploreExpandInfo').toggle();
});




























}
$(document).ready(main);