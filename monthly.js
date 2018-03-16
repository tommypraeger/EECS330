var colorArray = [
    "#FFFBFB", "#FFF8F8", "#FFF5F5", "#FFF2F2","#FFEFEF", "#FFECEC", "#FFE9E9", "#FFE6E6", "#FFE3E3", "#FFE0E0", "#FFDDDD", "#FFDADA", "#FFD7D6", "#FFD4D3", "#FFD1D0", "#FFCECD", "#FFCBCA" ,"#FFC8C7" , "#FFC5C4" , "#FFC2C1", "#FFBFBE", "#FFBCBB" ,
    "#FFB9B8","#FFB6B5","#FFB3B2","#FFB0AE","#FFADAB","#FFAAA8","#FFA7A5","#FFA4A2","#FFA19F", "#FF9D9C", "#FF9A99" , "#FF9796", "#FF9493", "#FF9190" , "#FF8E8D", "#FF8D89", "#FF8886", "#FF8583", "#FF8280", "#FF7F7D" , "#FF7C7A" , "#FF7977", "#FF7674", "#FF7371" , "#FF706E", "#FF6D6B", "#FF6A68", "#FF6765", "#FF6461", "#FF615E", "#FF5E5B", "#FF5B58", "#FF5855", "#FF5552", "#FF524F", "#FF4F4C", "#FF4C49", "#FF4946", "#FF4643", "#FF4340", "#FF403D", "#F53740"
];
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthIndex = 2;

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

  var num_times_pressing_create_task = 14;
  var bool_display = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false];


  var editing = 0;
  var temp_div;

  var jan_vec = [" ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31," "," "," "];
  var feb_vec = [" "," "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28," "," "," "];
  var mar_vec = [" "," "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  var apr_vec = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30," "," "," "," "," "];
  var may_vec = [" "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31," "," "];
  var jun_vec = [" "," "," "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  var jul_vec = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31," "," "," "," "];
  var aug_vec = [" "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31," "];
  var sep_vec = [" "," "," "," "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  var oct_vec = [" ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31," "," "," "];
  var nov_vec = [" "," "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30," "];
  var dec_vec = [" "," "," "," "," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  var nav_flag = 1;
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

function closeNav() {

}
/*function openNav() {
  if (nav_flag == 1) {
    document.getElementById("sidebar").style.width = "200px";
    nav_flag = 0;
  }
  else {
    document.getElementById("sidebar").style.width = "150px";
    nav_flag = 1;
  }
}*/
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

  if (name == '' || (type != "group" && type != "work" && type != "school" && type != "note") || (hours == '' || minutes == '')) {
    flag = true;
  }
  return flag;
}

  //only use in createTask();

// function today_date(){
//
//   var t = new Date();
//   var year = t.getFullYear();
//   var month = t.getMonth() + 1;
//   var day = t.getDate();
//   if (month < 10) {
//     month ='0'+month;
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
//   }
// }
//   //only in scope during createTask function
// function validate_date(date){
//   if (date == today_date()) {
//     return true;
//   }
//   else {
//     return false;
//   }
//   }

// function createTask() {
//   var date = document.getElementById("date").value;
//   if (validate_form()) {
//     alert("Please fill out all required fields");
//   }
//   // else if (validate_date(date) == false) {
//   //   closemodal();
//   // }
//   else {
//     num_times_pressing_create_task++;
//     taskCount++;
//     if (num_times_pressing_create_task == 16) {
//       document.getElementById('t15').style.visibility = "visible";
//       closemodal();
//     }
//     else if (num_times_pressing_create_task == 17) {
//
//     }
//     else {
//       month=month;
//     }
//     if (day<10) {
//       day ='0'+day;
//     }
//     else {
//       day=day;
//     }
//     var output = year+'-'+month+'-'+day;
//     return output;
//   }
// }

  // //only in scope during createTask function
  // function validate_date(date){
  //   if (date == today_date()) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

function createTask() {
    var date = document.getElementById("date").value;
    if (validate_form()) {
      alert("Please fill out all required fields");
    }
    // else if (validate_date(date) == false) {
    //   closemodal();
    // }
    else {
      num_times_pressing_create_task++;
      taskCount++;
      if (num_times_pressing_create_task == 15) {
        document.getElementById('t15').style.visibility = "visible";
        bool_display[14]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 16) {

        document.getElementById('t16').style.visibility = "visible";
        bool_display[15]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 17) {

        document.getElementById('t17').style.visibility = "visible";
        bool_display[16]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 18) {
        document.getElementById('t18').style.visibility = "visible";
        bool_display[17]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 19) {
        document.getElementById('t19').style.visibility = "visible";
        bool_display[18]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 20) {
        document.getElementById('t20').style.visibility = "visible";
        bool_display[19]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 21) {
        document.getElementById('t21').style.visibility = "visible";
        bool_display[20]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 22) {
        document.getElementById('t22').style.visibility = "visible";
        bool_display[21]=true;
        closemodal();
      }
      else if (num_times_pressing_create_task == 23) {
        document.getElementById('t23').style.visibility = "visible";
        bool_display[22]=true;
        closemodal();
      }
  }

    /*
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

    if (num_times_pressing_create_task == 1) {
      document.getElementById("task_sun1").style.visibility = "visible";
    }
    if (num_times_pressing_create_task == 2) {
      document.getElementById("task_mon1").style.visibility = "visible";
    }
    if (num_times_pressing_create_task == 3) {
      document.getElementById("task_fri0").style.visibility = "visible";
    }*/
  }


  window.onload = function() {
    var prevDay = document.getElementById("prev-day");
    var nextDay = document.getElementById("next-day");
    var leftArrow = document.getElementById("left-arrow");
    var rightArrow = document.getElementById("right-arrow");
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
      rightArrow.style.marginLeft = "6%";
    }
    nextDay.onmouseout = function() {
      //nextDay.style.backgroundColor = "transparent";
      rightArrow.style.color = "#e0e0e0";
      rightArrow.style.marginLeft = "4%";
    }
    prevDay.onclick = function() {
      //control monthIndex
      monthIndex--;
      console.log(monthIndex);
      if (monthIndex < 0){
        monthIndex = 11;
        console.log(monthIndex);
      }
      //set month display
      document.getElementById("month").innerHTML = monthArray[monthIndex%12];
      //set task display to none based on monthIndex
      if (monthIndex!=2) {
        var dayID ='t';
        for (var i = 0; i < 22; i++) {
          bool_display[i]==false;
          var temp = i + 1;
          temp = dayID+temp;
          document.getElementById(temp).style.visibility = "collapse";
          //set background to grey or regular based on monthIndex
          if (monthIndex<2) {
            console.log('switch to grey');
            document.getElementsByClassName('grey')[0].style.backgroundColor = "#BEBEBE";
            //"rgba(47,79,79, 0.1)";
          }
          else {
            console.log('switch to normal')
            document.getElementsByClassName('grey')[0].style.backgroundColor = "#fff8e7";
          }
        }
      }
      //set task display to visible based on monthIndex
      else if(monthIndex==2){
        var temp2 = num_times_pressing_create_task;
        for (var i = 0; i < temp2; i++) {
          bool_display[i]=true;
          var dayID ='t';
          var temp = i + 1;
          temp = dayID+temp;
          document.getElementById(temp).style.visibility = "visible";
          //set backgroundColor to og
          //document.getElementById('month_container').style.backgroundColor = "#fff8e7";
        }
      }
      var fuck = 'b';
      if (monthIndex==0) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=jan_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==1) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=feb_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==2) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=mar_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==3) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=apr_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==4) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=may_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==5) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=jun_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==6) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=jul_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==7) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=aug_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==8) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=sep_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==9) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=oct_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==10) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=nov_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==11) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=dec_vec[i];
          fuck = 'b';
        }
      }
    }
    nextDay.onclick = function() {
      monthIndex++;
      if (monthIndex == 12) {
        monthIndex = 0;
        console.log(monthIndex);
        document.getElementById("month").innerHTML = monthArray[monthIndex%12];
        //reset color
        if (monthIndex<2) {
          console.log('switch to grey');
          document.getElementsByClassName('grey')[0].style.backgroundColor = "#BEBEBE";

          //"rgba(47,79,79, 0.3)";
        }
        else {
          console.log('switch to normal')
          document.getElementsByClassName('grey')[0].style.backgroundColor = "#fff8e7";
        }
      }
      else{
        console.log(monthIndex);
        document.getElementById("month").innerHTML = monthArray[monthIndex%12];
        if (monthIndex!=2) {
          var dayID ='t';
          for (var i = 0; i < 22; i++) {
            bool_display[i]==false;
            var temp = i + 1;
            temp = dayID+temp;
            document.getElementById(temp).style.visibility = "collapse";
            //set backgroundColor to grey
            if (monthIndex<2) {
              console.log('switch to grey');
              document.getElementsByClassName('grey')[0].style.backgroundColor = "#BEBEBE";

              //"rgba(47,79,79, 0.3)";
            }
            else {
              console.log('switch to normal')
              document.getElementsByClassName('grey')[0].style.backgroundColor = "#fff8e7";
            }
          }
        }
        else if (monthIndex==2){
          console.log(monthIndex);
          var temp2 = num_times_pressing_create_task;
          for (var i = 0; i < temp2; i++) {
            bool_display[i]=true;
            var dayID ='t';
            var temp = i + 1;
            temp = dayID+temp;
            document.getElementById(temp).style.visibility = "visible";
            //set background-color back to normal
            console.log('switch to normal')
            document.getElementsByClassName('grey')[0].style.backgroundColor = "#fff8e7";
          }
        }
      }
      var fuck = 'b';
      if (monthIndex==0) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=jan_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==1) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=feb_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==2) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=mar_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==3) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=apr_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==4) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=may_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==5) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=jun_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==6) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=jul_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==7) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=aug_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==8) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=sep_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==9) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=oct_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==10) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=nov_vec[i];
          fuck = 'b';
        }
      }
      else if (monthIndex==11) {
        for (var i = 0; i < 35; i++) {
          fuck = fuck+i;
          document.getElementsByClassName(fuck)[0].innerHTML=dec_vec[i];
          fuck = 'b';
        }
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

  function addTaskByImportance(container,div) {
    flag = false;
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
  var taskdiv2 = document.getElementById("t2");
  var taskdiv3 = document.getElementById("t3");
  var taskdiv4 = document.getElementById("t4");
  var taskdiv5 = document.getElementById("t5");
  var taskdiv10 = document.getElementById("t10");


  if (taskdiv2.style.visibility == "hidden"){
    taskdiv2.style.visibility = "visible";
  }
  else{
     taskdiv2.style.visibility = "hidden";
  }

  if (taskdiv3.style.visibility == "hidden"){
    taskdiv3.style.visibility = "visible";
  }
  else{
     taskdiv3.style.visibility = "hidden";
  }

  if (taskdiv4.style.visibility == "hidden"){
    taskdiv4.style.visibility = "visible";
  }
  else{
     taskdiv4.style.visibility = "hidden";
  }

  if (taskdiv5.style.visibility == "hidden"){
    taskdiv5.style.visibility = "visible";
  }
  else{
     taskdiv5.style.visibility = "hidden";
  }

  if (taskdiv10.style.visibility == "hidden"){
    taskdiv10.style.visibility = "visible";
  }
  else{
     taskdiv10.style.visibility = "hidden";
  }

}

function work_filter(){
  var taskdiv11 = document.getElementById("t11");
  var taskdiv12 = document.getElementById("t12");
  var taskdiv13 = document.getElementById("t13");


  if (taskdiv11.style.visibility == "hidden"){
    taskdiv11.style.visibility = "visible";
  }
  else{
     taskdiv11.style.visibility = "hidden";
  }

  if (taskdiv12.style.visibility == "hidden"){
    taskdiv12.style.visibility = "visible";
  }
  else{
     taskdiv12.style.visibility = "hidden";
  }

  if (taskdiv13.style.visibility == "hidden"){
    taskdiv13.style.visibility = "visible";
  }
  else{
     taskdiv13.style.visibility = "hidden";
  }
}

function group_filter(){
  var taskdiv6 = document.getElementById("t6");
  var taskdiv7 = document.getElementById("t7");
  var taskdiv9 = document.getElementById("t9");


  if (taskdiv6.style.visibility == "hidden"){
    taskdiv6.style.visibility = "visible";
  }
  else{
     taskdiv6.style.visibility = "hidden";
  }

  if (taskdiv7.style.visibility == "hidden"){
    taskdiv7.style.visibility = "visible";
  }
  else{
     taskdiv7.style.visibility = "hidden";
  }

  if (taskdiv9.style.visibility == "hidden"){
    taskdiv9.style.visibility = "visible";
  }
  else{
     taskdiv9.style.visibility = "hidden";
  }
}

function note_filter(){
  var taskdiv1 = document.getElementById("t1");
  var taskdiv8 = document.getElementById("t8");
  var taskdiv14 = document.getElementById("t14");


  if (taskdiv1.style.visibility == "hidden"){
    taskdiv1.style.visibility = "visible";
  }
  else{
     taskdiv1.style.visibility = "hidden";
  }

  if (taskdiv8.style.visibility == "hidden"){
    taskdiv8.style.visibility = "visible";
  }
  else{
     taskdiv8.style.visibility = "hidden";
  }


  if (taskdiv14.style.visibility == "hidden"){
    taskdiv14.style.visibility = "visible";
  }
  else{
     taskdiv14.style.visibility = "hidden";
  }

}
