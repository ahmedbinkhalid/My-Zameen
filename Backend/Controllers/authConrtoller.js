const userModel = require('../Models/userModel');

// Signup Logic

exports.signUp = async (req, res, next) =>{
    const {name, email, password, role} = req.body;

    // Validate the role 

    const allowedRoles = ['User', 'Admin', 'Blogger'];

    if(!allowedRoles.includes(role)){
        return res.status(400).json({erorr: 'Invalid Role Selected'});
    }
    try{
        const db = req.app.locals.db;

        // Check if user already exists
        const existingUser = await userModel.findUserByEmail(db, email);
        if(existingUser){
            return res.status(400).json({error: 'User Already Exists'});
        }

        // Creating new user 
        const newUser = await userModel.createUser(db, {name, email, password, role});
        res.status(200).json({message: 'User Registered Successfuly', userid: newUser.insertedId});

    }catch (error){
        console.error('Error During Signup:', error)
        res.status(500).json({error: 'Server error',error});
        console.log(error)
    }

};