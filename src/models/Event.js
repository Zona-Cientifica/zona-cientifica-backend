const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  picture: String,
  description: String,
  date: String,
  theme: String,
  local: Object
});

module.exports = Event;
