// Vérifie si la géolocalisation est disponible
if ("geolocation" in navigator) {
  // Demande l'autorisation de géolocalisation à l'utilisateur
  navigator.geolocation.getCurrentPosition(function(position) {
    // Récupère les coordonnées de latitude et de longitude
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Affiche les coordonnées sur la page
    var positionDiv = document.getElementById("position");
    positionDiv.innerHTML = "Latitude : " + latitude + ", Longitude : " + longitude;
  }, function(error) {
    // Gestion des erreurs
    console.error("Erreur de géolocalisation : ", error);
  });
} else {
  // La géolocalisation n'est pas prise en charge par le navigateur
  console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
}
