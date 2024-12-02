const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

let nomi="";

for (i in people){
  //Scorro tutti gli elementi della lista e li stampo, quando arrivo all'ultimo elemento non stampo la virgola, ottenenedo il risultato richiesto
  i < people.length-1 ? nomi+= `'${people[i].name}', ` : nomi+= `'${people[i].name}'`
}

console.log(nomi);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'