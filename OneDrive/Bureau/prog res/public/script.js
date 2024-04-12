// script.js

document.addEventListener('DOMContentLoaded', function() {
  var reservationForm = document.getElementById('reservationForm');
  reservationForm.onsubmit = function(e) {
      e.preventDefault(); // Pour éviter l'envoi du formulaire

      // Ici, vous pouvez ajouter la logique pour valider ou traiter le formulaire.
      console.log('Formulaire envoyé');
      // Par exemple, récupérer les valeurs et les afficher dans la console
      var roomType = document.getElementById('roomType').value;
      var date = document.getElementById('date').value;
      var startTime = document.getElementById('startTime').value;
      var endTime = document.getElementById('endTime').value;
      var peopleCount = document.getElementById('peopleCount').value;
      var city = document.getElementById('city').value;

      console.log('Type de salle: ', roomType);
      console.log('Date: ', date);
      console.log('De: ', startTime);
      console.log('À: ', endTime);
      console.log('Nombre de personnes: ', peopleCount);
      console.log('Ville: ', city);

      // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
      // ou pour afficher les résultats sur la page.
  };
});
