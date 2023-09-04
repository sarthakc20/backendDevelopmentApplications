import express, { Express } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import todoRoutes from './Routes/todoRoutes';

const app: Express = express();
const PORT: number = 4000;

const URI: string = 'mongodb://localhost:27017/ToDoList-Typescript'; 

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to MongoDB
mongoose.connect(URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });

// Importing Routes
app.use('/api/v1', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
