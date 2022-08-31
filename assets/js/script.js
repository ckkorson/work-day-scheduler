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
        let taskId = 'task-' + i
        let saveId = 'save-' + i
        timeBlock.push($('<p>'))
        taskBlock.push($('<textarea>'))
        saveBlock.push($('<p>'))
        scheduleLines[i].addClass('row')
        timeBlock[i].addClass('col-1 hour time-block')
        taskBlock[i].addClass('col-10 description')
        taskBlock[i].attr('id',taskId)
        saveBlock[i].attr('id',saveId)
        // taskBlock[i].append($("<input/>", {type: 'text'}))
        saveBlock[i].addClass('col-1 saveBtn')
        // taskBlock[i].text('do stuff')
        saveBlock[i].text('Save')
    }
}

function formatTask(i,hour) {
    // console.log(hour)
    // console.log(moment().format('hA'))
    // console.log(moment().hour(10).format('hA') < moment().format('hA'))
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

console.log(11 < moment(12,'H'))
// console.log(moment(11,'H').format('H'))
// console.log(moment(12,'H').format('H'))
createCalendar()