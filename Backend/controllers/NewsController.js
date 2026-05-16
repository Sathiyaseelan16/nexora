const News = require("../models/News");

exports.getNews = async (req, res) => {

  try {

    const news = await News.find();

    res.json(news);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};

exports.getSingleNews = async (req, res) => {

  try {

    const news = await News.findById(req.params.id);

    res.json(news);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};