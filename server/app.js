require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


const registerRouter = require('./routes/register.router');
const loginRouter = require('./routes/login.router');
const authRouter = require('./routes/auth.router');




const app = express();

//Constants
const PORT = process.env.MAIN_PORT || 3002;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const whiteList = ['http://localhost:3000']



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(whiteList));
app.use(fileUpload({}))


let sessionConfig = {
  name: 'cookieName',
  secret: 'keyboard cat',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY  
  },
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionConfig));


app.use('/registration', registerRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);



async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sfb3l7r.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )

    app.listen(PORT, () => {
      console.log(`server started PORT: ${PORT}`);
    })

  } catch (err) {
    console.log(err);
  }
}

start()


