
const Users = require('../../../models/user');

const getAllUsers = async (req, res, next) => {
    const { page_size, page_no, search, order } = req.query;


    try {
    


        // Get the total user count (for pagination purposes)
        const totalUserCount = await Users.find();

        // Respond with paginated users and total count
        res.status(200).json({
            totalUserCount
        });
    } catch (error) {
        next(error); // Handle error if fetching users fails
    }
};



module.exports = { getAllUsers };
