document.addEventListener("DOMContentLoaded", () => {
 const input = document.querySelector('#new-task-description')
 document.querySelector('#create-task-form').addEventListener('submit', (e) => {
e.preventDefault()
  const newTask = document.createElement('li') 
newTask.innerHTML = input.value
document.querySelector('#tasks').appendChild(newTask)
 })
  // your code here
});
