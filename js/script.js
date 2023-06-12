console.log("js ok");

//recupero elementi dal dom
const descriptionContainer = document.getElementById("description-container");
// creo l'array con gli oggetti per i dati forniti
const team = [
  {
    profilePic: "1.jpg",
    firstName: "wayne",
    lastName: "Barnett",
    mantion: "Founder & CEO",
  },
  {
    profilePic: "2.jpg",
    firstName: "Angela",
    lastName: "Caroll",
    mantion: "Chief Editor",
  },
  {
    profilePic: "3.jpg",
    firstName: "Walter",
    lastName: "Gordonm",
    mantion: "Officer manager",
  },
  {
    profilePic: "4.jpg",
    firstName: "Angela",
    LastName: "Lopez",
    mantion: "Social Media Manager",
  },
  {
    profilePic: "5.jpg",
    firstName: "Scott",
    lastName: "Estrada",
    mantion: "Developer",
  },
  {
    profilePic: "6.jpg",
    firstName: "Barbara",
    lastName: "Ramos",
    mantion: "Graphic Designer",
  },
];
// creo un ciclo per prendere tutti io dati contenuti negli oggetti dentro gli array

let description = "";

for (const info of team) {
  description += `
    <img src="img/${info.profilePic}" alt="profile-pic">
    <span>${info.firstName}</span>
    <span>${info.lastName}</span>
    <p>${info.mantion}</p>
    `;
  // stampo in console per verificare
  console.log(description);
}
descriptionContainer.innerHTML = description;
