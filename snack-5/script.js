const nums = [2, 8, 4, 7, 12, 87];

// filtro l'array inserendo solo i pari nel nuovo array
const numPari = nums.filter(num =>{
  const pari = !(num%2) 
  return pari
})

console.log(numPari);


// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]