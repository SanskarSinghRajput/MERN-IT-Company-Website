const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebToken");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// secure the password with the bcrypt
// next is middleware which moves next
userSchema.pre('save', async function(next){
   // console.log("pre method", this);
   const user = this;

   if(!user.isModified('password')){
      next();
   }

   try {
     const saltRound = await bcrypt.genSalt(10);
     const hash_password = await bcrypt.hash(user.password, saltRound);
     user.password = hash_password;
   } catch (error) {
     next(error);
   }   
});

//compare the password
userSchema.methods.comparePassword = async function(password){
   return bcrypt.compare(password, this.password);
};

// **What is JWT?**

// JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained
// way for securely transmitting the information parties as a JSON object.
// JWT are ofen used for authentication and authorization in web applications.
// 1. **Authentication:** Verifyind the identity of a user or client.
// 2. **Authorization:** Determining what actions a user or client is allowed to perform.

// **Component of a JWT:**
// - Header: Contains metadata about the token, such as the type of token and the signing algorithm 
// being used.
// - Payload: Contains claims or statements about an entity (typically, the user) and additional data.
// Common claims include userID, username, and expiration time.
// - Signature: To verify that the sender of the JWT is who it says it is and to ensure that the 
// message wasn,t changed along the way, a signature is included.


// JSON WEB TOKEN
// Tokens, such as JWT's (JSON Web Tokens), are typically not stored in the database along with other user
// details. Instead, they are issued by the server during the authentication process and then stored on the 
// client-side (e.g., in cookies or local storage) for later use.

userSchema.methods.generateToken = async function () {
   try {
     return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
     },
       process.env.JWT_SECRET_KEY,
       {
          expiresIn: "30d",
       }
     );
   } catch (error) {
     console.error(error);
   }
};

// define the model or the collection name
const User = new mongoose.model("User",userSchema);
module.exports = User;