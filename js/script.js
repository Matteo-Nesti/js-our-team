console.log("js ok");

// creo l'array con gli oggetti per i dati forniti
const team = [
  {
    firstName: "wayne",
    lastName: "Barnett",
    mantion: "Founder & CEO",
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    mantion: "Chief Editor",
  },
  {
    firstName: "Walter",
    lastName: "Gordonm",
    mantion: "Officer manager",
  },
  {
    firstName: "Angela",
    LastName: "Lopez",
    mantion: "Social Media Manager",
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    mantion: "Developer",
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    mantion: "Graphic Designer",
  },
];
// creo un ciclo per prendere tutti io dati contenuti negli oggetti dentro gli array

let description = "";

for (const info of team) {
  description += `
    <span>${info.firstName}</span>
    <span>${info.lastName}</span>
    <p>${info.mantion}</p>
    `;
  // stampo in console per verificare

  console.log(description);
}
