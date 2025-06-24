## Simple Note-Taking Application
This is a straightforward note-taking application built with React, designed to help users quickly jot down thoughts, ideas, or reminders. It provides core functionalities for creating new notes and deleting existing ones, demonstrating fundamental React concepts like component state management and inter-component communication.

## Features
This application offers the following key functionalities:

## Add New Notes:

Users can input a title and content for their notes.

The application captures this input and adds the new note to a central list.

Each new note is then rendered as a separate, distinct note component on the screen.

## Delete Notes:

Each individual note component includes a button to trigger its deletion.

![Note taking web app](image/image-1.png)

Upon activation, a callback function is used to communicate the unique identifier (ID) of the note back to the main application.

![Note taking web app](image/image-2.png) 
The application then filters its list of notes, removing the item that matches the provided ID, and re-renders the remaining notes.



New notes created by the user are passed from the input component back to the App component's state.


The App component then iterates over this array, rendering a dedicated Note component for each item.

For deletion, each Note component receives a unique id and a delete callback function. When the delete action is triggered within a Note, its id is passed back to the App component, which then updates its state to remove the corresponding note.

