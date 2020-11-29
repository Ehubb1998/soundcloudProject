'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    decadeYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Song.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: 'PlaylistSong', // This is the model name referencing the join table.
      otherKey: 'playlist_id',
      foreignKey: 'song_id',
    }
    Song.belongsToMany(models.Playlist, columnMapping);
  };

  return Song;
};