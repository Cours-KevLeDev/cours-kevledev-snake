import { 
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"

const position_snake = { 
	x: getScreenWidth()/2,
	y: getScreenHeight()/2
}

/**
 * Position du Snake
 * @returns Valeurs contenant la position du Snake
 */
export function xySnake() {
	return position_snake
}

/**
 * Ajoute une valeur Y
 */
export function moveDown() {
	position_snake.y += 1
}

/**
 * Retire une valeur Y
 */
export function moveUp() {
	position_snake.y -= 1
}

/**
 * Retire une valeur X
 */
export function moveLeft() {
	position_snake.x -= 2
}

/**
 * Ajoute une valeur Y
 */
export function moveRight() {
	position_snake.x += 2
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