const router = require('express')();
const multer = require('multer');
const auth = require('./../Middleware/auth')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage, limits: { fieldSize: 1024 * 1024 * 5 } });

const film = require('../Controllers/film.controller')

router.get('/films', auth, film.showAllFilms); //Show All Film
router.get('/films/:film', auth, film.findByName); //Show Film By Name
router.post('/films/create', auth, upload.single('photo'), film.createFilm); //Create Film

module.exports = router

