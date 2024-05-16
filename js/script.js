let navigationblock = document.getElementById("navBar");
let buregrblock = document.getElementById("burgerBar")

buregrblock.addEventListener("click",function() {
    navigationblock.classList.toggle("active");
});