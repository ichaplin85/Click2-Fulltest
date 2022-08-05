require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');


// Routes
const registerRouter = require('./routes/register.router');
const loginRouter = require('./routes/login.router');
const authRouter = require('./routes/auth.router');
const accountRouter = require('./routes/account.router');
const peopleRouter = require('./routes/people.router')



const app = express();

//Constants
const PORT = process.env.MAIN_PORT || 3002;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const whiteList = ['http://localhost:3000']



app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(whiteList));
app.use(fileUpload({}))



app.use('/registration', registerRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);
app.use('/account', accountRouter)
app.use('/people', peopleRouter)



async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sfb3l7r.mongodb.net/?retryWrites=true&w=majority`
    )

    app.listen(PORT, () => {
      console.log(`server started PORT: ${PORT}`);
    })

  } catch (err) {
    console.log(err);
  }
}

start()


