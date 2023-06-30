const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientsRouter = require('./routes/clients');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/clients', clientsRouter);

app.listen(3001, () => console.log('Server is listening on port 3001'));
