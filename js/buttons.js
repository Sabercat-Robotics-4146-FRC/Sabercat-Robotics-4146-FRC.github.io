$(document).ready(function(){
  console.log("test");
  console.log( $ );
  $("#csabercats").show();
  $("#ctaxcredit").hide();
  $("#csponsorships").hide();
  $("#cfirst").hide();
  $("#bsabercats").click(function(){
    $("#csabercats").show();
    $("#ctaxcredit").hide();
    $("#csponsorships").hide();
    $("#cfirst").hide();
  });
  $("#btaxcredit").click(function(){
    $("#csabercats").hide();
    $("#ctaxcredit").show();
    $("#csponsorships").hide();
    $("#cfirst").hide();
  });
  $("#bsponsorships").click(function(){
    $("#csabercats").hide();
    $("#ctaxcredit").hide();
    $("#csponsorships").show();
    $("#cfirst").hide();
  });
  $("#bfirst").click(function(){
    $("#csabercats").hide();
    $("#ctaxcredit").hide();
    $("#csponsorships").hide();
    $("#cfirst").show();
  });

  // Scroll effects
  //Click event to scroll to top
	$('.scroll-to').click(function(){
		$('html, body').animate({scrollTop : $("#start").offset().top}, 500);
		return false;
	});
});
// $("#hide").click(function(){
//     $("p").hide();
// });
//
// $("#show").click(function(){
//     $("p").show();
// });
// cfirst
// csponsorships
// ctaxcredit
// csabercats
