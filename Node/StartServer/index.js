const express = require('express');
var cors = require('cors');
const bodyParser=require('body-parser');

const userRoutes=require('./routes/userRoutes');


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


app.get('/users', userRoutes);

