const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const CandidateModel = require("../Models/Candidate");
const VoterModel = require("../Models/Voter");
const axios = require('axios');

const compareFacesWithFacePlusPlus = async (img1Base64, img2Base64) => {
  try {
    const response = await axios.post(
      'https://api-us.faceplusplus.com/facepp/v3/compare',
      new URLSearchParams({
        api_key: '4KhyHb8kn5jQBKAB1J9eaeu9MalHxrbb',
        api_secret: 'Lu-xi3aWBLxakZkT86CNFQKRreDzsnwP',
        image_base64_1: img1Base64.split(',')[1], // strip "data:image/jpeg;base64,"
        image_base64_2: img2Base64.split(',')[1],
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const confidence = response.data.confidence;
    return confidence >= 80; // 80+ is generally a match
  } catch (err) {
    console.error('Face++ API error:', err.response?.data || err.message);
    return false;
  }
};


const signup = async (req, res) => {
    console.log("Signup request body:", req.body);

    try {
        const { name, email, password, userType } = req.body;

        // Input validation
        if (!name || !email || !password || !userType ) {
            return res.status(400).json({
                message: "All fields (name, email, password and userType) are required.",
                success: false,
            });
        }

        if (userType !== 'voter' && userType !== 'candidate') {
            return res.status(400).json({
                message: "Invalid user type. Allowed values: 'voter' or 'candidate'.",
                success: false,
            });
        }

        
        
        // Check if user already exists
        const user = userType === 'voter'
        ? await VoterModel.findOne({ email })
            : await CandidateModel.findOne({ email });
            
        if (user) {
            return res.status(409).json({
                message: `User with email ${email} already exists. Please login.`,
                success: false,
            });
        }

        // Compare face images using Face++ API
        // const allUsers =
        //   userType === "voter"
        //     ? await VoterModel.find({
        //         $and: [
        //           { face_image: { $ne: null } },
        //           { face_image: { $ne: "" } },
        //         ],
        //       })
        //     : await CandidateModel.find({
        //         $and: [
        //           { face_image: { $ne: null } },
        //           { face_image: { $ne: "" } },
        //         ],
        //       });
              
        // console.log("allUsers", allUsers);
        // for (const user of allUsers) {
        //     const match = await compareFacesWithFacePlusPlus(user?.face_image, faceImage);
        //     if (match) {
        //       return res.status(409).json({
        //         message: "A user with the same face already exists.",
        //         success: false,
        //       });
        //     }
        //   }
        
        // console.log("fine");
        // Create new user
        const userModel = userType === 'voter'
            ? new VoterModel({ name, email, password })
            : new CandidateModel({ name, email, password });

        // Hash password
        userModel.password = await bcrypt.hash(password, 10);

        // Save user to database
        await userModel.save();

        res.status(201).json({
            message: "Signup successful.",
            success: true,
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            message: "An error occurred during signup. Please try again later.",
            success: false,
        });
    }
};

const updateUserDetails = async (req, res) => {
    try {
        console.log("Update request body:", req.body);
        console.log("Update request user:", req.user);
        const { user_type, ...updateFields } = req.body;
        const { email } = req.user;

        // Validate input
        if (!email || !user_type) {
            return res.status(400).json({ 
                message: "Email and userType are required.", 
                success: false 
            });
        }
        
        if (user_type !== 'voter' && user_type !== 'candidate') {
            return res.status(400).json({ 
                message: "Invalid userType. Allowed values: 'voter' or 'candidate'.", 
                success: false 
            });
        }


        // Choose the appropriate model
        const Model = user_type === 'voter' ? VoterModel : CandidateModel;

        // Update the user details
        const user = await Model.findOneAndUpdate({ email }, updateFields, { new: true });

        if (!user) {
            return res.status(404).json({ 
                message: `${user_type} not found.`,
                success: false 
            });
        }
  
        // Perform additional updates after the user details have been updated
        Model.findOneAndUpdate(
           { email },
           { phone_verified: true, email_verified: true }
       ).catch((error) => {
           console.error("Background update error:", error);
       });

        res.status(200).json({ 
            message: `${user_type.charAt(0).toUpperCase() + user_type.slice(1)} details updated successfully.`,
            user,
            success: true 
        });


    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ 
            message: "An error occurred while updating user details.", 
            success: false 
        });
    }
};

const updateUserWallet = async (req, res) => {
    try {
        console.log("Update request body:", req.body);
        console.log("Update request user:", req.user);
        const { user_type, ...updateFields } = req.body;
        const { email } = req.user;

        // Validate input
        if (!email || !user_type) {
            return res.status(400).json({ 
                message: "Email and userType are required.", 
                success: false 
            });
        }
        
        if (user_type !== 'voter' && user_type !== 'candidate') {
            return res.status(400).json({ 
                message: "Invalid userType. Allowed values: 'voter' or 'candidate'.", 
                success: false 
            });
        }


        // Choose the appropriate model
        const Model = user_type === 'voter' ? VoterModel : CandidateModel;
        
        // Ensure the address is unique across both models
        const isAddressUsed = await Promise.all([
            VoterModel.findOne({ voter_id: updateFields.address }),
            CandidateModel.findOne({ candidate_id: updateFields.address }),
        ]);

        if (isAddressUsed[0] || isAddressUsed[1]) {
            return res.status(400).json({
                message: "The address is already associated with another user.",
                success: false,
            });
        }

        // Update the user details
        const user = await Model.findOneAndUpdate(
            { email },
            user_type === 'voter' 
                ? { voter_id: updateFields.address } 
                : { candidate_id: updateFields.address }, 
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ 
                message: `${user_type} not found.`,
                success: false 
            });
        }
  
        res.status(200).json({ 
            message: `${user_type.charAt(0).toUpperCase() + user_type.slice(1)} details updated successfully.`,
            user,
            success: true 
        });


    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ 
            message: "An error occurred while updating user details.", 
            success: false 
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password, userType } = req.body;
        const user = userType === 'voter' ? await VoterModel.findOne({ email }) : await CandidateModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
            .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
            .json({ message: errorMsg, success: false });
        }
        console.log("login backend");
        // console.log("try ");
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const getUserData = async (req, res) => {
    try {
        // console.log("Update request body:", req.body);
        console.log("Update request user:", req.user);
        const { email } = req.user; // Get email from decoded JWT
        const { user_type } = req.query;

        // Validate input
        if (!email || !user_type) {
            return res.status(400).json({ 
                message: "Email and userType are required.", 
                success: false 
            });
        }
        
        if (user_type !== 'voter' && user_type !== 'candidate') {
            return res.status(400).json({ 
                message: "Invalid userType. Allowed values: 'voter' or 'candidate'.", 
                success: false 
            });
        }


        // Choose the appropriate model
        const Model = user_type === 'voter' ? VoterModel : CandidateModel;

        // Update the user details
        const user = await Model.findOne({ email });

        if (!user) {
            return res.status(404).json({ 
                message: `${user_type} not found.`,
                success: false 
            });
        }
  

        res.status(200).json({ 
            message: "User data fetched successfully.",
            user,
            success: true 
        });


    } catch (error) {
        console.error("Get user error:", error);
        res.status(500).json({ 
            message: "An error occurred while getting user details.", 
            success: false 
        });
    }
}

module.exports = {
    signup,
    updateUserDetails,
    updateUserWallet,
    login,
    getUserData
}