require('dotenv').config()
const express= require('express');
const massive= require('massive');
const bodyParser= require('body-parser')
const controller= require('./controller')

const app=express();
app.use(bodyParser.json());

let{PORT, CONNECTION_STRING}= process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})


app.post('/helo/register', controller.register)

app.post('/helo/login', controller.login)








app.listen(PORT, ()=> {
    console.log(`**Listening to Port ${PORT}**`)
})
