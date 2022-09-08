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

  var gender_ctx = document.getElementById("gender-chart").getContext('2d');
  var gender_chart = new Chart(gender_ctx,{
    type: 'pie',

    data: {
      labels: ["Male", "Female"],
      datasets: [{
        label: "Gender",
        backgroundColor: ['rgb(65, 202, 244)','rgb(255, 99, 132)'],
        borderColor: 'rgb(0, 0, 0)',
        data: [7, 8]
      }]
    },
    options: {}
});

var job_ctx = document.getElementById("job-chart").getContext('2d');
var job_chart = new Chart(job_ctx,{
  type: 'pie',

  data: {
    labels: ["Programmers", "Mechanical", "Electrical", "Business", "Safety" ],
    datasets: [{
      label: "Divisions",
      backgroundColor: ['rgb(74, 195, 232)', 'rgb(65, 102, 70)', 'rgb(23, 130, 183)', 'rgb(128, 33, 196)', 'rgb(255, 140, 0)'],
      borderColor: 'rgb(0, 0, 0)',
      data: [4, 6, 1, 4, 1]
    }]
  },
  options: {}
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
