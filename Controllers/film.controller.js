const Film = require('../Models/film.model');

// Create Film
exports.createFilm = async (req, res) => {
  console.log(req.body, req.file)
  try {
    // console.log((req.file.path.split("\\").pop()))
    const film = await new Film({
      name: req.body.name,
      description: req.body.description,
      release_date: req.body.release_date,
      rating: req.body.rating,
      ticket_price: req.body.ticket_price,
      country: req.body.country,
      genre: req.body.genre,
      photo: req.file.path.split("\\").pop(),
    }).save();

    return res.status(200).json({ message: 'Film Created', film });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Error at Create Film !',
      error: error,
    })
  }
};

// Show All Films
exports.showAllFilms = async (req, res) => {
  try {
    let films = await Film.find();
    if (!films) {
      return res.status(404).json({ message: 'No Film Found' });
    }
    else {
      return res.status(200).json({ message: 'List of all films.', films });
    }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Error at Show All Films !',
      error: error,
    })
  }
};

// Find Film By Name
exports.findByName = async (req, res) => {
  try {
    let film = await Film.find({ name: req.params.film })
    console.log(film)
    if (!film) {
      return res.status(404).json({ message: 'No Film Found' });
    }
    else {
      return res.status(200).json({ message: 'Result :', film });
    }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Error at Find Film By Name !',
      error: error,
    })
  }
};

