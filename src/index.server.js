const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

//routes
const adminRoutes = require('./routes/admins');
const serviceRoutes = require('./routes/services');
const orderRoutes = require('./routes/order');
env.config();

//connection mongoose with mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.02jxk.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('DataBase Connected');
  });

//using middleware for secure api and get the data and upload the files
app.use(cors());
app.use(bodyparser.json());

//api's of this server
app.use('/api', serviceRoutes);
app.use('/api', orderRoutes);
app.use('/api', adminRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on this ${process.env.PORT}`)
);
