import { 
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"

const position_snake = { 
	x: Math.ceil(getScreenWidth()/2),
	y: Math.ceil(getScreenHeight()/2)
}

/**
 * 
 * @returns {{x: number, y: number}} Position actuel du Snake
 */
export function getPosition() {
	return {
		x: position_snake.x,
		y: position_snake.y
	}
}

/**
 * Fait monter le Snake
 */
export function moveDown() {
	position_snake.y += 1
}

/**
 * Fait descendre le Snake
 */
export function moveUp() {
	position_snake.y -= 1
}

/**
 * Deplace le Snake a gauche
 */
export function moveLeft() {
	position_snake.x -= 1
}

/**
 * Deplace le Snake a droite
 */
export function moveRight() {
	position_snake.x += 1
}

/*
[Gestion des collisions des bords du Terminal]
export function collisionSnake() {
	if (position_snake.y <= 0) {
		position_snake.y = 0
	} else if (position_snake.x <= 0) {
		position_snake.x = 0
	}
}
*/