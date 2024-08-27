function somaDosPares(numeros) {
  return numeros
      .filter(numero => numero % 2 === 0) 
      .reduce((soma, numero) => soma + numero, 0); 
}


const num = [1, 2, 3, 4, 5, 6];
const somaPar = somaDosPares(num);
console.log(somaPar); 