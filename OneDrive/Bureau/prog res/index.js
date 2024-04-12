const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Static files like images, CSS, and JavaScript files
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/salle', (req, res) => {
    res.render('salle', { 
        // Ici, vous pouvez passer des paramètres à votre vue EJS
        roomImage: 'images/im1.jpg',
        roomSize: '100 sqm',
        roomCapacity: '40',
        roomEquipment: 'Projector, Whiteboard'
    });
});

app.get('/reservation', (req, res) => {
    res.render('reservation');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
