$(document).ready(function() {
  var t = 25;
  var start = false;
  var tick_down;
  var time;
  var minutes = t;
  var seconds = 0;
  
  // Functions lane
  // Reduce the time by 1
  function reduced_time() {
    clearInterval(tick_down);
    start = false;
    seconds = 0;
    t = t - 1;
    minutes = t;
    if (t < 1) {
      t = t + 1
      minutes = t;
    }
    $('.pomo-timer').text(t.toString());
    $('.pomo-divider').text("");
    $('.pomo-seconds').text("");
  }
  
  // Increase the time by 1
  function increased_time() {
    clearInterval(tick_down);
    start = false;
    seconds = 0;
    t = t + 1;
    minutes = t;
    if (t > 60) {
      t = t - 1;
      minutes = t;
    }
    $('.pomo-timer').text(t.toString());
    $('.pomo-divider').text("");
    $('.pomo-seconds').text("");
  }
  
  // Changes t into proper time
  function countdown () {
    seconds = seconds - 1;
    
    if (minutes <= 0 && seconds <= 0) {
      $('.pomo-timer').text("FIN");
      $('.pomo-divider').text("");
      $('.pomo-seconds').text("");
      clearInterval(tick_down);
    }
    
    else if (minutes > 0 && seconds < 0) {
      minutes = minutes - 1;
      seconds = 59;
      $('.pomo-timer').text(minutes.toString());
      $('.pomo-divider').text(":");
      $('.pomo-seconds').text(seconds.toString());
    }
    
    else if (seconds < 10 && seconds >= 0) {
      $('.pomo-timer').text(minutes.toString());
      $('.pomo-divider').text(":");
      $('.pomo-seconds').text("0" + seconds.toString());
    }
    
    else if (minutes > 0 || seconds > 0) {
      $('.pomo-timer').text(minutes.toString());
      $('.pomo-divider').text(":");
      $('.pomo-seconds').text(seconds.toString());
    }
    
    else {
      clearInterval(tick_down);
    }
  }
  
  // Starts and stops the timer
  function start_stop_timer () {
    if (start == false) {
      start = true;
      tick_down = setInterval(countdown, 1000);
    }
    else if (start == true) {
      start = false;
      clearInterval(tick_down);
    }
  }
  
  // Button effects
  // Allows the button to -1
  $(".pomo-minus").on("click", function() {
    reduced_time();
  });
  
  // Allows the button to +1
  $(".pomo-plus").on("click", function() {
    increased_time();
  });
  
  // Starts or Stops the timer
  $(".start-stop-button").on("click", function() {
    start_stop_timer();
  });
  
});