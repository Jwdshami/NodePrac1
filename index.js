require('dotenv').config();

const express = require('express');
const app = express();
const Port = process.env.PORT;
const route = require('./Routes/route');

// ✅ Middleware to parse JSON request bodies
app.use(express.json());

// ✅ Register routes under '/api'
app.use('/api', route);

// ✅ Start server
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});





