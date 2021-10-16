const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const port = process.env.PORT || 4000;

app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* === Routes === */
app.get('/', (req, res) => {
  res.status(200).send('Hello Clever Programmer')
  console.log(req.body);
})

// app.post('/', (req, res) => {
//   console.log(req.body);
// })

app.listen(port, () => {
  console.log('Listening on port:', port);
});
