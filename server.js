const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json())

//Inciando mongoose
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routers'));

app.listen(3001);