const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

// Routes CRUD pour les réservations
router.post('/create', reservationController.createReservation);
router.get('/', reservationController.getAllReservations);
router.get('/:id', reservationController.getReservationById);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.deleteReservation);

// Route pour créer une nouvelle réservation en vérifiant les conflits et en envoyant une notification par e-mail
//router.post('/checkAndNotify', reservationController.ReserverReservation);



module.exports = router;