import { drawString } from "../engine/terminal-engine.mjs"
import { xySnake } from "../proc/snake.mjs"

/**
 * Crée une string sur l'emplacement
 */
export function drawSnake() {
	drawString(xySnake().x,xySnake().y,'¥')
}