const mongoose = require("mongoose");

const NewsSchema =
  new mongoose.Schema({

    title: String,

    description: String,

    image: String,

    date: String

  });

module.exports = mongoose.model("News", NewsSchema);