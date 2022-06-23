const express = require('express');
const planRouter = require('./planRouter')

module.exports = app => {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    });

    app.use(express.json());
    
    app.get('/', (req, res) => res.send('Physical Evaluation Microservice'));

    app.use(planRouter);
}