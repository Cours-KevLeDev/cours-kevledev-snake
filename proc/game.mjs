let _infiniteMove = false

/**
 * Fonction d'initiation si le Snake parcours ou non le terminal a l'infini
 * @param {boolean} infiniteMove Si on reviens a l'opposer du terminal
 */
export function initGame(infiniteMove) {
	if (infiniteMove) {
		_infiniteMove = true
	}
}

/**
 * Donne le resultat de: Si le Snake parcours ou non le terminal a l'infini
 * @returns {boolean} Si on reviens a l'opposer du terminal
 */
export function isInfiniteMove() {
	return _infiniteMove
}