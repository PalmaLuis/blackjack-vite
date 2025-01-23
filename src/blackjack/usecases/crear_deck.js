import _ from "underscore";

/** 
 * Esta funcion crea un nuevo deck
  @param {array<string>} tiposDeCarta
  @param {array<string>} tiposEspeciales
  @returns {array<string>} retorna un nuevo deck de cartas
*/
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  let deck = [];
  if (!tiposDeCarta || tiposDeCarta.length === 0) {
    throw new Error("Tipos de Carta es obligatorio como un arreglo de string");
  }
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un arreglo de string");
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);

  return deck;
};
