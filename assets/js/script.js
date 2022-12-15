
  
// Show current day on header :format Do to show date ordinality not working
var currentDay = dayjs();
var schedule = $(this).parent().children(".schedule").val();

function init () {


//current time frame and hour


//compare current time and time of task:add class past, present and future to time block 


// render saved schedule task present in local storage if it exist 
$('.time-block').each(function () {
  var id = $(this).attr("id");
  var schedule = localStorage.getItem(id);
  if (schedule !== null) {
    $(this).children(".description").val(schedule);
  }
    else {
      $(this).children(".description").val()
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

//code to display current date in top of website  
$('#currentDay').text(currentDay.format('dddd, MMM Do'))

}
init();
