const router = require("express").Router()
const trackController = require("../controllers/tracks")


router.post("/",trackController.createTrack)
router.get("/", trackController.indexTrack)
router.get("/:id", trackController.showTrack)
router.put("/:id", trackController.updateTrack)
router.delete("/:id", trackController.deleteTrack)

module.exports = router