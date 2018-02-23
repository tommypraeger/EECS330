//monthly.js
var taskCount = -1;


function openmodal() {
    taskCount++;
    //console.log(taskCount);
    document.getElementById("done-editing-button").style.visibility = "hidden";
    document.getElementById("done-editing-button").style.cssFloat = "right";
    document.getElementById("submit-button").style.visibility = "visible";

    document.getElementById("name").value = '';
    document.getElementById("type").value = '';
    document.getElementById("hours").value = '0';
    document.getElementById("minutes").value = '00';
    document.getElementById("description").value = '';
    document.getElementById("importance").value = 0;

    document.getElementById("myModal").style.display = "block";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
     if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date").setAttribute("min", today);
    document.getElementById("date").setAttribute("value", today);
    taskCount--;
}


function closemodal() {
    document.getElementById("myModal").style.display = "none";
}

function createTask() {
    document.getElementById("myModal").style.display = "none";
}
