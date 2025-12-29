import { 
	drawString,
	clear
} from "../engine/terminal-engine.mjs"
import { 
	xySnake,
	moveDown, moveLeft, moveRight, moveUp,
} from "../proc/snake.mjs"

const PRESS_BUTTON = {
	DOWN: 'down',
	UP: 'up',
	LEFT: 'left',
	RIGHT: 'right'
}

/**
 * Crée une string sur l'emplacement
 */
export function drawSnake() {
	drawString(xySnake().x,xySnake().y,'¥')
}

/**
 * Permet que le Snake bouge quand on saisie une touche du clavier
 * @param {{key: string}} key Saisie d'une touche du clavier
 */
export function pressDirection(key) {
	clear()
	switch (key.name) {
		case PRESS_BUTTON.DOWN:
			moveDown()
			break
		case PRESS_BUTTON.UP:
			moveUp()
			break
		case PRESS_BUTTON.LEFT:
			moveLeft()
			break
		case PRESS_BUTTON.RIGHT:
			moveRight()
			break
	}
	drawSnake()
}