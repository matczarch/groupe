const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User")(sequelize, Sequelize);
db.posts = require("./Post")(sequelize, Sequelize);
db.comments = require("./Comment")(sequelize, Sequelize); 

db.users.hasOne(db.posts); 
db.posts.belongsTo(db.users); 

// 4 lignes 
db.posts.hasOne(db.comments);
db.comments.belongsTo(db.posts); 
db.users.hasOne(db.comments);
db.comments.belongsTo(db.users);

module.exports = db;