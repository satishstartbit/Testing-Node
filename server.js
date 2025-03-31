const express = require('express');
const mongoose = require("mongoose");

// const userRoutes = require("./routes/userRoutes"); // Your user routes
// const roleRoutes = require("./routes/roleRoutes"); // Your user routes
const companyRoutes = require("./routes/companyRoutes"); // Your user routes
const MobileRoutes = require("./routes/MobileuserRoutes");



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use("/api/users", userRoutes);
// app.use("/api/role", roleRoutes);
app.use("/api/company", companyRoutes);
app.use("/mobile", MobileRoutes)


app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js Express app deployed on Vercel!');
});

mongoose
    .connect("mongodb+srv://satish:Root123@shipmenttacking.ndlbj.mongodb.net/Shipment_tracking?retryWrites=true&w=majority&appName=ShipmentTacking")
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error("❌ Failed to connect to MongoDB", err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Export a handler for Vercel
module.exports = app;
