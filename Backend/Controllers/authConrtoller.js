const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');

// Signup Logic

exports.signUp = async (req, res, next) =>{
    const {name, email, password, role} = req.body;
    console.log("Request received:", req.body);

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

// Login Logic

exports.login = async (req, res, next)=>{
    const {email, password} = req.body;
    console.log('Request Recieved: ', req.body);

    if (!email || !password){
        return res.status(400).json({error: "Email and Password are required"});
    }

    try{
        const db = req.app.locals.db;

        // Find User by Email
        const user = await userModel.findUserByEmail(db, email);
        if(!user){
            return res.status(400).json({error: "User does not exist"});
        }
        // Compare Password with hashed password if the database
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({error:"Invalid Email or Password"})
        }
        // Successful Login

        res.status(200).json({message: 'Logged in successuly', user:{id: user._id, name: user.name, role: user.role}});
    }
    catch(error){
        console.error('Error During Login:', error);
        res.status(500).json({error: "Server Error"});
    }
}