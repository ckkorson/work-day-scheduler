let schedule = $('#schedule')
let scheduleLines = []
let timeBlock = []
let taskBlock = []
let saveBlock = []

let currentDay = $('#currentDay')
currentDay.text(moment().format('dddd, MMMM Do'))


function createLines() {
    for (i=0; i<10; i++) {
        scheduleLines.push($('<section>'))
        timeBlock.push($('<h2>'))
        taskBlock.push($('<p>'))
        saveBlock.push($('<h2>'))
        scheduleLines[i].addClass('row')
        timeBlock[i].addClass('col-1 hour time-block')
        taskBlock[i].addClass('col-10 past description')
        saveBlock[i].addClass('col-1 saveBtn')
        // taskBlock[i].text('do stuff')
        saveBlock[i].text('Save')
    }
}

function createCalendar() {
    createLines()
    let hour 
    for (i=0; i<10; i++) {
        hour = moment().hour(i+9).format('hA')
        timeBlock[i].text(hour)
        scheduleLines[i].append(timeBlock[i],taskBlock[i],saveBlock[i])
        schedule.append(scheduleLines[i])
    }
}

createCalendar()