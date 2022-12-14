
var currentDay = dayjs();
var existingTask = [];


  
// Show current day on header :format Do to show date ordinality not working
$('#currentDay').text(currentDay.format('dddd, MMM Do'))

//current time frame and hour


//compare current time and time of task:add class past, present and future to time block 
//comaparing the hour in the ID to the current hour


//current task is save in local storage when click save button 
$('.saveBtn').click(function(){
  currentTask ={
    time : $(this).parent().attr('id'),
    schedule : $(this).parent().children('textarea').val(),
  };
  if (currentTask.task !== null) {
    existingTask.push(currentTask)
    localStorage.setItem('saved task',JSON.stringify(existingTask));
  } 
})



