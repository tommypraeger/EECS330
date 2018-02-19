
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
    document.getElementById("name").value = '';
    document.getElementById("type").value = '';
    document.getElementById("minutes").value = '';
    document.getElementById("description").value = '';
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
}

function validate_form() {
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

  var minutes = document.getElementById("minutes").value;

  if (name == '' || (type != "group" && type != "work" && type != "school") || minutes == '') {
    flag = true;
  }
  return flag;
}

function createTask() {
  if (validate_form()) {
    alert("Please fill out all required fields");
  }
  else {
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

    var minutes = document.getElementById("minutes").value;

    if (document.getElementById("one").checked){
      var importance = "!";
    }
    else if (document.getElementById("two").checked){
      var importance = "!!";
    }
    else if (document.getElementById("three").checked){
      var importance = "!!!";
    }
    if (document.getElementById("description").value != '' && document.getElementById("description").value != null){
      var description = document.getElementById("description").value;
    } else {
      var description = '';
    }

    document.getElementById("no-tasks").style.display = "none";

    var div = document.createElement("div");

    var importance_para = document.createElement("p");
    var importance_info = document.createTextNode(importance);
    importance_para.appendChild(importance_info);
    div.appendChild(importance_para);

    var name_para = document.createElement("p");
    var name_info = document.createTextNode(name);
    name_para.appendChild(name_info);
    div.appendChild(name_para);

    var description_para = document.createElement("p");
    var description_info = document.createTextNode(description);
    description_para.appendChild(description_info);
    div.appendChild(description_para);

    var length_para = document.createElement("p");
    var length_info = document.createTextNode(minsToHs(minutes));
    length_para.appendChild(length_info);
    div.appendChild(length_para);

    var type_para = document.createElement("i");
    var type_info = document.createTextNode(type);
    type_para.appendChild(type_info);
    div.appendChild(type_para);

    div.className = "task-div";
    importance_para.className = "importance";
    name_para.className = "name";
    description_para.className = "description";
    length_para.className = "length";
    type_para.className = "material-icons type";

    var element = document.getElementById("task-container");
    element.appendChild(div);
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

function minsToHs(d) {
    d = Number(d);
    //console.log(d);

    var hours = Math.floor(d / 60);
    var mins = Math.floor(d % 60);
    //console.log(hours);
    //console.log(mins);

    return `0${hours}`.slice(-1) + ":" + `00${mins}`.slice(-2);
}

//window.onload = date();
