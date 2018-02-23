var taskCount = -1;
var colorArray = ["#8EFF8A","#92FE89","#95FE88","#98FE88","#9BFE87","#9FFE87","#A2FE86","#A5FE86","#A9FE85","#ACFE85","#B0FE84","#B3FE84","#B6FE83","#BAFE83","#BEFE82","#C1FE82","#C5FE81","#C8FE81","#CCFE80","#D0FE7F","#D4FE7F","#D7FE7E","#DBFD7E","#DFFD7D","#E3FD7D","#E7FD7C","#EBFD7C","#EFFD7B","#F3FD7B","#F7FD7A","#FBFD7A","#FDFB79","#FDF779","#FDF378","#FDEF78","#FDEA77","#FDE677","#FDE276","#FDDD76","#FDD975","#FDD574","#FDD074","#FDCC73","#FCC773","#FCC372","#FCBE72","#FCB971","#FCB571","#FCB070","#FCAB70","#FCA76F","#FCA26F","#FC9D6E","#FC986E","#FC936D","#FC8F6D","#FC8A6C","#FC856C","#FC806B","#FC7B6B","#FC766A","#FC716A","#FC6C69","#FC686A"];
var names = [];
var types = [];
var importances = [];
var descriptions = [];
var minuteses = [];
var hourses = [];
var dates = [];


function date() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  if (mm == "0") {
    var month = "January";
  } else if (mm == "1") {
    var month = "February";
  } else if (mm == "2") {
    var month = "March";
  } else if (mm == "3") {
    var month = "April";
  } else if (mm == "4") {
    var month = "May";
  } else if (mm == "5") {
    var month = "June";
  } else if (mm == "6") {
    var month = "July";
  } else if (mm == "7") {
    var month = "August";
  } else if (mm == "8") {
    var month = "September";
  } else if (mm == "9") {
    var month = "October";
  } else if (mm == "10") {
    var month = "November";
  } else if (mm == "11") {
    var month = "December";
  }
  var parent = document.getElementById("header");
  var replaced = document.getElementById("replaced-date");
  var date = document.createElement("h1");
  var date_info = document.createTextNode(month + ' ' + dd);
  date.appendChild(date_info);
  date.className = "header-info";
  parent.replaceChild(date,replaced);
}


// When the user clicks the button, open the modal
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

  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;

  taskCount--;

  if (name == '' || (type != "group" && type != "work" && type != "school") || (hours == '' || minutes == '')) {
    flag = true;
  }
  return flag;
}

function createTask() {
  if (validate_form()) {
    alert("Please fill out all required fields");
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


    document.getElementById("no-tasks").style.display = "none";

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
      delete_task(div);
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
    name_para.className = "name";
    description_para.className = "description";
    hours_para.className = "hours";
    colon_para.className = "colon";
    minutes_para.className = "minutes";
    type_para.className = "material-icons type";
    done_label.className = "done";
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
        div.style.backgroundColor = "#a4a6a8";
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
}

function addTaskByImportance(container,div) {
  flag = false;
  /*
  index = names.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
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

function setBackgroundColor(div) {
  console.log(importances);
  index = names.length > 9 ? parseInt(div.id.slice(-2)) : parseInt(div.id.slice(-1));
  //console.log(index);
  div.style.backgroundColor = colorArray[importances[index]];
  if (document.getElementById("done" + index.toString())){
    if (document.getElementById("done" + index.toString()).checked) {
      div.style.backgroundColor = "#a4a6a8";
    }
  }
  createSortable("task-container");
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
  delete_task(div);
  document.getElementById("done-editing-button").style.visibility = "visible";
  document.getElementById("done-editing-button").style.cssFloat = "left";
  document.getElementById("submit-button").style.visibility = "hidden";
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

  document.getElementById("myModal").style.display = "block";

}

function delete_task(div) {
  var parent = document.getElementById("task-container");
  parent.removeChild(div);
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
      yPos = this.y || endY,
      newIndex = Math.round(this.y / t.currentHeight);

  newIndex += (newIndex < 0 ? -1 : 0) + t.currentIndex;
  if (newIndex === max) {
    t.parentNode.appendChild(t);
  } else {
    t.parentNode.insertBefore(t, t.kids[newIndex+1]);
  }
  TweenLite.set(t.kids, { yPercent: 0, overwrite: "all" });
  TweenLite.set(t, { y: 0, color: "" });
}
