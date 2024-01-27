require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");
const adminRoute = require("./router/admin-router.js")
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

const app = express();

// let's tackle cors issue
const corsOptions = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };

app.use(cors(corsOptions));

// app.use(express.json()); This Line of code adds Express middleware that parses incoming request bodies with JSON Payloads. It's 
// important to place this before any routes that need to handle JSON data in the request body. This middleware is reponsible for 
// parsing JSON data requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all 
// subsequent route handlers
app.use(express.json());
  
// Mount the router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    }); 
});

