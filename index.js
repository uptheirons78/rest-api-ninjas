const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 7777;

//tell express to use body-parser middleware
app.use(bodyParser.json());
//tell express to use routes middleware
app.use('/api', routes);

//listening for requests
app.listen(PORT, function() {
    console.log(`Server is running on PORT: ${PORT}`);
});