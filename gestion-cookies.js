// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  
  // Fonction pour définir un cookie avec une date d'expiration
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  // Fonction pour obtenir une valeur par défaut en fonction du nom du cookie
  function getDefault(name) {
    if (name === "nom") {
      return "John Doe"; // Valeur par défaut pour le nom
    }
    return null; // Valeur par défaut si aucun nom correspondant n'est trouvé
  }
  
  // Fonction pour obtenir la valeur d'un cookie avec une valeur par défaut
  function getValueWithDefault(name) {
    var cookieValue = getCookie(name);
    if (cookieValue === null) {
      return getDefault(name); // Utilisez la valeur par défaut si le cookie n'existe pas
    }
    return cookieValue;
  }
  
  // Fonction pour définir la valeur d'un cookie
  function setValue(name, value) {
    setCookie(name, value, 365); // Enregistrez la valeur dans le cookie avec une expiration d'un an
  }
  
  // Utilisation :
  var nom = getValueWithDefault("nom"); // Obtenez la valeur du cookie avec une valeur par défaut
  console.log("Nom actuel : " + nom);
  
  // Vous pouvez maintenant utiliser la variable "nom" pour afficher ou modifier la valeur
  
  // Exemple de définir une nouvelle valeur :
  // nom = "Nouveau nom";
  // setValue("nom", nom);
  