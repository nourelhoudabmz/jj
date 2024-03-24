const mongoose = require('mongoose');

const salleSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  photos: {
    type: [String],
  },
  capacite: {
    type: Number,
    required: true
  },
  equipements: [{
    type: String
  }],
  disponibilites: [{
    jour: {
      type: String,
      required: true
    },
    plagesHoraires: [{
      debut: String,
      fin: String
    }]
  }]
});

const Salle = mongoose.model('Salle', salleSchema);

module.exports = Salle;
