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
    window.location.href = "daily.html";
  }
}

function checkempty() {
  if (document.getElementById("password").value == '' && document.getElementById("confirm").value == '') {
    alert("Enter username and password")
  } else {
    window.location.href = "daily.html";
  }
}

