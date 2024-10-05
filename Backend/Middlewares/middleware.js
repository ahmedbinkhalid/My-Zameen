// Setting up the middleware to restrict the permissions

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