const express = require('express')

const musicController = require("../controllers/musicController")

const router = express.Router();

router.get("/search",musicController.trackSearch);

router
  .route("/")
  .get(musicController.getMusics)
  .post( musicController.createMusic);

router
  .route("/:id")
  .get( musicController.getMusic)
  .patch( musicController.updateMusic)
  .delete( musicController.deleteMusic);

module.exports = router;