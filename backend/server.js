const express = require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const PORT=process.env.PORT||5000
const bodyParser = require('body-parser')
const connection=require('./Models/db')
const swaggerUI=require('swagger-ui-express')
const swaggerJsDoc=require('swagger-jsdoc')
const {annotations}=require('./swagger')

//Importing routes

const signUpRoute=require('./controllers/signupApi')
const loginRoute=require('./controllers/loginApi')


//configuration

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(bodyParser.json({limit:'3mb'}))
app.use(bodyParser.urlencoded({ extended: true,limit:'3mb'}))

app.use(cors())


//apis

app.use('/v1/api/signup',signUpRoute)
app.use('/v1/api/login',loginRoute)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(annotations))

//establishing connection with database
connection();

//starting the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
