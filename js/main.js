$(document).ready(() => {

$('#tml-text').hide();
$('#tc-text').hide();
$('#nwts-text').hide();
$('#iyrt-text').hide();
$('.soundtrack').hide();

$('.album').on('click', (event) => {
  $('#tml-text').hide();
  $('#tc-text').hide();
  $('#nwts-text').hide();
  $('#iyrt-text').hide();
  $('.soundtrack').hide();

//$('#tml').click (function() {
  //$('#soundtrack1').slideToggle();
//});

  switch ($(event.currentTarget).attr("id")) {
    case "tml":
    $('#tml-text').slideToggle();
    $("#soundtrack1").show();
    break;

    case "tc":
    $('#tc-text').slideToggle();
    $("#soundtrack2").show();
    break;

    case "nwts":
    $('#nwts-text').slideToggle();
    $("#soundtrack3").show();
    break;

    case "iyrt":
    $('#iyrt-text').slideToggle();
    $("#soundtrack4").show();
    break;

}

$('audio').each(function() {
    this.pause();
    this.currentTime = 0;
});


});
});
