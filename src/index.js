const express = require('express')
const cors = require('cors')
require('dotenv').config();
const path = require('path')


const app = express();
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
