const Track = require("../models/Track")


async function createTrack(req, res) {
    try {
        const newTrack = await Track.create(req.body)
        if(newTrack){
            res.status(200).json(newTrack)
        }else{
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}
async function indexTrack(req, res) {
    try {
        const allTracks = await Track.find()
        if(allTracks.length){
            res.status(200).json(allTracks)
        }else{
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}
async function showTrack(req, res) {
    try {
        const foundTrack = await Track.findById(req.params.trackId)
        if(foundTrack){
            res.status(200).json(foundTrack)
        }else{
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}
async function updateTrack(req, res) {
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, {new:true})
        if(updatedTrack){
            res.status(200).json(updatedTrack)
        }else{
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}
async function deleteTrack(req, res) {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.trackId)
        if(deletedTrack){
            res.status(200).json(deletedTrack)
        }else{
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = {
    createTrack,
    indexTrack,
    showTrack,
    updateTrack,
    deleteTrack
}