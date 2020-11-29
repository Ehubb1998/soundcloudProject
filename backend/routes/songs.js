const express = require("express");
const songRouter = express.Router();
const { asyncHandler } = require("../utils");
const { Song, User } = require("../db/models")

// const testSong = async () => {
//     return await Song.findByPk(1);
// }
// console.log(testSong());

songRouter.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    console.log("This is id varable: " + id);
    const user = await User.findByPk(1);
    console.log(`This is user: ${user.userName}`)
    const song = await Song.findByPk(id);
    console.log("This is the song: " + song.artist);
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