import { clear } from "../engine/terminal-engine.mjs"
import { drawSnake } from "../ui/snake.mjs"

const position_snake = { 
	x: 2,
	y: 2
}

/**
 * Position du Snake
 * @returns Valeurs contenant la position du Snake
 */
export function xySnake() {
	return position_snake
}

const PRESS_DOWN = 'down'

/**
 * Permet que le Snake bouge quand on saisie une touche du clavier
 * @param {???} key Saisie d'une touche du clavier
 */
export function pressDirection(key) {
	clear()
	if (key.name === PRESS_DOWN) {
		position_snake.y += 1
		drawSnake()
	}
}