const Post = require("../models/post.js");
const Comment = require("../models/comment.js");
const jwt = require("jsonwebtoken");

exports.list_all_posts = (req, res) => {
    Post.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la récupération des Posts",
            });
        else res.send(data);
    });
};

exports.post_something = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Vous devez ajouter du contenu à votre message"
        });
    }

    const token = req.headers.authorization.split("")[1];
    const decodedToken = jwt.verify(token, "RAMDOM_ALG_SECRET");
    const userId = decodedToken.userId;

    if (!req.file) {
        const post = new Post({
            user_id: userId,
            content: req.body.content,
            image: null,
            likes: 0,
            adminApproved: 0,
            reported: 0,
        });

        Post.createPost(post, (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Une erreur s'est produite lors de la création d'un nouveau post",
                });
            else res.send(data);
        });
    }
    else if (req.file) {
        const post = new Post({
            user_id: userId,
            content: req.body.content,
            image: `${req.protocol}://${req.get("host")}/image/${req.file.filename}`,
            likes: 0,
            adminApproved: 0,
            reported: 0,
        });
        Post.createPost(post, (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Une erreur s'est produite lvueors de la création d'un nouveau post",
                });
            else res.send(data);
        });
    }
};

exports.delete_a_post = (req, res) => {
    const postId = req.body.post_id;

    Post.delete(postId, (err, data) => {
        if (err) {
            res.status(500).send({ message: "Erreur lors de la suppresion du message avec l'identifiant :" + postId, });
        }
        else res.send(data);
    });
};

exports.approve_a_post = (req, res) => {
    const postId = req.body.post_id; 

    Post.approve(postId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Erreur lors de la suppresion du message avec l'identifiant :" + postId,
            });
        } else res.send(data); 
    });
};

exports.report_a_post = (req, res) => {
    const postId = req.body.post_id; 

    Post.report(postId, (err, data) => {
        if(err) {
            res.status(500).send({
                message: "Erreur lors du rapport de la publication avec l'identifiant" + postId, 
            }); 
        } else res.send(data); 
    });

};

exports.retrieve_comment = (req, res) => {
    const postId = req.body.post_id; 

    Comment.get(postId, (err, data) => {
        if(err) 
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la récupération des messages",
        });
        else res.send(data);
    });
};

exports.comment_a_post = (req, res) => {
    const token = req.header.authorization.split(" ")[1]; 
    const decodedToken = jwt.verify(token, "RANDOM_ALGO_SECRET"); 
    const userId = decodedToken.userId; 

    const comment = new Comment({
        post_id: req.body.post_id, 
        user_id: userId, 
        content: req.body.content, 
    });
    Comment.createComment(comment, (err, data) => {
        if(err) 
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la création d'un nouveau commentaire !",
        });
        else res.send(data) 
    });
}; 

exports.delete_a_comment = (req, res) => {
    const commentId = req.body.comment_id; 

    Comment.delete(commentId, (err, data) => {
        if(err) {
        res.status(500).send({
            message: err.message || "Erreur lors de la suppresion du message avec l'identifiant : " + postId,
        });
    } else res.send(data) 
    });
};
