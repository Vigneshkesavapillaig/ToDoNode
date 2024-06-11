This is a simple Todo List application built with React, Redux, and Axios. The application allows users to create, update, and delete tasks within different todo lists. It leverages a backend server to persist data,
ensuring that the state of todo lists and their items is consistent across sessions.

Features:
  1)Add a New List: Enter the title of the new list in the input field and click the "Add List" button.
  2)Add Items to a List: Enter the item title in the input field within a list and click the "Add" button.
  3)Edit an Item: Change the text of an item directly in the textarea.
  4)Delete an Item: Click the trash icon next to an item to delete it.
Technology Stack:
  Frontend: React, Redux, Axios, React Bootstrap, React Icons
  Backend: Node.js, Express
  Database: MongoDB
  State Management: Redux
  Styling: CSS, React Bootstrap
Setup and Installation:
Prerequisites
  Node.js and npm installed
  Backend server running (API endpoints assumed to be http://localhost:5000/api/additionalLists)
Steps:
  Clone the repository:
    git clone https://github.com/yourusername/ToDoList.git
    cd ToDoList
  Install frontend dependencies:
    npm install
  Setup and run the backend server:
    Navigate to the backend directory (assumed to be /toDoNode):
      cd toDoNode
  Install backend dependencies:
      npm install
  Create a .env file in the backend directory and add the following:
      PORT=5000
      MONGO_URI=mongodb://localhost:27017/todolist
  Start the backend server:
      npm start
  Run the frontend application:
      Navigate back to the frontend directory:
      cd ../toDoApp
  Start the frontend application:
      npm start
  Ensure Backend Server is Running:
      Make sure your backend server is running and accessible at http://localhost:5000.
  Project Structure:
      src/Components/AddList.js: Component for adding new lists.
      src/Components/ListItem.js: Component for displaying and managing items within a list.
      src/Components/ToDoList.js: Main component that integrates AddList and ListItem components.
      src/slices/toDoSlice.js: Redux slice managing todo list state.
      src/store.js: Redux store configuration.
      backend/models/List.js: Mongoose schema and model for todo lists.
      backend/routes/additionalLists.js: Express routes for handling todo list operations.
      backend/server.js: Main server file for the backend.
  Database Setup:
      Install MongoDB:
        Follow the instructions for your operating system from the official MongoDB installation guide.
      Start MongoDB:
        Make sure MongoDB is running. By default, MongoDB runs on mongodb://localhost:27017.
      Database Configuration:
        The application uses a MongoDB database named todolist. The connection URI is specified in the .env file in the backend directory.

