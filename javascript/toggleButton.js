function toggleButton() {
  var x = document.getElementById("doctorAcc");
  var y = document.getElementById("doctorAcc1");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }


}
