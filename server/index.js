const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 3001;
const musicRouter = require("./routes/musicRoutes");
// const userRouter = require("./routes/userRoutes")


const {
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config.js");

// const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const mongoURL = `mongodb://${MONGO_IP}:${MONGO_PORT}/musicdb`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("succesfully connected to DB")
    })
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.use(express.json())
app.use(cors({}))



app.get('/api/v1', (req, res) => {
  console.log('this is me')
  res.send('Hellow misu! hbd to masud osman working!!')
})

app.use('/api/v1/music',musicRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
