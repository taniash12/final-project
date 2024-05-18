let navigationblock = document.getElementById("navBar");
let buregrblock = document.getElementById("burgerBar");

buregrblock.addEventListener("click", function () {
  navigationblock.classList.toggle("active");
});

document.getElementById("email").addEventListener("input", function () {
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    text.innerHTML = "თქვენი მეილი სწორია";
    text.style.color = "#00ff00";
  } else {
    text.innerHTML = "თქვენი მეილი არასწორია";
    text.style.color = "#D10F0F";
  }
  if (email == "") {
    text.innerHTML = "";
    text.style.color = "#D10F0F";
  }
});
