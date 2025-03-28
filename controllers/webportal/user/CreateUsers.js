
const Users = require('../../../models/user');

const getAllUsers = async (req, res, next) => {
    const { page_size, page_no, search, order } = req.query;

    const pageSize = parseInt(page_size) || 10; // Default to 10 if page_size is not provided
    const pageNo = parseInt(page_no) || 1; // Default to 1 if page_no is not provided
    const searchQuery = search ? { $text: { $search: search } } : {}; // Search filter
    const sortOrder = order === 'desc' ? -1 : 1; // Sort order (asc or desc)

    try {
        // Calculate the skip and limit based on page size and page number
        const skip = (pageNo - 1) * pageSize;
        const limit = pageSize;

        // Fetch the users with pagination and search filter
        const users = await Users.find(searchQuery)
            .sort({ createdAt: sortOrder }) // Assuming sorting by `createdAt`, adjust as needed
            .skip(skip)
            .limit(limit);


        // Get the total user count (for pagination purposes)
        const totalUserCount = await Users.countDocuments(searchQuery);

        // Respond with paginated users and total count
        res.status(200).json({
            totalUserCount,
            usersListing: users,
        });
    } catch (error) {
        next(error); // Handle error if fetching users fails
    }
};



module.exports = { getAllUsers };
