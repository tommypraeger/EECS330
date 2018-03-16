
var taskCount = -1;
var colorArray = [
  "#FFFBFB", "#FFF8F8", "#FFF5F5", "#FFF2F2","#FFEFEF", "#FFECEC", "#FFE9E9", "#FFE6E6", "#FFE3E3", "#FFE0E0", "#FFDDDD", "#FFDADA", "#FFD7D6", "#FFD4D3", "#FFD1D0", "#FFCECD", "#FFCBCA" ,"#FFC8C7" , "#FFC5C4" , "#FFC2C1", "#FFBFBE", "#FFBCBB" ,
  "#FFB9B8","#FFB6B5","#FFB3B2","#FFB0AE","#FFADAB","#FFAAA8","#FFA7A5","#FFA4A2","#FFA19F", "#FF9D9C", "#FF9A99" , "#FF9796", "#FF9493", "#FF9190" , "#FF8E8D", "#FF8D89", "#FF8886", "#FF8583", "#FF8280", "#FF7F7D" , "#FF7C7A" , "#FF7977", "#FF7674", "#FF7371" , "#FF706E", "#FF6D6B", "#FF6A68", "#FF6765", "#FF6461", "#FF615E", "#FF5E5B", "#FF5B58", "#FF5855", "#FF5552", "#FF524F", "#FF4F4C", "#FF4C49", "#FF4946", "#FF4643", "#FF4340", "#FF403D", "#F53740"
];
var names = [];
var types = [];
var importances = [];
var descriptions = [];
var minuteses = [];
var hourses = [];
var dates = [];
var editing = 0;
var temp_div;
var day = 16;
var nav_flag =1;
var divcount = 0;
function date() {
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth();
  // if (mm == "0") {
  //   var month = "January";
  // } else if (mm == "1") {
  //   var month = "February";
  // } else if (mm == "2") {
  //   var month = "March";
  // } else if (mm == "3") {
  //   var month = "April";
  // } else if (mm == "4") {
  //   var month = "May";
  // } else if (mm == "5") {
  //   var month = "June";
  // } else if (mm == "6") {
  //   var month = "July";
  // } else if (mm == "7") {
  //   var month = "August";
  // } else if (mm == "8") {
  //   var month = "September";
  // } else if (mm == "9") {
  //   var month = "October";
  // } else if (mm == "10") {
  //   var month = "November";
  // } else if (mm == "11") {
  //   var month = "December";
  // }
  // var parent = document.getElementById("header");
  // var replaced = document.getElementById("replaced-date");
  // var date = document.createElement("h1");
  // var date_info = document.createTextNode("March " + day);
  // // var date_info = document.createTextNode(month + ' ' + dd);
  // date.appendChild(date_info);
  // date.className = "header-info";
  // parent.replaceChild(date,replaced);
  var date = document.getElementById("header-date");
  if (day > 0 && day < 31) {
    date.innerHTML = "March " + day + ", 2018";
  } else if (day < 31){
    day = 31;
    date.innerHTML = "March " + day + ", 2018";
  } else {
    day = 1;
    date.innerHTML = "March " + day + ", 2018";
  }
}

function openNav() {
  if (nav_flag == 0) {
    document.getElementById("mySidenav").style.width = "0";
    nav_flag =1;
  }
  else {
    document.getElementById("mySidenav").style.width = "16.5%";
    nav_flag =0;
  }
}
// When the user clicks the button, open the modal
function openmodal() {
    taskCount++;
    //console.log(taskCount);
    document.getElementById("done-editing-button").style.visibility = "hidden";
    document.getElementById("done-editing-button").style.display = "none";
    //document.getElementById("done-editing-button").style.cssFloat = "right";
    document.getElementById("submit-button").style.visibility = "visible";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("edit1-button").style.display = "none";
    document.getElementById("edit1-button").style.visibility = "hidden";
    document.getElementById("edit2-button").style.display = "none";
    document.getElementById("edit2-button").style.visibility = "hidden";
    document.getElementById("edit3-button").style.display = "none";
    document.getElementById("edit3-button").style.visibility = "hidden";
    document.getElementById("edit4-button").style.display = "none";
    document.getElementById("edit4-button").style.visibility = "hidden";

    document.getElementById("name").value = '';
    document.getElementById("type").value = '';
    document.getElementById("hours").value = '0';
    document.getElementById("minutes").value = '00';
    document.getElementById("description").value = '';
    document.getElementById("importance").value = 0;
    updateModalColor();

    document.getElementById("myModal").style.display = "block";
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1;
    // var yyyy = today.getFullYear();
    //  if(dd<10){
    //         dd='0'+dd
    //     }
    //     if(mm<10){
    //         mm='0'+mm
    //     }
    //
    // today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date").setAttribute("min", "2018-03-16");
    document.getElementById("date").value = "2018-03-16";
    taskCount--;
    addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 27) {
          closemodal();
    }
    });
}

function validate_form() {
  taskCount++;
  //console.log(taskCount);
  var flag = false;
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
  else if (document.getElementById("type").value == "Other"){
    var type = "note";
  }

  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;

  taskCount--;
  //console.log(type);
  if (name == '' || (type != "group" && type != "work" && type != "school" && type != "note") || (hours == '' || minutes == '')) {
    flag = true;
  }
  return flag;
}

//only use in createTask();

// function today_date(){
//   var t = new Date();
//   var year = t.getFullYear();
//   var month = t.getMonth() + 1;
//   var day = t.getDate();
//   if (month < 10) {
//     month ='0'+month;
//   }
//   else {
//     month=month;
//   }
//   if (day<10) {
//     day ='0'+day;
//   }
//   else {
//     day=day;
//   }
//   var output = year+'-'+month+'-'+day;
//   return output;
// }

//only in scope during createTask function
function validate_date(date){
  //console.log(date);
  //console.log(today_date());
  if (day < 10) {
    var taskDay = "0" + day;
  } else {
    var taskDay = day;
  }
  if (date == "2018-03-" + taskDay) {
    return true;
  }
  else {
    return false;
  }
}

function createTask() {
  var date = document.getElementById("date").value;
  //console.log(date);
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else if (validate_date(date) == false) {
    closemodal();
  }
  else {
    taskCount++;
    //console.log(taskCount);
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
    else if (document.getElementById("type").value == "Other") {
      var type = "note";
    }

    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var importance = document.getElementById("importance").value;
    //var date = document.getElementById("date").value;
    //console.log(date);

    if (document.getElementById("description").value != '' && document.getElementById("description").value != null){
      var description = document.getElementById("description").value;
    } else {
      var description = '';
    }

    names[taskCount] = name;
    types[taskCount] = type;
    importances[taskCount] = importance;
    descriptions[taskCount] = description;
    minuteses[taskCount] = minutes;
    hourses[taskCount] = hours;
    dates[taskCount] = date;


    //document.getElementById("no-tasks").style.display = "none";

    var div = document.createElement("div");

    div.id = "task-div" + taskCount.toString();
    setBackgroundColor(div);

    var type_para = document.createElement("i");
    var type_info = document.createTextNode(type);
    type_para.appendChild(type_info);
    div.appendChild(type_para);

    /*var importance_para = document.createElement("p");
    var importance_info = document.createTextNode(importance);
    importance_para.appendChild(importance_info);
    div.appendChild(importance_para);*/

    var name_para = document.createElement("p");
    var name_info = document.createTextNode(name);
    name_para.appendChild(name_info);
    div.appendChild(name_para);

    var description_para = document.createElement("p");
    var description_info = document.createTextNode(description);
    description_para.appendChild(description_info);
    div.appendChild(description_para);

    var edit_button = document.createElement("button");
    var edit_text = document.createTextNode("Edit");
    edit_button.appendChild(edit_text);
    div.appendChild(edit_button);
    edit_button.id = "edit-button";
    edit_button.style.display = "none";
    edit_button.onclick = function(){
      edit(div);
    }

    var delete_button = document.createElement("button");
    var delete_text = document.createTextNode("Delete");
    delete_button.appendChild(delete_text);
    div.appendChild(delete_button);
    delete_button.id = "delete-button";
    delete_button.style.display = "none";
    delete_button.onclick = function(){
      delete_task(div,0);
    }

    var br1 = document.createElement("br");
    div.appendChild(br1);

    var done_label = document.createElement("label");
    var done_info = document.createTextNode("Done?");
    done_label.appendChild(done_info);
    div.appendChild(done_label);
    done_label.for = "done";

    var done_input = document.createElement("input");
    div.appendChild(done_input);
    done_input.id = "done";
    done_input.type = "checkbox";

    var br2 = document.createElement("br");
    div.appendChild(br2);

    var hours_para = document.createElement("p");
    var hours_info = document.createTextNode(hours);
    hours_para.appendChild(hours_info);
    div.appendChild(hours_para);

    var colon_para = document.createElement("p");
    var colon_info = document.createTextNode(":");
    colon_para.appendChild(colon_info);
    div.appendChild(colon_para);

    var minutes_para = document.createElement("p");
    var minutes_info = document.createTextNode(minutes);
    minutes_para.appendChild(minutes_info);
    div.appendChild(minutes_para);

    div.className = "task-div";
    //importance_para.className = "importance";
    name_para.className = "name task-text";
    description_para.className = "description task-text";
    hours_para.className = "hours task-text";
    colon_para.className = "colon";
    minutes_para.className = "minutes";
    type_para.className = "material-icons type";
    done_label.className = "done task-text";
    done_input.className = "done";


    //importance_para.className = "importance";
    name_para.id = "name";
    description_para.id = "description";
    hours_para.id = "hours";
    colon_para.id = "colon";
    minutes_para.id = "minutes";
    type_para.id = "type";
    done_input.id = "done" + taskCount.toString();

    div.onmouseover = function() {
        edit_button.style.display = "inline-block";
        delete_button.style.display = "inline-block";
        //console.log(importance);
        if (importance < 32) {
          var temp = +importance + 10;
          //console.log(temp);
          //console.log(colorArray[temp]);
          div.style.backgroundColor = colorArray[temp];
        } else {
          var temp = +importance - 10;
          div.style.backgroundColor = colorArray[temp];
        }
    }

    div.onmouseout = function() {
        edit_button.style.display = "none";
        delete_button.style.display = "none";
        //console.log(div.id);
        setBackgroundColor(div);
    }
    var container = document.getElementById("task-container");
    closemodal();
    if (taskCount > -1){
      addTaskByImportance(container,div);
    } else {
      container.appendChild(div);
    }
  }
  divcount++;
}

function updateTask() {
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
    editing = 1;
    taskCount++;
    //console.log(taskCount);
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
    else if (document.getElementById("type")) {
      var type = "note";
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

    names[taskCount] = name;
    types[taskCount] = type;
    importances[taskCount] = importance;
    descriptions[taskCount] = description;
    minuteses[taskCount] = minutes;
    hourses[taskCount] = hours;
    dates[taskCount] = date;


    //document.getElementById("no-tasks").style.display = "none";

    var div = document.createElement("div");

    div.id = "task-div" + taskCount.toString();
    setBackgroundColor(div);

    var type_para = document.createElement("i");
    var type_info = document.createTextNode(type);
    type_para.appendChild(type_info);
    div.appendChild(type_para);

    /*var importance_para = document.createElement("p");
    var importance_info = document.createTextNode(importance);
    importance_para.appendChild(importance_info);
    div.appendChild(importance_para);*/

    var name_para = document.createElement("p");
    var name_info = document.createTextNode(name);
    name_para.appendChild(name_info);
    div.appendChild(name_para);

    var description_para = document.createElement("p");
    var description_info = document.createTextNode(description);
    description_para.appendChild(description_info);
    div.appendChild(description_para);

    var edit_button = document.createElement("button");
    var edit_text = document.createTextNode("Edit");
    edit_button.appendChild(edit_text);
    div.appendChild(edit_button);
    edit_button.id = "edit-button";
    edit_button.style.display = "none";
    edit_button.onclick = function(){
      edit(div);
    }

    var delete_button = document.createElement("button");
    var delete_text = document.createTextNode("Delete");
    delete_button.appendChild(delete_text);
    div.appendChild(delete_button);
    delete_button.id = "delete-button";
    delete_button.style.display = "none";
    delete_button.onclick = function(){
      delete_task(div,0);
    }

    var br1 = document.createElement("br");
    div.appendChild(br1);

    var done_label = document.createElement("label");
    var done_info = document.createTextNode("Done?");
    done_label.appendChild(done_info);
    div.appendChild(done_label);
    done_label.for = "done";

    var done_input = document.createElement("input");
    div.appendChild(done_input);
    done_input.id = "done";
    done_input.type = "checkbox";

    var br2 = document.createElement("br");
    div.appendChild(br2);

    var hours_para = document.createElement("p");
    var hours_info = document.createTextNode(hours);
    hours_para.appendChild(hours_info);
    div.appendChild(hours_para);

    var colon_para = document.createElement("p");
    var colon_info = document.createTextNode(":");
    colon_para.appendChild(colon_info);
    div.appendChild(colon_para);

    var minutes_para = document.createElement("p");
    var minutes_info = document.createTextNode(minutes);
    minutes_para.appendChild(minutes_info);
    div.appendChild(minutes_para);

    div.className = "task-div";
    //importance_para.className = "importance";
    name_para.className = "name task-text";
    description_para.className = "description task-text";
    hours_para.className = "hours task-text";
    colon_para.className = "colon";
    minutes_para.className = "minutes";
    type_para.className = "material-icons type";
    done_label.className = "done task-text";
    done_input.className = "done";


    //importance_para.className = "importance";
    name_para.id = "name";
    description_para.id = "description";
    hours_para.id = "hours";
    colon_para.id = "colon";
    minutes_para.id = "minutes";
    type_para.id = "type";
    done_input.id = "done" + taskCount.toString();

    div.onmouseover = function() {
        edit_button.style.display = "inline-block";
        delete_button.style.display = "inline-block";
        //console.log(importance);
        if (importance < 32) {
          var temp = +importance + 10;
          //console.log(temp);
          //console.log(colorArray[temp]);
          div.style.backgroundColor = colorArray[temp];
        } else {
          var temp = +importance - 10;
          div.style.backgroundColor = colorArray[temp];
        }
    }

    div.onmouseout = function() {
        edit_button.style.display = "none";
        delete_button.style.display = "none";
        //console.log(div.id);
        setBackgroundColor(div);
    }
    var container = document.getElementById("task-container");
    if (editing == 1) {
      delete_task(temp_div, editing);
    }
    editing = 0;
    closemodal();
    if (taskCount > -1){
      addTaskByImportance(container,div);
    } else {
      container.appendChild(div);
    }
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
  //console.log(importance);
}

window.onload = function() {
  var prevDay = document.getElementById("prev-day");
  var nextDay = document.getElementById("next-day");
  var leftArrow = document.getElementById("left-arrow");
  var rightArrow = document.getElementById("right-arrow");
  var taskdiv1 = document.getElementById("hardcode_task1");
  var taskdiv2 = document.getElementById("hardcode_task2");
  var taskdiv3 = document.getElementById("hardcode_task3");
  var taskdiv4 = document.getElementById("hardcode_task4");
  var editbutton1 = document.getElementById("edit-button1");
  var deletebutton1 = document.getElementById("delete-button1");
  var editbutton2 = document.getElementById("edit-button2");
  var deletebutton2 = document.getElementById("delete-button2");
  var editbutton3 = document.getElementById("edit-button3");
  var deletebutton3 = document.getElementById("delete-button3");
  var editbutton4 = document.getElementById("edit-button4");
  var deletebutton4 = document.getElementById("delete-button4");


  prevDay.onmouseover = function() {
    //prevDay.style.backgroundColor = "#a9a9aa";
    leftArrow.style.color = "#a9a9aa";
    leftArrow.style.marginLeft = "4%";
  }
  prevDay.onmouseout = function() {
    //prevDay.style.backgroundColor = "transparent";
    leftArrow.style.color = "#e0e0e0";
    leftArrow.style.marginLeft = "6%";
  }
  nextDay.onmouseover = function() {
    //nextDay.style.backgroundColor = "#a9a9aa";
    rightArrow.style.color = "#a9a9aa";
    rightArrow.style.marginLeft = "8%";
  }
  nextDay.onmouseout = function() {
    //nextDay.style.backgroundColor = "transparent";
    rightArrow.style.color = "#e0e0e0";
    rightArrow.style.marginLeft = "6%";
  }
  prevDay.onclick = function() {
    day--;
    date();
    if (day<0) {
      day = 31;
    }
    var tempid = 'taskdiv';
    if (day!=16) {
      document.getElementById('hardcode_task1').style.visibility = "hidden";
      document.getElementById('hardcode_task2').style.visibility = "hidden";
      document.getElementById('hardcode_task3').style.visibility = "hidden";
      document.getElementById('hardcode_task4').style.visibility = "hidden";
      if (taskCount > -1) {
        for (var i = 0; i < taskCount; i++) {
          tempid = tempid+i;
          document.getElementById(tempid).style.visibility = "hidden";
        }
      }
    }
    else{
      document.getElementById('hardcode_task1').style.visibility = "visible";
      document.getElementById('hardcode_task2').style.visibility = "visible";
      document.getElementById('hardcode_task3').style.visibility = "visible";
      document.getElementById('hardcode_task4').style.visibility = "visible";
      if (taskCount > -1) {
        for (var i = 0; i < taskCount; i++) {
          tempid = tempid+i;
          document.getElementById(tempid).style.visibility = "visible";
        }
      }
    }
  }
  nextDay.onclick = function() {
    day++;
    date();
    if (day > 31) {
      day = 1;
    }
    var tempid = 'taskdiv';
    if (day!=16){
      document.getElementById('hardcode_task1').style.visibility = "hidden";
      document.getElementById('hardcode_task2').style.visibility = "hidden";
      document.getElementById('hardcode_task3').style.visibility = "hidden";
      document.getElementById('hardcode_task4').style.visibility = "hidden";
      if (taskCount > -1) {
        for (var i = 0; i < taskCount; i++) {
          tempid = tempid+i;
          document.getElementById(tempid).style.visibility = "hidden";
        }
      }
    }
    else{
      document.getElementById('hardcode_task1').style.visibility = "visible";
      document.getElementById('hardcode_task2').style.visibility = "visible";
      document.getElementById('hardcode_task3').style.visibility = "visible";
      document.getElementById('hardcode_task4').style.visibility = "visible";
      if (divcount > -1) {
        //starthere
        for (var i = 0; i < taskCount; i++) {
          tempid = tempid+i;
          document.getElementById(tempid).style.visibility = "visible";
        }
      }
    }
  }
  taskdiv1.onmouseover = function() {
    if (!document.getElementById("done1").checked) taskdiv1.style.backgroundColor = "#FFBCBB";
    editbutton1.style.display = "inline-block";
    deletebutton1.style.display = "inline-block";
  }
  taskdiv1.onmouseout = function() {
    if (!document.getElementById("done1").checked) taskdiv1.style.backgroundColor = "#FFDADA";
    editbutton1.style.display = "none";
    deletebutton1.style.display = "none";
  }
  taskdiv2.onmouseover = function() {
    if (!document.getElementById("done2").checked) taskdiv2.style.backgroundColor = "#FFB0AE";
    editbutton2.style.display = "inline-block";
    deletebutton2.style.display = "inline-block";
  }
  taskdiv2.onmouseout = function() {
    if (!document.getElementById("done2").checked) taskdiv2.style.backgroundColor = "#FFCECD";
    editbutton2.style.display = "none";
    deletebutton2.style.display = "none";
  }
  taskdiv3.onmouseover = function() {
    if (!document.getElementById("done3").checked) taskdiv3.style.backgroundColor = "#FFC8C7";
    editbutton3.style.display = "inline-block";
    deletebutton3.style.display = "inline-block";
  }
  taskdiv3.onmouseout = function() {
    if (!document.getElementById("done3").checked) taskdiv3.style.backgroundColor = "#FFAAA8";
    editbutton3.style.display = "none";
    deletebutton3.style.display = "none";
  }
  taskdiv4.onmouseover = function() {
    if (!document.getElementById("done4").checked) taskdiv4.style.backgroundColor = "#FFC8C7";
    editbutton4.style.display = "inline-block";
    deletebutton4.style.display = "inline-block";
  }
  taskdiv4.onmouseout = function() {
    if (!document.getElementById("done4").checked) taskdiv4.style.backgroundColor = "#FFAAA8";
    editbutton4.style.display = "none";
    deletebutton4.style.display = "none";
  }
}

function addTaskByImportance(container,div) {
  flag = false;
  /*
  index = div.id.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
  sorted = importances;
  sorted.sort();
  sorted.reverse();
  current_importance = importances[index];
  current_index = sorted.indexOf(current_importance);
  new_importance = sorted[current_index + 1];
  new_index = importances.indexOf(new_importance);
  console.log(index);
  console.log(sorted);
  console.log(current_index);
  var i = current_index + 1;
  while (i < importances.length){
    if (document.getElementById("div" + new_index.toString())){
      container.insertBefore(div,document.getElementById("div" + new_index.toString()));
      flag = true;
      break;
    } else {
      new_importance = sorted[++i];
      new_index = importances.indexOf(new_importance);
    }
    console.log("importances");
    console.log(importances);
    console.log("current_importance");
    console.log(current_importance);
    console.log("new_index");
    console.log(new_index);
  }*/
  if (!flag){
    container.appendChild(div);
  }
}
//var prevDay = document.getElementById("prev-day");
function greyout1(){
  var radio = document.getElementById('done1').checked;
  if (radio == true) {
    document.getElementById("hardcode_task1").style.backgroundColor="#a4a6a8";
  }
  else{
    document.getElementById("hardcode_task1").style.backgroundColor= "#FFE6E6";
  }
}

function greyout2(){
  var radio = document.getElementById('done2').checked;
  if (radio==true){
    document.getElementById("hardcode_task2").style.backgroundColor="#a4a6a8";
  }
  else{
    document.getElementById("hardcode_task2").style.backgroundColor= "#FFCECD";
  }
  /*if (radio == true) {
    document.getElementById("hardcode_task2").style.backgroundColor="#a4a6a8";
  }
  else{
    document.getElementById("hardcode_task2").style.backgroundColor= "#FFCECD";
  }
  */
}
function greyout3(){
  var radio = document.getElementById('done3').checked;
  if (radio == true) {
    document.getElementById("hardcode_task3").style.backgroundColor="#a4a6a8";
  }
  else{
    document.getElementById("hardcode_task3").style.backgroundColor= "#FFAAA8";
  }
}

function greyout4(){
  var radio = document.getElementById('done4').checked;
  if (radio == true) {
    document.getElementById("hardcode_task4").style.backgroundColor="#a4a6a8";
  }
  else{
    document.getElementById("hardcode_task4").style.backgroundColor= "#FFAAA8";
  }
}

function setBackgroundColor(div) {
  //console.log(importances);
  index = div.id.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
  //console.log(index);
  div.style.backgroundColor = colorArray[importances[index]];
  if (document.getElementById("done" + index.toString())){
    if (document.getElementById("done" + index.toString()).checked) {
      div.style.backgroundColor = "#a4a6a8";
    }
  }
  //createSortable("task-container");
  /*if (document.getElementById("one").checked){
    //var importance = "!";
    div.style.backgroundColor = "#b5ffc7";
  }
  else if (document.getElementById("two").checked){
    //var importance = "!!";
    div.style.backgroundColor = "#fffbb4";
  }
  else if (document.getElementById("three").checked){
    //var importance = "!!!";
    div.style.backgroundColor = "#ffb3b3";
  }*/
}

function edit(div) {
  //console.log('hi');
  //delete_task(div);
  document.getElementById("done-editing-button").style.visibility = "visible";
  document.getElementById("done-editing-button").style.display = "block";
  //document.getElementById("done-editing-button").style.cssFloat = "left";
  document.getElementById("submit-button").style.display = "none";
  document.getElementById("submit-button").style.visibility = "hidden";
  index = div.id.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
  if (types[index] == "group"){
    var type = "Social";
  }
  else if (types[index] == "work"){
    var type = "Work";
  }
  else if (types[index] == "school"){
    var type = "Class";
  }
  else if (types[index] == "Other"){
    var type = "note";
  }
  document.getElementById("name").value = names[index];
  document.getElementById("type").value = type;
  document.getElementById("hours").value = hourses[index];
  document.getElementById("minutes").value = minuteses[index];
  document.getElementById("description").value = descriptions[index];
  document.getElementById("importance").value = importances[index];
  document.getElementById("date").value = dates[index];

  document.getElementById("myModal").style.display = "block";

  temp_div = div;
}

function delete_task(div, editing) {
  var parent = document.getElementById("task-container");
  if (editing) {
    parent.removeChild(div);
  } else {
    if (delete_warning()){
      parent.removeChild(div);
    }
  }
}

function delete1() {
  var parent = document.getElementById("task-container");
  var div = document.getElementById("hardcode_task1");
  if (delete_warning()) {
    parent.removeChild(div);
  }
}

function delete2() {
  var parent = document.getElementById("task-container");
  var div = document.getElementById("hardcode_task2");
  if (delete_warning()) {
    parent.removeChild(div);
  }
}

function delete3() {
  var parent = document.getElementById("task-container");
  var div = document.getElementById("hardcode_task3");
  if (delete_warning()) {
    parent.removeChild(div);
  }
}

function delete4() {
  var parent = document.getElementById("task-container");
  var div = document.getElementById("hardcode_task4");
  if (delete_warning()) {
    parent.removeChild(div);
  }
}

function delete_warning() {
  return confirm("Are you sure you want to delete this task?");
}

function edit1() {
  document.getElementById("done-editing-button").style.visibility = "hidden";
  document.getElementById("done-editing-button").style.display = "none";
  document.getElementById("submit-button").style.display = "none";
  document.getElementById("submit-button").style.visibility = "hidden";
  document.getElementById("edit2-button").style.display = "none";
  document.getElementById("edit2-button").style.visibility = "hidden";
  document.getElementById("edit3-button").style.display = "none";
  document.getElementById("edit3-button").style.visibility = "hidden";
  document.getElementById("edit4-button").style.display = "none";
  document.getElementById("edit4-button").style.visibility = "hidden";

  document.getElementById("edit1-button").style.display = "block";
  document.getElementById("edit1-button").style.visibility = "visible";

  document.getElementById("name").value = "EECS 330";
  document.getElementById("type").value = "Class";
  document.getElementById("hours").value = "3";
  document.getElementById("minutes").value = "00";
  document.getElementById("description").value = "Upload P7 by this Sunday";
  document.getElementById("importance").value = 7;
  document.getElementById("date").value = "2018-03-16";

  updateModalColor();

  document.getElementById("myModal").style.display = "block";
}

function edit2() {
  document.getElementById("done-editing-button").style.visibility = "hidden";
  document.getElementById("done-editing-button").style.display = "none";
  document.getElementById("submit-button").style.display = "none";
  document.getElementById("submit-button").style.visibility = "hidden";
  document.getElementById("edit1-button").style.display = "none";
  document.getElementById("edit1-button").style.visibility = "hidden";
  document.getElementById("edit3-button").style.display = "none";
  document.getElementById("edit3-button").style.visibility = "hidden";
  document.getElementById("edit4-button").style.display = "none";
  document.getElementById("edit4-button").style.visibility = "hidden";

  document.getElementById("edit2-button").style.display = "block";
  document.getElementById("edit2-button").style.visibility = "visible";

  document.getElementById("name").value = "Laundry";
  document.getElementById("type").value = "Other";
  document.getElementById("hours").value = "2";
  document.getElementById("minutes").value = "00";
  document.getElementById("description").value = "Including bed sheets";
  document.getElementById("importance").value = 15;
  document.getElementById("date").value = "2018-03-16";

  updateModalColor();

  document.getElementById("myModal").style.display = "block";
}

function edit3() {
  document.getElementById("done-editing-button").style.visibility = "hidden";
  document.getElementById("done-editing-button").style.display = "none";
  document.getElementById("submit-button").style.display = "none";
  document.getElementById("submit-button").style.visibility = "hidden";
  document.getElementById("edit2-button").style.display = "none";
  document.getElementById("edit2-button").style.visibility = "hidden";
  document.getElementById("edit1-button").style.display = "none";
  document.getElementById("edit1-button").style.visibility = "hidden";
  document.getElementById("edit4-button").style.display = "none";
  document.getElementById("edit4-button").style.visibility = "hidden";

  document.getElementById("edit3-button").style.display = "block";
  document.getElementById("edit3-button").style.visibility = "visible";

  document.getElementById("name").value = "Kansaku";
  document.getElementById("type").value = "Work";
  document.getElementById("hours").value = "4";
  document.getElementById("minutes").value = "00";
  document.getElementById("description").value = "Wear all black";
  document.getElementById("importance").value = 27;
  document.getElementById("date").value = "2018-03-16";

  updateModalColor();

  document.getElementById("myModal").style.display = "block";
}

function edit4() {
  document.getElementById("done-editing-button").style.visibility = "hidden";
  document.getElementById("done-editing-button").style.display = "none";
  document.getElementById("submit-button").style.display = "none";
  document.getElementById("submit-button").style.visibility = "hidden";
  document.getElementById("edit2-button").style.display = "none";
  document.getElementById("edit2-button").style.visibility = "hidden";
  document.getElementById("edit3-button").style.display = "none";
  document.getElementById("edit3-button").style.visibility = "hidden";
  document.getElementById("edit1-button").style.display = "none";
  document.getElementById("edit1-button").style.visibility = "hidden";

  document.getElementById("edit4-button").style.display = "block";
  document.getElementById("edit4-button").style.visibility = "visible";

  document.getElementById("name").value = "J's Birthday";
  document.getElementById("type").value = "Social";
  document.getElementById("hours").value = "5";
  document.getElementById("minutes").value = "00";
  document.getElementById("description").value = "Bring present";
  document.getElementById("importance").value = 27;
  document.getElementById("date").value = "2018-03-16";
  updateModalColor();

  document.getElementById("myModal").style.display = "block";
}

function update1() {
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
    if (document.getElementById("type").value == "Social"){
      var type = "group";
    }
    else if (document.getElementById("type").value == "Work"){
      var type = "work";
    }
    else if (document.getElementById("type").value == "Class"){
      var type = "school";
    }
    else if (document.getElementById("type")) {
      var type = "note";
    }
    document.getElementById("hardcode-type-1").innerHTML = type;
    document.getElementById("name1").innerHTML = document.getElementById("name").value;
    document.getElementById("description1").innerHTML = document.getElementById("description").value;
    document.getElementById("hours1").innerHTML = document.getElementById("hours").value;
    document.getElementById("minutes1").innerHTML = document.getElementById("minutes").value;

    var importance = document.getElementById("importance").value;
    document.getElementById("hardcode_task1").style.backgroundColor = colorArray[importance];

    closemodal();
  }
}

function update2() {
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
    if (document.getElementById("type").value == "Social"){
      var type = "group";
    }
    else if (document.getElementById("type").value == "Work"){
      var type = "work";
    }
    else if (document.getElementById("type").value == "Class"){
      var type = "school";
    }
    else if (document.getElementById("type")) {
      var type = "note";
    }
    document.getElementById("hardcode-type-2").innerHTML = type;
    document.getElementById("name2").innerHTML = document.getElementById("name").value;
    document.getElementById("description2").innerHTML = document.getElementById("description").value;
    document.getElementById("hours2").innerHTML = document.getElementById("hours").value;
    document.getElementById("minutes2").innerHTML = document.getElementById("minutes").value;

    var importance = document.getElementById("importance").value;
    document.getElementById("hardcode_task2").style.backgroundColor = colorArray[importance];

    closemodal();
  }
}

function update3() {
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
    if (document.getElementById("type").value == "Social"){
      var type = "group";
    }
    else if (document.getElementById("type").value == "Work"){
      var type = "work";
    }
    else if (document.getElementById("type").value == "Class"){
      var type = "school";
    }
    else if (document.getElementById("type")) {
      var type = "note";
    }
    document.getElementById("hardcode-type-3").innerHTML = type;
    document.getElementById("name3").innerHTML = document.getElementById("name").value;
    document.getElementById("description3").innerHTML = document.getElementById("description").value;
    document.getElementById("hours3").innerHTML = document.getElementById("hours").value;
    document.getElementById("minutes3").innerHTML = document.getElementById("minutes").value;

    var importance = document.getElementById("importance").value;
    document.getElementById("hardcode_task3").style.backgroundColor = colorArray[importance];

    closemodal();
  }
}

function update4() {
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
    if (document.getElementById("type").value == "Social"){
      var type = "group";
    }
    else if (document.getElementById("type").value == "Work"){
      var type = "work";
    }
    else if (document.getElementById("type").value == "Class"){
      var type = "school";
    }
    else if (document.getElementById("type")) {
      var type = "note";
    }
    document.getElementById("hardcode-type-4").innerHTML = type;
    document.getElementById("name4").innerHTML = document.getElementById("name").value;
    document.getElementById("description4").innerHTML = document.getElementById("description").value;
    document.getElementById("hours4").innerHTML = document.getElementById("hours").value;
    document.getElementById("minutes4").innerHTML = document.getElementById("minutes").value;

    var importance = document.getElementById("importance").value;
    document.getElementById("hardcode_task4").style.backgroundColor = colorArray[importance];

    closemodal();
  }
}

// When the user clicks on <span> (x), close the modal
function closemodal() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}



function school_filter(){
  var taskdiv1 = document.getElementById("hardcode_task1");

  if (taskdiv1.style.display == "none"){
    taskdiv1.style.display = "block";
  }
  else{
     taskdiv1.style.display = "none";
  }

}

function work_filter(){
  var taskdiv3 = document.getElementById("hardcode_task3");

  if (taskdiv3.style.display == "none"){
    taskdiv3.style.display = "block";
  }
  else{
    taskdiv3.style.display = "none";
  }
}

function group_filter(){
  var taskdiv4 = document.getElementById("hardcode_task4");
  if (taskdiv4.style.display == "none"){
    taskdiv4.style.display = "block";
  }
  else{
    taskdiv4.style.display = "none";
  }
}

function note_filter(){
  var taskdiv2 = document.getElementById("hardcode_task2");
  if (taskdiv2.style.display == "none"){
    taskdiv2.style.display = "block";
  }
  else{
    taskdiv2.style.display = "none";
  }
}


/*
function createSortable(selector) {
  var sortable = document.getElementById(selector);
  Draggable.create(sortable.children, {
    type: "y",
    bounds: sortable,
    edgeResistance: 1,
    onPress: sortablePress,
    onDragStart: sortableDragStart,
    onDrag: sortableDrag,
    liveSnap: sortableSnap,
    onDragEnd: sortableDragEnd
  });
}
function sortablePress(event) {
  var t = this.target,
      i = 0,
      child = t;
  while(child = child.previousSibling) {
    if (child.nodeType === 1) i++;
  }
  t.currentIndex = i;
  t.currentHeight = t.offsetHeight;
  t.kids = Array.prototype.slice.call(t.parentNode.children, 0);
}
function sortableDragStart() {
  TweenLite.set(this.target, { color: "#88CE02" });
}
function sortableDrag() {
  var t = this.target,
      elements = t.kids.slice(0), // clone
      indexChange = Math.round(this.y / t.currentHeight),
      bound1 = t.currentIndex,
      bound2 = bound1 + indexChange;
  if (bound1 < bound2) { // moved down
    TweenLite.to(elements.splice(bound1+1, bound2-bound1), 0.15, { yPercent: -100 });
    TweenLite.to(elements, 0.15, { yPercent: 0 });
  } else if (bound1 === bound2) {
    elements.splice(bound1, 1);
    TweenLite.to(elements, 0.15, { yPercent: 0 });
  } else { // moved up
    TweenLite.to(elements.splice(bound2, bound1-bound2), 0.15, { yPercent: 100 });
    TweenLite.to(elements, 0.15, { yPercent: 0 });
  }
}
function sortableSnap(y) {
  var h = this.target.currentHeight;
  return Math.round(y / h) * h;
}
function sortableDragEnd() {
  var t = this.target,
      max = t.kids.length - 1,
      yPos = this.y,
      newIndex = Math.round(this.y / t.currentHeight);
  newIndex += (newIndex < 0 ? -1 : 0) + t.currentIndex;
  if (newIndex === max) {
    t.parentNode.appendChild(t);
  } else {
    t.parentNode.insertBefore(t, t.kids[newIndex+1]);
  }
  TweenLite.set(t.kids, { yPercent: 0, overwrite: "all" });
  TweenLite.set(t, { y: 0, color: "" });
}*/
