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


exports.getAllSalles = async (req, res) => {
    try {
        const salles = await Salle.find().populate('nom', 'disponibilites');
        res.send(salles);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
export const countByCity = async (req, res, next) => {
    const cities=req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Salle.countDocuments({city:city})
        }))
        res.status(200).json(list);
    } catch (error) {
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    const sallecount=await  salle.countDocuments({type:"salle"})
    const salledeconferenceCount =await Salle.countDocuments({type:"salledeconference"});
    const salledeseminaire =await Salle.countDocuments({type:"salledeseminaire"});
    const salledereception =await Salle.countDocuments({type:"salledereception"});
    const salledereunion =await Salle.countDocuments({type:"salledereunion"});
    
      try{
        res.status(200).json([
            {type: "salle", count: sallecount},
            {type: "salledeconference", count: salledeconference},
            {type: "salledeseminaire", count: salledeseminaire},
            {type: "salledereception", count: salledereception},
            {type: "salledereunion", count: salledereunion},
        ]);
    } catch (error) {
        next(err);
    }
};