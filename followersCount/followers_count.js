let count = 0;

function increaseCount() {
    count++; // Incrémenter le count de 1
    displayCount(); // Afficher le count
    checkCountValue(); // Vérifier la valeur du count et afficher les messages
  }
  

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations !");
      } else if (count === 20) {
        alert("Votre publication Instagram a gagné 20 abonnés ! Continuez comme ça !");
      }
}