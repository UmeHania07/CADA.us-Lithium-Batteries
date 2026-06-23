import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Frontend se headers ke andar token aayega
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    // Token ko decode karke verify karenge
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Yaad hai userController mein humne token 'email + password' mila kar banaya tha?
    // Hum wahi check yahan verify kar rahe hain
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    // Agar sab theek hai toh agle function (controller) par bhej do
    next();

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;