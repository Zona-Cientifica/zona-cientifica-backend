const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  picture: String,
  description: String,
  date: String,
});

module.exports = Event;
