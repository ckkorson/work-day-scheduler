// set a variable equal to the id of the div that the calendar will be appended to
let schedule = $('#schedule')
// create arrays for the rows and the individual elements in the row
let scheduleLines = []
let timeBlock = []
let taskBlock = []
let saveBlock = []
// set a variable equal to the id currentDay in the header
let currentDay = $('#currentDay')
// set the text in current day equal to today
currentDay.text(moment().format('dddd, MMMM Do'))
// function to create arrays of the calendar elements and add text and formatting too them
function createLines() {
    for (i=0; i<11; i++) {
        scheduleLines.push($('<section>'))
        let taskId = 'task-' + i
        let saveId = 'save-' + i
        timeBlock.push($('<h2>'))
        taskBlock.push($('<textarea>'))
        saveBlock.push($('<button>'))
        scheduleLines[i].addClass('row')
        timeBlock[i].addClass('col-12 col-md-1 hour time-block')
        taskBlock[i].addClass('col-12 col-md-10 description')
        taskBlock[i].attr('id',taskId)
        saveBlock[i].attr('id',saveId)
        saveBlock[i].addClass('col-12 col-md-1 saveBtn')
        saveBlock[i].text('Save')
        taskBlock[i].text(localStorage.getItem(taskId))
    }
}
// function to select textarea class based on time of day
function formatTask(i,hour) {
    if (i+6 < moment().format('H')) {
        taskBlock[i].addClass('past')
    }
    else if (hour == moment().format('hA')) {
        taskBlock[i].addClass('present')
    }
    else {
        taskBlock[i].addClass('future')
    }
}
// function to append all the element to the schedule div
function createCalendar() {
    createLines()
    let hour 
    for (i=0; i<timeBlock.length; i++) {
        hour = moment().hour(i+6).format('hA')
        timeBlock[i].text(hour)
        formatTask(i,hour)
        scheduleLines[i].append(timeBlock[i],taskBlock[i],saveBlock[i])
        schedule.append(scheduleLines[i])
    }
}
// run the function to create the calendar lines
createCalendar()
// add unique event listeners to all savebuttons and save the text in local storage
document.querySelectorAll('.saveBtn').forEach(item=> {
    item.addEventListener('click', function() {
        let taskId = this.id.replace('save-','task-')
        localStorage.setItem(taskId, document.getElementById(taskId).value)
    })
})