var colorArray = [
  "#FFFBFB", "#FFF8F8", "#FFF5F5", "#FFF2F2","#FFEFEF", "#FFECEC", "#FFE9E9", "#FFE6E6", "#FFE3E3", "#FFE0E0", "#FFDDDD", "#FFDADA", "#FFD7D6", "#FFD4D3", "#FFD1D0", "#FFCECD", "#FFCBCA" ,"#FFC8C7" , "#FFC5C4" , "#FFC2C1", "#FFBFBE", "#FFBCBB" ,
  "#FFB9B8","#FFB6B5","#FFB3B2","#FFB0AE","#FFADAB","#FFAAA8","#FFA7A5","#FFA4A2","#FFA19F", "#FF9D9C", "#FF9A99" , "#FF9796", "#FF9493", "#FF9190" , "#FF8E8D", "#FF8D89", "#FF8886", "#FF8583", "#FF8280", "#FF7F7D" , "#FF7C7A" , "#FF7977", "#FF7674", "#FF7371" , "#FF706E", "#FF6D6B", "#FF6A68", "#FF6765", "#FF6461", "#FF615E", "#FF5E5B", "#FF5B58", "#FF5855", "#FF5552", "#FF524F", "#FF4F4C", "#FF4C49", "#FF4946", "#FF4643", "#FF4340", "#FF403D", "#F53740"
];
// index 0 = sunday, index 6 = saturday
var taskCount = -1;
var taskCount_array = [1,0,0,0,0,0,0];

var types = [];
var descriptions = [];
var minuteses = [];
var hourses = [];
var dates = [];

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

var num_times_pressing_create_task = 0;

var editing = 0;
var temp_div;

/*
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
*/

function openmodal() {
    taskCount++;
    document.getElementById("submit-button").style.visibility = "visible";
    document.getElementById("submit-button").style.display = "block";

    document.getElementById("name").value = '';
    document.getElementById("type").value = '';
    document.getElementById("hours").value = '0';
    document.getElementById("minutes").value = '00';
    document.getElementById("description").value = '';
    document.getElementById("importance").value = 0;
    updateModalColor();

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
    addEventListener("keyup", function(event) {
      event.preventDefault();
        if (event.keyCode === 27) {
          closemodal();
        }
    });
}

function closemodal() {
    document.getElementById("myModal").style.display = "none";
}

function validate_form() {
  taskCount++;
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

  taskCount--;

  if (name==''||(type=="group" && type == "work" && type == "school")|| (hours == '' || minutes == '')){
    flag = true;
  }
  return flag;
}

function createTask() {
  //checks form if required fields are valid before proceeding
var date = document.getElementById("date").value;
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
    num_times_pressing_create_task++;
    taskCount++;
    var name = document.getElementById("name").value;

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
    var importance = document.getElementById("importance").value;
    var date = document.getElementById("date").value;

    if (document.getElementById("description").value != '' && document.getElementById("description").value != null){
      var description = document.getElementById("description").value;
    } else {
      var description = '';
    }

    names[0,taskCount] = name;
    types[taskCount] = type;
    importances[0,taskCount] = importance;
    descriptions[taskCount] = description;
    minuteses[taskCount] = minutes;
    hourses[taskCount] = hours;
    dates[taskCount] = date;

    var div = document.createElement("div");

    div.id = "task-div" + taskCount.toString();
    setBackgroundColor(div);

    var type_para = document.createElement("i");
    var type_info = document.createTextNode(type);

    var name_para = document.createElement("p");
    var name_info = document.createTextNode(name);

    var description_para = document.createElement("p");
    var description_info = document.createTextNode(description);

    var hours_para = document.createElement("p");
    var hours_info = document.createTextNode(hours);

    var colon_para = document.createElement("p");
    var colon_info = document.createTextNode(":");

    var minutes_para = document.createElement("p");
    var minutes_info = document.createTextNode(minutes);

    div.className = "task-div";
    name_para.className = "name task-text";
    description_para.className = "description task-text";
    hours_para.className = "hours task-text";
    colon_para.className = "colon";
    minutes_para.className = "minutes";
    type_para.className = "material-icons type";

    name_para.id = "name";
    description_para.id = "description";
    hours_para.id = "hours";
    colon_para.id = "colon";
    minutes_para.id = "minutes";
    type_para.id = "type";

    var container = document.getElementById("task-container");
    closemodal();

    if (num_times_pressing_create_task == 1) {
      document.getElementById("task_sun1").style.visibility = "visible";
    }
    if (num_times_pressing_create_task == 2) {
      document.getElementById("task_mon1").style.visibility = "visible";
    }
    if (num_times_pressing_create_task == 3) {
      document.getElementById("task_fri0").style.visibility = "visible";
    }
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

function updateModalColor() {
  var importance = document.getElementById("importance").value;
  var header = document.getElementById("modal-header");
  var footer = document.getElementById("modal-footer");
  var text = document.getElementById("modal-header-text");
  if (importance < 32) {
    text.style.color = colorArray[63];
  } else {
    text.style.color = colorArray[0];
  }
  header.style.backgroundColor = colorArray[importance];
  footer.style.backgroundColor = colorArray[importance];
}

function setBackgroundColor(div) {
  index = div.id.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
  div.style.backgroundColor = colorArray[importances[0,index]];
  if (document.getElementById("done" + index.toString())){
    if (document.getElementById("done" + index.toString()).checked) {
      div.style.backgroundColor = "#a4a6a8";
    }
  }
}

window.onload = function() {
  var prevDay = document.getElementById("prev-day");
  var nextDay = document.getElementById("next-day");
  var leftArrow = document.getElementById("left-arrow");
  var rightArrow = document.getElementById("right-arrow");
  prevDay.onmouseover = function() {
    //prevDay.style.backgroundColor = "#a9a9aa";
    leftArrow.style.color = "#a9a9aa";
  }
  prevDay.onmouseout = function() {
    //prevDay.style.backgroundColor = "transparent";
    leftArrow.style.color = "#e0e0e0";
  }
  nextDay.onmouseover = function() {
    //nextDay.style.backgroundColor = "#a9a9aa";
    rightArrow.style.color = "#a9a9aa";
  }
  nextDay.onmouseout = function() {
    //nextDay.style.backgroundColor = "transparent";
    rightArrow.style.color = "#e0e0e0";
  }
  prevDay.onclick = function() {
    // day--;
    // date();
  }
  nextDay.onclick = function() {
    // day++;
    // date();
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
