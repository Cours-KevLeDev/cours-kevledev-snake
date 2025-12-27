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

const PRESS_BUTTON = {
	DOWN: 'down',
	UP: 'up',
	LEFT: 'left',
	RIGHT: 'right'
}

/**
 * Permet que le Snake bouge quand on saisie une touche du clavier
 * @param {???} key Saisie d'une touche du clavier
 */
export function pressDirection(key) {
	clear()
	switch (key.name) {
		case PRESS_BUTTON.DOWN:
			position_snake.y += 1
			break
		case PRESS_BUTTON.UP:
			position_snake.y -= 1
			break
		case PRESS_BUTTON.LEFT:
			position_snake.x -= 2
			break
		case PRESS_BUTTON.RIGHT:
			position_snake.x += 2
			break
	}
	/* [Gestion des collisions des bords du Terminal]
	if (position_snake.y <= 0) {
		position_snake.y = 0
	} else if (position_snake.x <= 0) {
		position_snake.x = 0
	}
	*/
	drawSnake()
}