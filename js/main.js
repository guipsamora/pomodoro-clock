$(document).ready(function(){
//Göra så att tidnedränkningen är centrerad, och att work-time försvinner när paus-time tar över.
//Fixat till modal.
//

	var workTime = 25;

	$("#work-time").text(workTime + " min");
	$("#workTimeMinus").click(function(){
		workTime -= 1;
    while (workTime <= -1){
      workTime = 0;
    }
		$("#work-time").text(workTime + " min");
	});
	$("#workTimePlus").click(function(){
		workTime += 1;
		$("#work-time").text(workTime + " min");
	});



$("#start").click(function(){
var display = $("#display-time")
startTimer(workTime*60, display);
});

function startTimer(duration, display) {
  var timer = duration;
  var minutes;
  var seconds;
  var workTimeInSec = workTime * 60;
  
    var startInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.text(minutes + ":" + seconds);
    procentOfTime(workTimeInSec, timer);
    $("#reset").click(function(){
    $("#work-time").text(workTime + " min");
    clearInterval(startInterval);
  });
    if (--timer < 0) {
      clearInterval(startInterval);
      $("#sound").html("<audio controls autoplay><source src=\"alarm.mp3\" type=\"audio/mpeg\"></audio>");
      $(".timer-countdown").css("display", "none");
      var displayPaus = $("#ny-paus");
      startPausTimer(pausTime * 60, displayPaus);
    }
  }, 1000);
}

var pausTime = 5;


$("#paus-time").text(pausTime + " min");
$("#pausTimeMinus").click(function(){
  pausTime -= 1;
  while (pausTime <= -1){
      pausTime = 0;
    }
  $("#paus-time").text(pausTime + " min");
});

$("#pausTimePlus").click(function(){
  pausTime += 1;
  $("#paus-time").text(pausTime + " min");
});

$("#start-paus").click(function(){
  var displayPaus = $("#ny-paus");
  startPausTimer(pausTime * 60, displayPaus);
});

  var startPausTimer = function(time, display){
      var timer = time;
      var minutes;
      var seconds;
      var pausTimeInSec = pausTime * 60;

    var startPausInterval = setInterval(function(){
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      if (seconds < 10){
        seconds = "0" + seconds;
      }
      if (minutes < 10){
        minutes = "0" + minutes;
      }
      procentOfTime(pausTimeInSec, timer);
      display.text(minutes + ":" + seconds);

if (--timer < 0) {
      clearInterval(startPausInterval);
      $("#alarm").html("<h1>Refresh and get<br>to work again</h1>");
    }

    }, 1000);
  }

function procentOfTime(total, nuvarande){
  var procent = nuvarande / total;
  if (procent < 0.9){
    $("#procent-10").addClass("procent-10");
  }
  if (procent < 0.8){
   $("#procent-20").addClass("procent-20");
  }
  if (procent < 0.7){
   $("#procent-30").addClass("procent-30"); 
  }
  if (procent < 0.6){
   $("#procent-40").addClass("procent-40"); 
  }
  if (procent < 0.5){
   $("#procent-50").addClass("procent-50"); 
  }
  if (procent < 0.4){
   $("#procent-60").addClass("procent-60"); 
  }
  if (procent < 0.3){
   $("#procent-70").addClass("procent-70"); 
  }
  if (procent < 0.2){
   $("#procent-80").addClass("procent-80"); 
  }
  if (procent < 0.1){
   $("#procent-90").addClass("procent-90"); 
  }
  if (procent < 0.0001){
   $("#procent-100").addClass("procent-100"); 
  }
}

	});
