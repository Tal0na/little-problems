function fatorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * fatorial(n - 1);
}

const num = 20;
const resul = fatorial(num);
console.log(resul); 
