const express = require("express");
const songRouter = express.Router();
const { asyncHandler } = require("../utils");
const { Song } = require("../db/models")


songRouter.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const song = await Song.findByPk(id);
    const { name, artist, album, genre, decadeYear } = song;
    return res.json({
        name: name,
        artist: artist,
        album: album,
        genre: genre,
        decadeYear: decadeYear
    });
}))


module.exports = songRouter;