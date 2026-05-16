const User =
 require("../models/User");

const Contact =
 require("../models/Contact");

const News =
 require("../models/News");

const Gallery =
 require("../models/Gallery");

exports.getDashboard =
 async (req, res) => {

  try {

    const users =
      await User.countDocuments();

    const contacts =
      await Contact.countDocuments();

    const news =
      await News.countDocuments();

    const gallery =
      await Gallery.countDocuments();

    res.json({

      users,

      contacts,

      news,

      gallery

    });

  } catch (error) {

    res.status(500).json({

      error: error.message

    });

  }

};