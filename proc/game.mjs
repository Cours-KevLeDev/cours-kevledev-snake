export let game_is_loop

/**
 * Parametre d'activation si le Snake fait une boucle ou non
 * @param {boolean} infiniteMove Quand on fait une boucle
 */
export function initGame(infiniteMove) {
	if (infiniteMove) {
		game_is_loop = true
	} else { game_is_loop = false }
}