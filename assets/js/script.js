
var currentDay = dayjs();
var presentTime = dayjs().hour();
console.log (presentTime)
var schedule = $(this).parent().children(".schedule").val();

//Code wrap in one fuction
function init () {

//compare current time and time of task:add class past, present and future to time block 
$('.time-block').each(function (){
  var hourDiv =parseInt($(this).attr("id"));
  console.log(hourDiv);

  if (hourDiv === presentTime) {
    $(this).addClass('present');
  } else if (hourDiv > presentTime) {
      $(this).addClass('future');
    } else {
      $(this).addClass('past'); 
    }
  });

// render saved schedule task saved in local storage if it exist 
$('.time-block').each(function () {
  var id = $(this).attr("id");
  var schedule = localStorage.getItem(id);
  if (schedule !== null) {
    $(this).children(".description").val(schedule);
  }
    else {
      $(this).children(".description").val();
    }
  }
);

//time and schedule task is save in local storage when clicking save button 

$('.saveBtn').click(function(){
    var time = $(this).parent().attr('id');
    var schedule = $(this).parent().children(".description").val();
    localStorage.setItem(time, schedule);
  } 
)

//code to display current date in top of website. 
$('#currentDay').text(currentDay.format('dddd, MMM D'))

//Format Do is not working 
//$('#currentDay').text(currentDay.format('dddd, MMM Do'))

}

init();
