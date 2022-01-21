# Task manager backend project

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
The project was made to get more familiar with backend projects using Node.js and CRUD. It's a simple task manager, where the user can create new tasks and 
read/update/delete existing ones. The project stores the used database in a MongoDB cloud database, and uses an MVC (Model-View-Controller) design pattern, 
making it easier to code, debug and test.

In the future, especially if deploying the project, I'd like to add some sort of user authentication and other essential security features, such as API protection.
Made with the help of John Smilga's tutorial (https://www.youtube.com/watch?v=rltfdjcXjmk) and the frontend he provided.
	
## Technologies
Project is created with:
* Javascript
* Node.js
* MongoDB
* Mongoose
	
## Setup
To run this project, download the files, set up the .env and set the MONGO_URI variable equal to the DB connection string. After that type'npm install' into 
the console, then when the installation is complete, type 'npm start'. Open your browser and go to the link 'http://localhost:5000/' with the default port settings.
I haven't deployed the project on a website because of the lack of security, so the database connection may not work.

The main view shows the user the existing tasks, and allows them to add a new task to the list. 
![main screen](https://user-images.githubusercontent.com/94180117/150567216-fb0d78f3-e825-4d11-be7b-f28fae56396d.png)

If we click a task, for example 'Take out the trash' we are taken to a different page, where we can edit the task, or mark it as done.
![edit screen](https://user-images.githubusercontent.com/94180117/150567536-f20d01d5-211b-4e34-b7ed-cde0424ba4da.png)
