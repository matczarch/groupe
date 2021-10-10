module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        title: { 
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: { 
            type: Sequelize.STRING,
            allowNull: false, 
        },
        
    });
    
    return Post;
  };