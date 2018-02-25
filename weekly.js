var colorArray = ["#8EFF8A","#92FE89","#95FE88","#98FE88","#9BFE87","#9FFE87","#A2FE86","#A5FE86","#A9FE85","#ACFE85","#B0FE84","#B3FE84","#B6FE83","#BAFE83","#BEFE82","#C1FE82","#C5FE81","#C8FE81","#CCFE80","#D0FE7F","#D4FE7F","#D7FE7E","#DBFD7E","#DFFD7D","#E3FD7D","#E7FD7C","#EBFD7C","#EFFD7B","#F3FD7B","#F7FD7A","#FBFD7A","#FDFB79","#FDF779","#FDF378","#FDEF78","#FDEA77","#FDE677","#FDE276","#FDDD76","#FDD975","#FDD574","#FDD074","#FDCC73","#FCC773","#FCC372","#FCBE72","#FCB971","#FCB571","#FCB070","#FCAB70","#FCA76F","#FCA26F","#FC9D6E","#FC986E","#FC936D","#FC8F6D","#FC8A6C","#FC856C","#FC806B","#FC7B6B","#FC766A","#FC716A","#FC6C69","#FC686A"];
// index 0 = sunday, index 6 = saturday
var taskCount_array = [1,0,0,0,0,0,0];

var sun_im =[];
var mon_im =[];
var tue_im =[];
var wed_im =[];
var thu_im =[];
var fri_im =[];
var sat_im =[];
var importances =[sun_im,mon_im,tue_im,wed_im,thu_im,fri_im];

var sun_na =[];
var mon_na =[];
var tue_na =[];
var wed_na =[];
var thu_na =[];
var fri_na =[];
var sat_na =[];
var names =[sun_na,mon_na,tue_na,wed_na,thu_na,fri_na];

function task_obj(name, type, importance, hour, minutes, date, day, description) {
    this.name=name;
    this.type=type;
    this.importance=importance;
    this.hours=hours;
    this.minutes=minutes;
    this.date=date;
    this.day=day;
    this.description=description;
  }

function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function openmodal() {
    //taskCount++;
    //console.log(taskCount);

    document.getElementById("name").value = '';
    document.getElementById("type").value = '';
    document.getElementById("hours").value = '';
    document.getElementById("minutes").value = '';
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
    //taskCount--;
}

function closemodal() {
    document.getElementById("myModal").style.display = "none";
}

function validate_form() {
  var flag = false;
  var name = document.getElementById('name').value;

  if (document.getElementById("type").value == "Social"){
    var type = "group";
  }
  else if (document.getElementById("type").value == "Work"){
    var type = "work";
  }
  else if (document.getElementById("type").value == "Class"){
    var type = "school";
  }

  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;

  if (name==''||(type=="group" && type == "work" && type == "school")|| (hours == '' || minutes == '')){
    flag = true;
  }
  return flag;
}

function createTask() {
  //checks form if required fields are valid before proceeding
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  //if form is valid  proceed to else condition
  else {
    //gets name of day to determine which column task goes into
    var temp_date = document.getElementById("date").value;
    var temp_day = getDayOfWeek(temp_date);
    //gather name, color/importance, time comittment, description and places them into temp vars
    var temp_name = document.getElementById("name").value;
    var temp_type = document.getElementById("type").value;
    var temp_importance = document.getElementById("importance").value;
    var temp_hours = document.getElementById("hours").value;
    var temp_minutes = document.getElementById("minutes").value;
    //check if description is null
    if (document.getElementById("description").value != '' && document.getElementById("description").value != null){
      var temp_description = document.getElementById("description").value;
    } else {
      var temp_description = '';
    }
    //initialize object w/ fields from modal-body
    var new_task = new task_obj(temp_name, temp_type, temp_importance, temp_hours, temp_minutes, temp_date, temp_description);
    //finds the correct day to increment counter
    var taskCount_index = new Date(temp_date).getDay();
    var temp_count = taskCount_array[taskCount_index];
    temp_count++;
    taskCount_array[taskCount_index]=temp_count;
    //importances[taskCount_index] = temp_importance; //for the color gradient
    //DECIDES WHICH ID TAG TO ADD DIV TO
    var id_day = temp_day;

    //CREATES THE FUCKING DIV
    var div = document.createElement("div");
    div.id = "task-div" + taskCount_array[taskCount_index].toString();
    //setBackgroundColor_weekly(div,new_task);
    var type_para = document.createElement('i');

    //convert type to icon name
    if (temp_type == "Social"){
      temp_type = "group";
    }
    else if (temp_type == "Work"){
      temp_type = "work";
    }
    else if (temp_type == "Class"){
      temp_type = "school";
    }

    //append icon to node
    var type_info = document.createTextNode(temp_type);
    type_para.appendChild(type_info);
    type_para.classList.add("material-icons");
    div.appendChild(type_para);

    //append name to div
    var name_para = document.createElement("p");
    var name_info = document.createTextNode(temp_name);
    name_para.appendChild(name_info);
    div.appendChild(name_para);

    //append new div to html
    var element = document.getElementById(id_day);
    element.appendChild(div);
    //insertBefore(newNode, referenceNode)
    closemodal();
    }
}

function edit(div) {
  //console.log('hi');
  delete_task(div);
  index = names.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
  if (types[index] == "group"){
    var type = "Social";
  }
  else if (types[index] == "work"){
    var type = "Work";
  }
  else if (types[index] == "school"){
    var type = "Class";
  }
  document.getElementById("name").value = names[index];
  document.getElementById("type").value = type;
  document.getElementById("hours").value = hourses[index];
  document.getElementById("minutes").value = minuteses[index];
  document.getElementById("description").value = descriptions[index];
  document.getElementById("importance").value = importances[index];
  document.getElementById("date").value = dates[index];

  //document.getElementById("myModal").style.display = "block";

}

function delete_task(div) {
  var parent = document.getElementById("task-container");
  parent.removeChild(div);
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}

//get day from task and returns what day of the week "id" the task belongs in
/*

  //intialize new object w/ fields from modal
  /*var new_task = new task_obj(temp_name, temp_type, temp_importance, temp_hours, temp_minutes, temp_date, temp_description);
  //finds the correct day to increment counter
  var taskCount_index = new Date(temp_date).getDay();
  var temp_count = taskCount_array[taskCount_index];
  temp_count++;
  taskCount_array[taskCount_index]=temp_count;

*/
