// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Playlist extends Model {

//     static associate(models) {
//       // define association here
//     }
//   };
//   Playlist.init({
//     name: DataTypes.STRING,
//     user_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Playlist',
//   });
//   return Playlist;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Playlist.associate = function (models) {
    // associations can be defined here
    Playlist.belongsTo(models.User, { foreignKey: "user_id" });
    const columnMapping = {
      through: 'PlaylistSong', // This is the model name referencing the join table.
      otherKey: 'song_id',
      foreignKey: 'playlist_id',
    }
    Playlist.belongsToMany(models.Song, columnMapping);
  };

  return Playlist;
};