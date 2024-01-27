const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// *-------------------------
// * getAll Users Logic
// *-------------------------

const getAllUsers = async(req, res) => {
   try {
     const users = await User.find({}, {password:0});
     console.log(users);
     if(!users || users.length === 0){
        return res.status(404).json({ message: "No Users Found" });
     }
     return res.status(200).json(users);
   } catch (error) {
     next(error);
   }
};

// *-------------------------
// * User Update Logic
// *-------------------------

const updateUserById = async (req, res) => {
   try {
     const id = req.params.id;
     const updatedUserData = req.body; // store the updated data

     const updatedData = await User.updateOne(
      { _id: id }, // filter data by using id
      { 
        $set: updatedUserData, // set the updated data
      }  
     );
     return res.status(200).json(updatedData);
   } catch (error) {
    next(error);
   }
};

// *-------------------------
// * Delete User Logic
// *-------------------------

const deleteUserById = async(req, res) => {
    try {
      const id = req.params.id;  
      await User.deleteOne({ _id: id });
      return res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
      next(error);
    }
}

// *-------------------------
// * Single User Logic
// *-------------------------

const getUserById = async(req, res) => {
    try {
      const id = req.params.id;  
      const data = await User.findOne({ _id:id }, { password : 0 });
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
};

// *-------------------------
// * getAllContacts Logic
// *-------------------------
const getAllContacts = async(req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if(!contacts || contacts.length === 0){
      return res.status(404).json({ message: "No Contacts Found" });
   }
    return res.status(200).json(contacts);
  } catch (error) {
     next(error);
  }
};


// *-------------------------
// * Contact Delete Logic
// *-------------------------

const deleteContactById = async(req, res) => {
  try {
    const id = req.params.id;  
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};


module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById, };