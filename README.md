# Guestara Task
### Submitted by Krishna Jaiswal

## Steps to run the project
1. Clone the repository
2. Navigate to the project directory
3. Run the following command to install the dependencies
```bash
npm install
```
4. Run the following command to start the project
```bash
npm run dev

5. Create a .env file in the config folder and add the following environment variables
```env
MONGO_URI=<Your MongoDB URI>
PORT
```

## Project Structure
- The project is divided into these folders
    - `config`: Contains the database connection and .env
    - `controllers`: Contains the controllers for the backend
    - `middlewares`: Contains middleware for error handling
    - `models`: Contains the models/schemas for the backend
    - `routes`: Contains the routes for the backend
    - `utils`: Contains custom Error Handler
# Q&A
## Database
- MongoDB's flexible schema and document-oriented structure make it ideal for managing complex menu data, allowing for easy updates and efficient querying. Its scalability ensures smooth handling of growing menu offerings.

## What you would have done differently given more time?
- I would have implemented user database with authorization and authentication middlewares to access, create and modify category, subcategory and items