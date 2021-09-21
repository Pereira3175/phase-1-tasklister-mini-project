document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let task = document.querySelector('form')
 task.addEventListener('submit', (e) => {
  e.preventDefault()
  taskToDo(document.getElementById("new-task-description").value) 
  task.reset()

  });
});

function taskToDo (todo) {
  let p = document.createElement('p')
  let btn = document.createElement("button")
  btn.addEventListener('click', deleteBtn)
  btn.textContent = "x"
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.getElementById("list").appendChild(p)
  p.addEventListener('click', displayDate)


}

function deleteBtn(event) {
  event.target.parentNode.remove()
}



