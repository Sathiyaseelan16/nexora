const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {

  try {

    const {name, email, message} = req.body;

    if (!name || !email || !message) {

      return res.json({

        success: false,

        message: "All fields required"

      });

    }
    else{
      const newMessage =
      new Contact({

        name,
        email,
        message

      });

    await newMessage.save();

    res.json({

      success: true,
      message:  "Message sent successfully"

    });
    }

    

  } catch (error) {

    res.status(500).json({

      error: error.message

    });

  }

};
