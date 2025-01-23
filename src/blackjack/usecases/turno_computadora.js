import { pedirCarta } from "./pedir_carta";
import { valorCarta } from "./valor_carta";
import { crearCartaHTML } from "./crear_carta_html";
/**
 *
 * @param {number} puntosMinimos puntos minimos q la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora
 * @param {array<string>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck,
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos es necesario");
  if (!puntosHTML) throw new Error("El argumento puntosHTML es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    divCartasComputadora.append(crearCartaHTML(carta));

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
