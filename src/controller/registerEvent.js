const Event = require("../models/Event");

async function registerEvent(req, res) {
  const { title, description, date, theme, location, latitude, longitude } = req.body;
  const picture = req.file?.filename;

  // check if user exists
  const eventExists = await Event.findOne({ title: title });
  if (eventExists) {
    return res.status(422).json({ msg: "Evento já existe!" });
  }

  const coordinates = {
    latitude: latitude,
    longitude: longitude
  }
  // create user
  const event = new Event({
    title,
    picture,
    description,
    date,
    theme,
    location,
    coordinates,
  });

  try {
    await event.save();
    res.status(201).json({ msg: "Evento criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = registerEvent;
