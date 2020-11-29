'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const songs = await queryInterface.bulkInsert("Songs", [
      {
        name: "Billie Jean", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Wanna Be Startin' Somthin'", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Baby Be Mine", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Thriller", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Beat It", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Human Nature", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "P.Y.T. (Pretty Young Thing), updatedAt: new Date()", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "The Lady In My Life", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "The Girl Is Mine", artist: "Michael Jackson", album: "Thriller", genre: "Pop", decadeYear: 80, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Show Me", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Drift", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Can I", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fantasy", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Make You Feel", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Maybe", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Pretty Thoughts", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Unfold", artist: "Alina Baraz & Galimatias", album: "Urban Flora", genre: "Electronic", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "January 28th", artist: "J.Cole", album: "2014 Forest Hills Drive", genre: "Hip Hop/Rap", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "03' Adolescence", artist: "J.Cole", album: "2014 Forest Hills Drive", genre: "Hip Hop/Rap", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "A Tale of 2 Citiez", artist: "J.Cole", album: "2014 Forest Hills Drive", genre: "Hip Hop/Rap", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fire Squad", artist: "J.Cole", album: "2014 Forest Hills Drive", genre: "Hip Hop/Rap", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "No Role Modelz", artist: "J.Cole", album: "2014 Forest Hills Drive", genre: "Hip Hop/Rap", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Lost Souls (feat. DJ Scratch), updatedAt: new Date()", artist: "H.E.R.", album: "I Used to Know Her", genre: "R&B/Soul", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Feel a Way", artist: "H.E.R.", album: "I Used to Know Her", genre: "R&B/Soul", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Against Me", artist: "H.E.R.", album: "I Used to Know Her", genre: "R&B/Soul", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Could've Been (feat. Bryson Tiller), updatedAt: new Date()", artist: "H.E.R.", album: "I Used to Know Her", genre: "R&B/Soul", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "As I Am", artist: "H.E.R.", album: "I Used to Know Her", genre: "R&B/Soul", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Apartment", artist: "Yound The Giant", album: "Young The Giant", genre: "Alternative", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "My Body", artist: "Yound The Giant", album: "Young The Giant", genre: "Alternative", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "I Got", artist: "Yound The Giant", album: "Young The Giant", genre: "Alternative", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Cough Syrup", artist: "Yound The Giant", album: "Young The Giant", genre: "Alternative", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Guns", artist: "Yound The Giant", album: "Young The Giant", genre: "Alternative", decadeYear: 10, createdAt: new Date(), updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Songs', null, {});
  }
};
