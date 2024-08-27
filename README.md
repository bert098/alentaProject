# Setup instructions
1. Make sure you are on the most current version of Node
2. run npm install
3. run cd ./client 
4. run npm install again 
5. run cd ..
6. now run npm start 

# API Docs 
1. Create a task
Endpoint: POST /jobs
Description: Creates a new task with the provided details.

Request Body:
{
  "name": "string",
  "type": "string",
  "status": "string",
  "dueDate": "string (ISO 8601 format)",
  "assignee": "string"
}
Response:
201 Created: Successfully created the task.
400 Bad Request: Invalid request body.

2. Get a task
Endpoint: Get /jobs/:id
Description: Gets an existing task by Id.
Request Parameters:
id: The ID of the task to get (integer).
Response:

200 OK: Successfully got the task.
404 Not Found: task not found.

3. Retrieve tasks
Endpoint: GET /jobs
Description: Retrieves a list of all tasks.
Response:
200 OK: Returns a list of tasks.

4. Update a task
Endpoint: PUT /jobs/:id
Description: Updates the details of an existing task.
Request Parameters:
id: The ID of the task to update (integer).

Request Body:
{
  "name": "string",
  "type": "string",
  "status": "string",
  "dueDate": "string (ISO 8601 format)",
  "assignee": "string"
}

Response:
200 OK: Successfully updated the task.
400 Bad Request: Invalid request body.

5. Delete a task
Endpoint: DELETE /jobs/:id
Description: Deletes an existing task.
Request Parameters:
id: The ID of the task to delete (integer).

Response:
200 OK: Successfully deleted the task.
404 Not Found: task not found.

# Architecture 
For my front end I went with a simple Vite and React app, I chose Vite for it's great support and Libraries and the same goes for React
Vite is simply a build Tool so the front end is all in React, I have a large amount of experience with React so that is why I chose it 

For the back end I used Node and Express since those are two very good tools for supporting API requests and creating a robust back end as well as a mongo database

# Front End 
I split my Front End into a few components, Mainly the itemList to see all the Tasks and then the card to add new tasks, These are in the "CardDisply" folder
then there is the "Popup" Folder which has all the PopUp components you see when changing or viewing tasks 

# Back end
For the back end I split everything up into a standard Model, Router, Services, Controller setup which is very common for robust backends 
The Router class takes the different services in the Services folder and feeds them into the Controller class which then initializes tehm with Express when the app starts 
The Model folder is used to determine the Database tables for the mongo database

