export const numbersRandom =  () => {
  let numeros = [];
  for (let i = 0; i < 3; i++) {
    numeros.push(Math.floor(Math.random() * 9) + 1);
  }
  return numeros;
}