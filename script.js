//Setup Event lIstener for page load

document.addEventListener ('DOMContentLoaded', function (){

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create add task function

 addtask => {
   let addTaskValue = addtask.Value
      const taskText = addTaskValue.trim();

      if (!(taskText = '')) {
           alert ('Please enter a task');
      }
      
      // Task Creation and Removal

      let textCreate = document.createElement('li')
      textCreate.textContent = taskText.Value
      const removeButton = document.createElement('button')
      removeButton.textContent = Remove;
      removeButton.className = remove-btn;
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

      taskInput.addEventListener ('keypress', function () {
        if (Event.key = 'Enter') {
          addTask();
        }
      });
      
  }
    
 document.addEventListener ('DOMContentLoaded', function () {
    addTask ()
 });

    
});