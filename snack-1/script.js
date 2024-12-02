const names = ['Edoardo', 'Simone', 'Francesco'];
let nomi="";

for (i in names){
  //Scorro tutti gli elementi della lista e li stampo, quando arrivo all'ultimo elemento non stampo la virgola, ottenenedo il risultato richiesto
  i < names.length-1 ? nomi+= `'${names[i]}', ` : nomi+= `'${names[i]}'`
}

console.log(nomi);

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'