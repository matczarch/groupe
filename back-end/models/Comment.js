module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {

        cont: { 
            type: Sequelize.STRING,
            allowNull: false, 
        },
        
    });
    return Comment;
  };