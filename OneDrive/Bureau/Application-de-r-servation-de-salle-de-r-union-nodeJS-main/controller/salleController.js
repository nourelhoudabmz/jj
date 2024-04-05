const Salle = require('../models/Salle');

exports.createSalle = async (req, res) => {
    try {
        const { nom, photos, capacite, equipements, disponibilites } = req.body;
        const newSalle = new Salle({ nom, photos, capacite, equipements, disponibilites });
        await newSalle.save();
        res.status(201).send('Salle ajoutée');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateSalle = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, photos, capacite, equipements, disponibilites } = req.body;
        const updatedSalle = await Salle.findByIdAndUpdate(id, { nom, photos, capacite, equipements, disponibilites }, { new: true });
        res.send(updatedSalle);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteSalle = async (req, res) => {
    try {
        const { id } = req.params;
        await Salle.findByIdAndDelete(id);
        res.send("Salle supprimée");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getSalleById = async (req, res) => {
    try {
        const salle = await Salle.findById(req.params.id);
        if (!salle) {
            return res.status(404).send('Salle not found');
        }
        res.send(salle);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getAllSalles = async (req, res) => {
    try {
        const salles = await Salle.find().populate('nom', 'disponibilites');
        res.send(salles);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
