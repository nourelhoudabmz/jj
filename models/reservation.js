const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  salle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Salle',
    required: true
  },
  dateHeureDebut: {
    type: Date,
    required: true
  },
  dateHeureFin: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Confirmée', 'Annulée', 'En attente'],
    default: 'En attente'
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
