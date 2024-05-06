// Alegemene functies die hier staan. Deze file kan in meerdere andere files geimporteerd worden en zo kunnen dan de functies weer gebruikt worden.


  // Controleer of er een gebruiker is ingelogd door te controleren of er gebruikersgegevens in de localStorage zijn
export function checkIfLoggedIn() {
    const user1 = localStorage.getItem('user');
    const user = JSON.parse(user1)
  if(user){
    return user;
  } else {
    const user = null;
    return user;
  }
    // Als er gebruikersgegevens zijn, retourneer true (ingelogd), anders retourneer false (niet ingelogd)
    // return !user; // zet een waarde om in een boolean
}
