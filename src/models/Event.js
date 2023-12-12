const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  picture: String,
  description: String,
  date: String,
  theme: String
});

module.exports = Event;
