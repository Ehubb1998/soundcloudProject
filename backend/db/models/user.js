// 'use strict';
// const { Model, Validator } = require('sequelize');
// const bcrypt = require("bcryptjs");

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     toSafeObject() {
//       const { id, username, email } = this; // context will be the User instance
//       return { id, username, email };
//     }
//     validatePassword(password) {
//       return bcrypt.compareSync(password, this.hashedPassword.toString());
//     }
//     static getCurrentUserById(id) {
//       return User.scope("currentUser").findByPk(id);
//     }
//     static async login({ credential, password }) {
//       const { Op } = require('sequelize');
//       const user = await User.scope('loginUser').findOne({
//         where: {
//           [Op.or]: {
//             username: credential,
//             email: credential,
//           },
//         },
//       });
//       if (user && user.validatePassword(password)) {
//         return await User.scope('currentUser').findByPk(user.id);
//       }
//     }
//     static async signup({ username, email, password }) {
//       const hashedPassword = bcrypt.hashSync(password);
//       const user = await User.create({
//         username,
//         email,
//         hashedPassword,
//       });
//       return await User.scope('currentUser').findByPk(user.id);
//     };
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init(
//     {
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [4, 30],
//           isNotEmail(value) {
//             if (Validator.isEmail(value)) {
//               throw new Error("Cannot be an email.");
//             }
//           },
//         },
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [3, 256],
//         },
//       },
//       hashedPassword: {
//         type: DataTypes.STRING.BINARY,
//         allowNull: false,
//         validate: {
//           len: [60, 60],
//         },
//       },
//       playlist_id: {
//         type: DataTypes.INTEGER,
//         allowNull: true,

//       },
//     },
//     {
//       sequelize,
//       modelName: "User",
//       defaultScope: {
//         attributes: {
//           exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
//         },
//       },
//       scopes: {
//         currentUser: {
//           attributes: { exclude: ["hashedPassword"] },
//         },
//         loginUser: {
//           attributes: {},
//         },
//       },
//     }
//   );
//   return User;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Playlist, { foreignKey: "user_id" });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  return User;
};