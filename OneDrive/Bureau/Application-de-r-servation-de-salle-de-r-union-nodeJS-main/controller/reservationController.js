const Reservation = require('../models/Reservation');

const nodemailer = require('nodemailer');


/*
// Fonction pour vérifier les conflits de réservation
const checkReservationConflict = async (salleId, dateHeureDebut, dateHeureFin) => {
    const existingReservation = await Reservation.findOne({
        salle: salleId,
        $or: [
            { dateHeureDebut: { $gte: dateHeureDebut, $lt: dateHeureFin } },
            { dateHeureFin: { $gt: dateHeureDebut, $lte: dateHeureFin } }
        ]
    });
    return existingReservation;
};

// Fonction pour envoyer des notifications par e-mail
const sendEmailNotification = async (reservation, action) => {
    // Configurer le transporteur de messagerie
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Remplacez par l'adresse du serveur SMTP
        port: 587, // Port SMTP
        secure: false, // true pour SSL, false pour TLS
        auth: {
            user: 'your_username', // Nom d'utilisateur SMTP
            pass: 'your_password' // Mot de passe SMTP
        }
    });

    // Configuration de l'e-mail
    const mailOptions = {
        from: 'your@example.com',
        to: reservation.utilisateur.email, // Assurez-vous que votre modèle de données Reservation contient l'e-mail de l'utilisateur
        subject: 'Notification de réservation',
        text: `Votre réservation a été ${action}.`
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);
};

exports.ReserverReservation = async (req, res) => {
    try {
        const { utilisateur, salle, dateHeureDebut, dateHeureFin, status } = req.body;

        // Vérifier s'il y a un conflit de réservation
        const conflictReservation = await checkReservationConflict(salle, dateHeureDebut, dateHeureFin);
        if (conflictReservation) {
            return res.status(400).send('Conflit de réservation détecté');
        }

        const newReservation = new Reservation({ utilisateur, salle, dateHeureDebut, dateHeureFin, status });
        await newReservation.save();

        // Envoyer une notification par e-mail pour confirmer la réservation
        await sendEmailNotification(newReservation, 'créée');

        res.status(201).send('Reservation ajoutée');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

*/














exports.createReservation = async (req, res) => {
    try {
        const { utilisateur,  salle, dateHeureDebut, dateHeureFin, status } = req.body;
        const newReservation = new Reservation({ utilisateur,  salle, dateHeureDebut, dateHeureFin, status  });
        await newReservation.save();
        res.status(201).send('Reservation ajoutée');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const { utilisateur,  salle, dateHeureDebut, dateHeureFin, status  } = req.body;
        const updatedReservation = await Reservation.findByIdAndUpdate(id, { utilisateur,  salle, dateHeureDebut, dateHeureFin, status  }, { new: true });
        res.send(updatedReservation);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.send("Reservation supprimée");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).send('Reservation not found');
        }
        res.send(reservation);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getAllReservations = async (req, res) => {
    try {
        const Reservations = await Reservation.find().populate('salle', 'status');
        res.send(Reservations);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
