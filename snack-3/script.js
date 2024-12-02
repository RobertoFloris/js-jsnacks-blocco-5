const numbers = [2, 8, 4, 7, 2, 87];

//rimappo l'array restituendo un nuovo array incrementando ogni elemento di uno
const numberPlusOne = numbers.map (number => {
  return number + 1
})

console.log(numberPlusOne);


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]