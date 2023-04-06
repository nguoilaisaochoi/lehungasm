/*function showLoginForm() {
  var abc = document.getElementById("menu");
  if (abc.style.display === "flex") {
    abc.style.display = "none";
  } else {
    abc.style.display = "flex";
  }
}*/
function showmenu() {
  var abc = document.getElementById("menu");
  if (abc.classList.contains("active")) {
    abc.classList.remove("active");
  } else {
    abc.classList.add("active");
  }
}
function scrollToBottom() {
  document.getElementById("cn2").scrollIntoView({ behavior: "smooth" });
}
function ToTop() {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
}
