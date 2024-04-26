var previousPosition = null; // Position précédente
var cumulativeDistance = 0; // Distance cumulée en mètres

// Fonction pour calculer la distance entre deux points en coordonnées géographiques (latitude/longitude)
function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Rayon de la Terre en kilomètres
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance en kilomètres
  return d * 1000; // Conversion en mètres
}

// Fonction pour mettre à jour l'affichage de la distance cumulée
function updateDistanceDisplay() {
  var distanceElement = document.getElementById("distance");
  distanceElement.textContent = "Distance cumulée : " + cumulativeDistance.toFixed(2) + " mètres";
}

// Fonction pour récupérer la position toutes les secondes
function getPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var currentLatitude = position.coords.latitude;
      var currentLongitude = position.coords.longitude;
      
      // Si c'est la première position enregistrée, ne pas calculer la distance
      if (previousPosition === null) {
        previousPosition = {latitude: currentLatitude, longitude: currentLongitude};
      } else {
        // Calculer la distance entre les positions précédente et actuelle
        var distance = calculateDistance(previousPosition.latitude, previousPosition.longitude, currentLatitude, currentLongitude);
        cumulativeDistance += distance;
        // Mettre à jour l'affichage de la distance cumulée
        updateDistanceDisplay();
        // Mettre à jour la position précédente avec la position actuelle
        previousPosition = {latitude: currentLatitude, longitude: currentLongitude};
      }
    }, function(error) {
      console.error("Erreur de géolocalisation : ", error);
    });
  } else {
    console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
  }
}

// Récupérer la position toutes les secondes
setInterval(getPosition, 1000); // 1000 ms = 1 seconde
