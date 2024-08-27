function verificaPalindromo(str) {
 
  const strLimpa = str.replace(/\s+/g, '').toLowerCase();
  const strInvertida = strLimpa.split('').reverse().join('');
  return strLimpa === strInvertida;
}

const palavra = "Socorram me subi no onibus em Marrocos";
const result = verificaPalindromo(palavra);
console.log(result); 
