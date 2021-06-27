const upload = require('express-fileupload');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());
app.use('/upload', require('./routes/upload'));

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
