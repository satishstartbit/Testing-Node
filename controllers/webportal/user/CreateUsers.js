
const Users = require('../../../models/user');
const bcrypt = require('bcryptjs');


// Controller to register a new user
const registerUser = async (req, res, next) => {
    const { username, first_name, last_name, email, password, mobile_no, gender, dob, roleid, avatar } = req.body;
    console.log(req.body);

    try {
        // Check if the email already exists
        const existingEmail = await Users.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Check if the username already exists
        const existingUsername = await Users.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Create a new user
        const newUser = new Users({
            username,
            email,
            password,
            first_name,
            last_name,
            mobile_no,
            gender,
            avatar,
            dob,
            roleid,
            plantId: "67e53f04a272c03c7431b952",
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        next(error); // Passing the error to the error handling middleware
    }
};


// Controller to get user details by ID
const getUserById = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};




const getAllUsers = async (req, res, next) => {
    const { page_size, page_no, search, order } = req.query;



    res.send('Hello, user!');
};




// Controller to delete user by ID
const deleteUserById = async (req, res, next) => {
    const userId = req.params.id;
    console.log("userId", userId);

    try {
        const user = await Users.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error); // Passing the error to the error handling middleware
    }
};


module.exports = { registerUser, getUserById, getAllUsers, deleteUserById };
