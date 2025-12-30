import { positionxy } from "../proc/snake.mjs"
import { drawString } from "../engine/terminal-engine.mjs"

/**
 * Dessine la tete du Snake a l'endroit actuel
 */
export function drawSnake() {
	drawString(positionxy().x,positionxy().y,'¥')
}