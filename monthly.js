var taskCount = -1;
var colorArray = [
  "#FFFBFB", "#FFF8F8", "#FFF5F5", "#FFF2F2","#FFEFEF", "#FFECEC", "#FFE9E9", "#FFE6E6", "#FFE3E3", "#FFE0E0", "#FFDDDD", "#FFDADA", "#FFD7D6", "#FFD4D3", "#FFD1D0", "#FFCECD", "#FFCBCA" ,"#FFC8C7" , "#FFC5C4" , "#FFC2C1", "#FFBFBE", "#FFBCBB" ,
  "#FFB9B8","#FFB6B5","#FFB3B2","#FFB0AE","#FFADAB","#FFAAA8","#FFA7A5","#FFA4A2","#FFA19F", "#FF9D9C", "#FF9A99" , "#FF9796", "#FF9493", "#FF9190" , "#FF8E8D", "#FF8D89", "#FF8886", "#FF8583", "#FF8280", "#FF7F7D" , "#FF7C7A" , "#FF7977", "#FF7674", "#FF7371" , "#FF706E", "#FF6D6B", "#FF6A68", "#FF6765", "#FF6461", "#FF615E", "#FF5E5B", "#FF5B58", "#FF5855", "#FF5552", "#FF524F", "#FF4F4C", "#FF4C49", "#FF4946", "#FF4643", "#FF4340", "#FF403D", "#F53740"
];


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
}

function closemodal() {
    document.getElementById("myModal").style.display = "none";
}

function createTask() {
    document.getElementById("myModal").style.display = "none";
}
