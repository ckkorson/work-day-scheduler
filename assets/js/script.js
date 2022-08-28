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
        taskBlock[i].addClass('col-10 description')
        saveBlock[i].addClass('col-1 saveBtn')
        // taskBlock[i].text('do stuff')
        saveBlock[i].text('Save')
    }
}

function formatTask(i,hour) {
    // console.log(hour)
    // console.log(moment().format('hA'))
    // console.log(moment().hour(10).format('hA') < moment().format('hA'))
    if (hour < moment().format('hA')) {
        taskBlock[i].addClass('past')
    }
    else if (hour == moment().format('hA')) {
        taskBlock[i].addClass('present')
    }
    else {
        taskBlock[i].addClass('future')
    }
}

function createCalendar() {
    createLines()
    let hour 
    for (i=0; i<10; i++) {
        hour = moment().hour(i+6).format('hA')
        timeBlock[i].text(hour)
        formatTask(i,hour)
        scheduleLines[i].append(timeBlock[i],taskBlock[i],saveBlock[i])
        schedule.append(scheduleLines[i])
    }
}

// console.log(moment(1,'H') < moment(12,'H'))
// console.log(moment(11,'H').format('H'))
// console.log(moment(12,'H').format('H'))
createCalendar()