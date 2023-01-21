import User from "../models/userModel";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.status(400).send("Name is Required");
  if (!email) return res.status(400).send("Email is Required");

  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is Required and should be min 6 characters long");

  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email is taken");

  const user = new User(req.body);
  try {
    await user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log("User Creation Failed", err);
    return res.status(400).send("Error. Try Again");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }).exec();
    console.log(user);
    if (!user) return res.status(400).send("User with taht email not found");
    //compare password
    user.comparePassword(password, (err, match) => {
      if (!match || err) return res.status(400).send("Wrong Password");
    });
  } catch (err) {
    res.status(400).send("Signin Failed");
  }
};
