const express = require ('express');
const colors = require ('colors');
const cors = require ('cors');
require ('dotenv').config();
const { graphqlHTTP } = require ('express-graphql');
const schema = require ('./schema/schema');
const connectDB = require ('./config/db');
const PORT = process.env.PORT || 3001;

//Connect to database
connectDB(); 

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
);

app.listen(PORT, console.log(`Server is running on port: ${PORT}`));