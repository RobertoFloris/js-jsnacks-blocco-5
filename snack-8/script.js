const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


//find restituisce un oggetto per cui salvo l'oggetto marco lanci in una variabile e poi stampo la sua proprietà class

const marcoLanci = students.find(student => student.name == 'Marco Lanci')

console.log(marcoLanci.class);


// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'