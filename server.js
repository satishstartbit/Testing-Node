// server.js
const express = require('express');
const userRoutes = require("./routes/webportal/userRoutes"); // Your user routes

const mongoose = require("mongoose");

const app = express();


const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js Express app deployed on Vercel!');
});

mongoose
    .connect(DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Failed to connect to MongoDB", err);
        process.exit(1);
    });
