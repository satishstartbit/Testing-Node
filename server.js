// server.js
const express = require('express');
const userRoutes = require("./routes/webportal/userRoutes"); // Your user routes
const roleRoutes = require("./routes/webportal/roleRoutes"); // Your user routes
const companyRoutes = require("./routes/webportal/companyRoutes"); // Your user routes

const MobileRoutes = require("./routes/nativeapp/userRoutes");

const app = express();
const port = process.env.PORT || 3000;




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/company", companyRoutes);
app.use("/mobile", MobileRoutes)

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js Express app deployed on Vercel!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


