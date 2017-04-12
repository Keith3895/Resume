var waypoint = new Waypoint({
  element: document.getElementById('trigger'),
  handler: function(direction) {
    $(".navbar").toggleClass("hid");
    $(".navbar").toggleClass("nothid");
    console.log('Scrolled to waypoint!');
  }
});
$('body').scrollspy({ target: '#navbar' });


// for(var i=0;i<=3;i++){
//   $(".right"+i).css({'left':'800px'});
//   $(".left"+i).css({'right':'800px'});
// }



window.sr = ScrollReveal();
sr.reveal('.reveal',{ duration: 600 });
// sr.reveal('.reveal1');
var waypoint1 = new Waypoint({
  element: document.getElementById('marks'),
  handler: function(direction) {
    $(".panel").css({'opacity':'1'});
    sr.reveal('.col-md-3', { duration: 2000 }, 300);
    console.log('Scrolled to waypoint2!');
  }
});
 
$('#skills').on('inview', function(event, isInView) {
  if (isInView) {
    var context = document.getElementById('skills').getContext('2d');
    var skillsChart = new Chart(context).Doughnut(DoData,{
      segmentShowStroke: false,
    animateRotate: true,
    animateScale: true,
    animationSteps : 100,
    animationEasing : "easeOutBounce",
    });
    document.getElementById('js-legend').innerHTML = skillsChart.generateLegend();
  }
});

$('#skills2').on('inview', function(event, isInView) {
  if (isInView) {
    var context = document.getElementById('skills2').getContext('2d');
    var skillsChart = new Chart(context).PolarArea(pieData,{
      segmentShowStroke: false,
    animateRotate: true,
    animateScale: true,
    animationSteps : 100,
    animationEasing : "easeOutBounce",
    });
    document.getElementById('js-legend2').innerHTML = skillsChart.generateLegend();
  }
});
// Radar Data
var radarData = {
  labels : ["Read","Write","Speak"],
  datasets : [
    {
      label:"Kanada",
      fillColor: "rgba(179,181,198,0.2)",
      strokeColor: "rgba(255,181,198,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [0,0,50]
    },
    {
      label:"Hindi",
       fillColor: "rgba(63,169,245,.1)",
            strokeColor: "rgba(63,169,245,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [50,50,70]
    },
    {
      label:"English",
       fillColor: "rgba(102,45,145,.1)",
       strokeColor: "rgba(102,45,145,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [70,60,80]
    }
    
    
  ]
}



var ctx = document.getElementById("extraD").getContext("2d");


var myRadarChart = new Chart(ctx).Radar(radarData,{
  ticks: {
                    beginAtZero: true
                },
  reverse: true,

});


 $('#home').on('inview', function(event, isInView) {
  if (isInView) {

  $(".anim-slider.ss").animateSlider(
      {
        autoplay  :false,
        // interval :5000,
        animations  : 
        {
          0 :   //Slide No1
          {
            // ,
            "#card1"      :
            {
              show    : "fadeInUpRightBig",
              // hide     : "fadeOutDownBig",
              delayShow : "delay1s"
            },
            "#card2"      :
            {
              show    : "fadeInUpLeftBig",
              // hide     : "fadeOutDownBig",
              delayShow : "delay1s"
            },
            "#card3"      :
            {
              show    : "slideInRight",
              // hide     : "fadeOutDownBig",
              delayShow : "delay1-5s"
            },
            "#card4"      :
            {
              show    : "slideInLeft",
              // hide     : "fadeOutDownBig",
              delayShow : "delay1-5s"
            },
            "#card5"      :
            {
              show    : "fadeInUpLarge",
              // hide     : "fadeOutDownBig",
              // delayShow : "delay2s"
            },
            "#card6"      :
            {
              show    : "fadeInDown",
              // hide     : "fadeOutDownBig",
              // delayShow : "delay2s"
            }
          }
        }
      });


window.setTimeout(function(){
  
  for(i=0;i<=6;i++){
  
  $("#card"+i).hover(function(){
    $(this).addClass("flipped");
    $(".as").removeClass("as animated");
  },function(){
    $(this).removeClass("flipped");
  });
}  
},2000);

//     if (/Mobi/.test(navigator.userAgent)) {
//         moveLeft("right1",400,-67/2);
//       moveRight("left1",400,-67/2);
//       window.setTimeout(function(){
//             moveLeft("right2",600,-67/2);
//       moveRight("left2",600,-67/2);
//               },00);
//       window.setTimeout(function(){
//       moveLeft("right3",600,-67/2);
//       moveRight("left3",600,-67/2); 
//               },00);
//         $('.six').css({'right': '-811px','top':' -82px'});
//       }
//       else{
//         moveLeft("right1",600,7);
//       moveRight("left1",600,7);
//       window.setTimeout(function(){
//             moveLeft("right2",600,7);
//       moveRight("left2",600,7);
//               },100);
//       window.setTimeout(function(){
//       moveLeft("right3",600,7);
//       moveRight("left3",600,7); 
//               },1000);
//       }
  }
});



  $('a.srr').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 600);
  });



$('#topHead').on('inview', function(event, isInView) {
  if (isInView) {
      $(".anim-slider.ma").animateSlider(
      {
        autoplay  :false,
        // interval :5000,
        animations  : 
        {
          0 :   //Slide No1
          {
            "#obj1"  : 
            {
              show      : "rollIn",
              hide     : "flipOutX",
              delayShow : "delay1-5s"
            },
            "#obj2"  : 
            {
              show      : "rotateInDownLeft",
              // hide     : "flipOutX",
              delayShow : "delay2s"
            },
            "#obj3"  : 
            {
              show      : "flipInX",
              // hide     : "flipOutX",
              delayShow : "delay2-5s"
            },
            "#prof-img":
            {
              show    : "rotateInDownLeft",
              // hide     : "fadeOutDownBig",
              delayShow : "delay1s"
            },
            
            // ,
            // ".d"     :
            // {
            //  show    : "fadeInUpBig",
              // // hide    : "fadeOutDownBig",
              // delayShow : "delay1-5s"
            // }
          }
        }
      });
  }
});




$( "#go" ).click(function() {
			$(this).toggleClass('tr');

			if($(this).hasClass('tr')){
				$('.chat').addClass('tri-right');
				$( ".chat" ).animate({
				    width: "500px",
				    height:'450px',
				    // opaxcity: 0.4,
				    marginRight: "1.5em",
				    fontSize: "3em",
				    borderWidth: "10px"
				  }, 1500 );
			}else{
				$('.chat').removeClass('tri-right');
				$( ".chat" ).animate({
				    width: "0px",
				    height:'0px',
				    opaxcity: 0.4,
				    marginRight: "0in",
				    fontSize: "0em",
				    borderWidth: "0px"
				  }, 1500 );
			}
		});
