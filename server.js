// server.js
const express = require('express');
const mongoose = require("mongoose");

const userRoutes = require("./routes/webportal/userRoutes"); // Your user routes


const app = express();
const port = process.env.PORT || 3000;


const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js Express app deployed on Vercel!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


