





const getAllUsers = async (req, res, next) => {
    const { page_size, page_no, search, order } = req.query;



    res.send('Hello, user!');
};





module.exports = {  getAllUsers };
