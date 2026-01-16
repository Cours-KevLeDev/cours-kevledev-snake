let _infiniteMove = false

/**
 * Fonction d'initiation des paramètres du jeu du Snake
 * @param {boolean} infiniteMove Déplace à l'infini le snake si on dépasse l'écran
 */
export function initGame(infiniteMove) {
	if (infiniteMove) {
		_infiniteMove = true
	}
}

/**
 * Indique si le paramètre de déplacement infini du snake est activé ou non 
 * @returns {boolean} true si le déplacement est infini, false sinon
 */
export function isInfiniteMove() {
	return _infiniteMove
}