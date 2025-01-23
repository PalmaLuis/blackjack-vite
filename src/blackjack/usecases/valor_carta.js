/**
 * Extrae el valor de la carta y la retorna
 * @param { string } carta  -recibe una carta ejemplo "2C"
 * @returns {number} regresa el valor de la carta ejemplo 2
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
