import { getScreenWidth, getScreenHeight } from "../engine/terminal-engine.mjs"

/**
 * Verifie si le Snake a depasser la limite autoriser
 * @param {number} x La position lateral du Snake
 * @param {number} y La hauteur du Snake
 * @returns {boolean} Renvoie si la collision est detecter ou non
 */
export function isWallAt(x, y) {
	if (x < 0 || x > getScreenWidth() || y < 0 || y > getScreenHeight()) {
		return true
	}
	return false
}