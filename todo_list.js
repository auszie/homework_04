function addTask(description, dueTime) {
    var ul = document.getElementById("task_list");
    // <li>(description)<span class="due">due (due time, if specified)</span><button class="btn btn-sm btn-outline-danger done" type="button">Done</button></li>

    if (dueTime)
    {
        var currentDate = new Date(dueTime);
        var newListElement = document.createElement('li');
        var doneButtonElement = document.createElement('button');
        var timeSpan = document.createElement('span');
        timeSpan.setAttribute("class", "due");
        timeSpan.textContent = "due" + " " + currentDate.toLocaleString() + " ";
        console.log(timeSpan);
        newListElement.textContent = description + " ";
        doneButtonElement.classList.add("btn");
        doneButtonElement.classList.add("btn-sm");
        doneButtonElement.classList.add('btn-outline-danger');
        doneButtonElement.classList.add('done');
        doneButtonElement.setAttribute("type", "button");
       
        doneButtonElement.textContent = 'Done';
        newListElement.append(timeSpan);
        newListElement.append(doneButtonElement);
        ul.append(newListElement);

        doneButtonElement.addEventListener("click", function(){
            console.log("workring")
            this.parentElement.remove();
        });

    }
    else{
        
        var newListElement = document.createElement('li');
        var doneButtonElement = document.createElement('button');
        newListElement.textContent = description;
        doneButtonElement.classList.add("btn");
        doneButtonElement.classList.add("btn-sm");
        doneButtonElement.classList.add('btn-outline-danger');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';
        newListElement.append(doneButtonElement);
        ul.append(newListElement);

        doneButtonElement.addEventListener("click", function(){
            console.log("workring")
            this.parentElement.remove();
        });

    }
}

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        
        

        return dueDate + dueTime + timezoneOffset;

    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}


