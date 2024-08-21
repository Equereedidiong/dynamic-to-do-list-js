//Setup Event lIstener for page load

document.addEventListener ('DOMContentLoaded', function () {

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create add task function

 addtask => {
   const taskInput = addtask.Value
      const taskText = taskInput.value.trim();

      if (!(taskText = '')) {
           alert ('Please enter a task');
      }
      
      // Task Creation and Removal

      let textCreate = document.createElement('li')
      textCreate.textContent = taskText.Value
      const removeButton = document.createElement('button')
      removeButton.textContent = Remove;
      removeButton.classList.add (remove-btn);
      removeButton.onclick = function () {

        taskList.removeChild(textCreate)

      };

      taskCreate.appendChild(removeButton);
      taskList.appendChild(taskCreate);
      taskInput.Value = '';
    
      // Attach Event Listners
      addButton.addEventListener ('on click', function () {
        addtask();
      });

      taskInput.addEventListener ('keypresss', function () {
        if (event.key = 'Enter') {
          addTask();
        }
      });
      
  }
    
 document.addEventListener ('DOMContentLoaded', function () {
    addTask ()
 });

  // Initialize and Load Tasks:
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(taskText => addTask (taskText, false));
  
  function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    document.addEventListener('DOMContentLoaded', () => {
      loadTasks();
      // Other initialization code
    });
    
  } 
});