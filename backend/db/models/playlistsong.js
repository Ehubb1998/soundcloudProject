'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define('PlaylistSong', {
    song_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  PlaylistSong.associate = function (models) {
    // associations can be defined here
    PlaylistSong.belongsTo(models.Song, { foreignKey: "song_id" });
    PlaylistSong.belongsTo(models.Playlist, { foreignKey: "playlist_id" });
  };

  return PlaylistSong;
};