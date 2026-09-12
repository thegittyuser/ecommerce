import userModel from "../models/user.model.js";

const submit = async (req, res) => {
  try {
    const { username, email, subject, message } = req.body;

    await userModel.create({
      username,
      email,
      subject,
      message,
    });
    console.log("User Data Submission Successful!");
    return res
      .status(201)
      .json({ ok: true, message: "data submission successful!" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ ok: false, message: "Invalid Server Response" });
  }
};
