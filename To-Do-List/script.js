const input = document.getElementById("text");
const button = document.querySelector(".button");
const items = document.querySelector(".items");

button.addEventListener("click", function () {
  const task = input.value.trim();
  const colors = ["#FFD700", "#ADFF2F", "#87CEFA", "#FFB6C1", "#DDA0DD", "#FFA07A"];

  if (task != "") {
    const element = document.createElement("div");
    const deldiv = document.createElement("button")
    element.classList.add("task");
    deldiv.classList.add("deldiv")
    element.innerText = task;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
    items.appendChild(element);
    element.appendChild(deldiv)
    deldiv.addEventListener("click" , function(){
      element.remove()
    })
    setTimeout(() => {
      element.classList.add("show");
    }, 10);
    input.value = "";
  } 
});
