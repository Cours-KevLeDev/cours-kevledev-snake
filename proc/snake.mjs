import { 
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"
import { isWallAt } from "./walls.mjs"

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
 * Fait descendre le Snake et empeche qu'il depasse le terminal
 */
export function moveDown() {
	position_snake.y += 1
	if (position_snake.y > getScreenHeight()) {
		console.error(new Date().toISOString(),isWallAt(position_snake.x,position_snake.y))
	}
}

/**
 * Fait monter le Snake et empeche qu'il depasse le terminal
 */
export function moveUp() {
	position_snake.y -= 1
	if (isWallAt(position_snake.x,position_snake.y) === 'y_wall_up') {
		position_snake.y = 0
	}
}

/**
 * Deplace le Snake a gauche et empeche qu'il depasse le terminal
 */
export function moveLeft() {
	position_snake.x -= 1
	if (isWallAt(position_snake.x,position_snake.y) === 'x_wall_left') {
		position_snake.x = 0
	}
}

/**
 * Deplace le Snake a droite et empeche qu'il depasse le terminal
 */
export function moveRight() {
	position_snake.x += 1
	if (position_snake.x > getScreenWidth()) {
		console.error(new Date().toISOString(),isWallAt(position_snake.x,position_snake.y))
	}
}