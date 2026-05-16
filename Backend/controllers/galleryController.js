const Gallery = require("../models/Gallery");

exports.getGallery = async (req, res) => {

  try {

    const gallery = await Gallery.find();

    res.json(gallery);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};

exports.getSingleGallery = async (req, res) => {

  try {

    const gallery = await Gallery.findById(req.params.id);

    res.json(gallery);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};
