/**
 * Esta funcion extrae una carta
 * @param {array<string>} deck un arreglo de string ejemplo: ['2C', '3D', '4H', '5S']
 * @returns { string } retorna una string '2C'
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
