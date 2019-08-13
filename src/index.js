const express = require('express')
const cors = require('cors')
require('dotenv').config();
const path = require('path')


const app = express();
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
