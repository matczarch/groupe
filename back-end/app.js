const express = require('express'); 
const bodyParser = require("body-parser");
const path = require('path');

//Déclaration des routes 
const userRoutes = require('./routes/user')

const app = express(); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.use('/api/user', userRoutes);
  app.use('/api/posts')
  app.use('/images', express.static(path.join(__dirname, 'images')));

  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });
  const db = require ("./models");
  db.sequelize.sync({ force: true });

module.exports = app; 