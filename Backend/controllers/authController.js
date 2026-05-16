const User = require("../models/User");

const jwt = require("jsonwebtoken");

const transporter =
 require("../config/mailer");

/* REGISTER */

exports.registerUser =
 async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    const userExists =
      await User.findOne({
        email
      });

    if (userExists) {

      return res.json({

        success: false,

        message:
         "User already exists"

      });

    }

    const newUser =
      new User({

        name,
        email,
        password

      });

    await newUser.save();

    /* WELCOME MAIL */

    await transporter.sendMail({

      from:
       process.env.EMAIL_USER,

      to: email,

      subject:
       "Welcome to Nexora",

      html:`

    <div style="
      font-family: Arial;
      padding: 20px;
    ">

      <h1 style="
        color:#8bc34a;
      ">
        Welcome to Nexora
      </h1>

      <p>
        Hi ${name},
      </p>

      <p>
        You have successfully registered on our platform
        <b> Nexora Studio</b>.
      </p>

      <p>
        We’re excited to have you with us. Explore our latest gallery, news, and modern web experiences.
      </p>

      <p>
        Thank you for joining Nexora.
      </p>

      <br>

      <h3>
        Nexora Team
      </h3>

    </div>

  `

    });

    res.json({

      success: true,

      message:
       "Registered Successfully"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
       error.message

    });

  }

};

/* LOGIN */

exports.loginUser =
 async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({
        email
      });

    if (!user) {

      return res.json({

        success: false,

        message:
         "User not found"

      });

    }

    if (
      user.password !== password
    ) {

      return res.json({

        success: false,

        message:
         "Wrong Password"

      });

    }

    const token =
      jwt.sign(

        {

          id: user._id,

          isAdmin:
           user.isAdmin

        },

        "mysecretkey",

        {

          expiresIn: "1d"

        }

      );

    res.json({

      success: true,

      token,

      isAdmin:
       user.isAdmin,

      message:
       "Login Successful"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
       error.message

    });

  }

};

/* FORGOT PASSWORD */

exports.forgotPassword =
 async (req, res) => {

  try {

    const { email } =
      req.body;

    const user =
      await User.findOne({
        email
      });

    if (!user) {

      return res.json({

        success: false,

        message:
         "User not found"

      });

    }

    const token =
      jwt.sign(

        {

          id: user._id

        },

        "resetsecretkey",

        {

          expiresIn: "15m"

        }

      );

    const resetLink =

`http://localhost:3000/reset-password/${token}`;

    await transporter.sendMail({

      from:
       process.env.EMAIL_USER,

      to: email,

      subject:
       "Reset Password",

      html: `

        <h2>
          Reset Password
        </h2>

        <p>
          Click below link:
        </p>

        <a href="${resetLink}">
          Reset Password
        </a>

      `

    });

    res.json({

      success: true,

      message:
       "Reset link sent"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
       error.message

    });

  }

};

/* RESET PASSWORD */

exports.resetPassword =
 async (req, res) => {

  try {

    const { token } =
      req.params;

    const { password } =
      req.body;

    const decoded =
      jwt.verify(

        token,

        "resetsecretkey"

      );

    const user =
      await User.findById(
        decoded.id
      );

    if (!user) {

      return res.json({

        success: false,

        message:
         "Invalid User"

      });

    }

    user.password =
      password;

    await user.save();

    res.json({

      success: true,

      message:
       "Password Reset Successful"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
       "Invalid or Expired Token"

    });

  }

};