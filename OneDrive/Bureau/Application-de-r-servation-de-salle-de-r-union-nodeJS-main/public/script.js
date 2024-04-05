// script.js

// Cette fonction sera appelée lorsque l'utilisateur clique sur le bouton de réservation.
function showCalendar() {
    // Crée un élément de type input pour la date
    var calendarHTML = '<input type="date" id="datePicker">';
    
    // Insère le calendrier dans l'élément avec l'id 'calendar'
    document.getElementById('calendar').innerHTML = calendarHTML;
    
    // Affiche l'élément 'calendar'
    document.getElementById('calendar').style.display = 'block';
  
    // Vous pourriez également ajouter un écouteur d'événements pour le changement de date ici
    document.getElementById('datePicker').addEventListener('change', function(event) {
      var selectedDate = event.target.value;
      console.log('Date sélectionnée :', selectedDate);
      // Ici, vous pourriez faire d'autres choses comme mettre à jour un état ou envoyer la date au serveur
    });
  }
  
  // Attacher l'événement 'click' au bouton de réservation une fois que la page est chargée
  document.addEventListener('DOMContentLoaded', function() {
    var reserveButton = document.getElementById('reserveButton');
    if (reserveButton) {
      reserveButton.addEventListener('click', showCalendar);
    }
  });
  