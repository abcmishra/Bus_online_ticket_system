const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/ticket')
require('dotenv/config')

const app = express()

app.use(bodyParser.json())
app.use('/api', apiRoutes)
const mongoURI="mongodb+srv://sha123:sha123@contactkeeper.0vwxp.mongodb.net/Busticket?retryWrites=true&w=majority"

mongoose.connect(
    // process.env.DB_CONNECTION,
    mongoURI,
    
    { useNewUrlParser: true }
)
mongoose.connection
    .once('open', () => console.log('Connected to the DB successfully'))
    .on('error', (error) => {
        console.warn('Warning', error);
    });

app.listen(process.env.PORT || 3003)

