const router = require("express").Router()
const trackController = require("../controllers/tracks")


router.post("/",trackController.createTrack)
router.get("/", trackController.indexTrack)
router.get("/:trackId", trackController.showTrack)
router.put("/:trackId", trackController.updateTrack)
router.delete("/:trackId", trackController.deleteTrack)

module.exports = router