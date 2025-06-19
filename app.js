
// add new features - button
// add new features - form

function addTask() {
  const taskInput = document.getElementById('task');
  const task = taskInput.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
    document.getElementById('list').appendChild(li);
    taskInput.value = '';
  }
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}
