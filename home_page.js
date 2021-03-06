function confirm_password(){
    document.getElementById("confirm").style.display="block";
    document.getElementById("create").style.display="block";
    document.getElementById("signup").style.display="none";
    document.getElementById("login").style.display="none";
};

function create() {
  if (document.getElementById("password").value != document.getElementById("confirm").value) {
    alert("Passwords don't match!")
  } else {
    checkempty();
  }
}

function checkempty() {
  if (document.getElementById("password").value == '' && document.getElementById("confirm").value == '') {
    alert("Enter username and password")
  } else {
    window.location.href = "https://tommypraeger.github.io/EECS330/daily.html";
  }
}

document.getElementById("confirm").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("create").click();
  }
});
