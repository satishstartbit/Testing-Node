const Users = require('../../../models/user');
const Session = require('../../../models/session');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controller to get all roles
const UserLogin = async (req, res, next) => {
    const { emailOrUsername, password, deviceInfo } = req.body;
console.log("loginosd");

   
};



const UserLogout = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        // Find the latest session and mark as logged out
        const session = await Session.findOne({ userId }).sort({ loginAt: -1 }).limit(1);
        if (session) {
            await Session.updateOne({ _id: session._id }, { logoutAt: new Date() });
        }

        res.json({ message: 'Logged out successfully' });
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = { UserLogin, UserLogout };

