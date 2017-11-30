const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');

mongoose.connect(config.database);
//mongoose.connect('mongodb://caps:caps@ds125146.mlab.com:25146/caps');
mongoose.connection.on('connected', ()=> {
    console.log('connected to database '+config.database);
});

mongoose.connection.on('error', (err)=> {
    console.log('Database error: '+err);
});

const app=express();

const users=require('./routes/users');

//Port number
const port=3000;

app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, '/public')));

//body parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Index Route
app.get('/', (req, res)=>{
res.send('invalid endpoint');
});

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.listen(port, ()=>{
    console.log('server started on port '+  port);
})