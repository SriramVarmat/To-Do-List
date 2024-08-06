# To-Do-List

This project is a simple and effective to-do list web application designed to help users manage their daily tasks. Built using HTML, CSS, and JavaScript, the application offers essential features for adding, displaying, and removing tasks, with all data being stored locally within the user's browser.

## Features

- **Adding Tasks:** When the "Add" button is clicked, the task is saved to the browser's local storage with the heading as the key and the content as the value.
- **Displaying Tasks:** On page load, the application retrieves all tasks from local storage and displays them in a list format.
- **Deleting Tasks:** When a task is deleted, it is removed from both the display and the local storage.

## Utilization of Local Storage

- **Adding Tasks:** Tasks are saved to local storage using the localStorage.setItem(key, value) method. The task heading is used as the key, and the task content is used as the value. This ensures that each task is uniquely identifiable by its heading.
- **Displaying Tasks:** On page load, all tasks are retrieved from local storage using the localStorage.key(index) and localStorage.getItem(key) methods. This allows the application to reconstruct the task list even after the page is refreshed.
- **Deleting Tasks:** When a task is deleted, it is removed from local storage using the localStorage.removeItem(key) method. This ensures that the task is permanently deleted and does not reappear on page reload.


## Technologies Used

- **HTML5:** For the structure of the web application.
- **CSS3:** For styling and layout.
- **JavaScript:** For interactivity and DOM manipulation.
- **Local Storage:** For persistent data storage.


## Screenshots of my work
![image](https://github.com/user-attachments/assets/edc5bdc9-3ff8-4417-a85b-5565f24281b9)

