import bcrypt from "bcrypt";
import User from "../Models/userRegistration.js";

//? For User Registration
const registration = async (req, res) => {
  try {
    console.log("User Registration API");

    // Generate Hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Create a New User
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPass,
    });
    console.log(newUser, "==>> new User");

    // Save User and Respond
    await newUser.save();
    res.status(200).send({
      status: "Success",
      message: "User Signed up Successfully",
      data: newUser,
    });

    console.log(newUser, "==>> User add Successfully in Database");
  } catch (error) {
    console.log(error, "==> error in User Registration");

    res.status(200).send({
      status: "Failed",
      message: error.message,
    });
  }
};

//? For User Login
const login = (req, res) => {
  console.log("User Login API");
  console.log(req.body);

  res.status(200).send({
    status: "Success",
    message: "User Signed in Successfully",
  });
};

export { login, registration };
