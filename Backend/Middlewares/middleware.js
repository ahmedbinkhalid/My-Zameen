// Setting up the middleware to restrict the permissions
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next)=>{
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(403).json({error: 'No token provided'});
    }
    jwt.verify(token, 'myzameen!@#$%^&*()', (err, decoded)=>{
        if(err){
            return res.status(403).json({error: 'Failed to authenticate token'});
        }
        req.user = decoded;
        next();
    });
};

exports.isBlogger = (req, res, next)=>{
    if(req.user.role === 'Blogger'){
        next();
    }else{
        res.status(403).json({error: 'Only Bloggers can perform this action'});
    };
};

exports.isAdmin = (req, res, next) =>{
    if(req.user.role === 'Admin'){
        next();
    }else{
        res.status(403).json({error: 'Only Admins can perform this action'});
    };
};