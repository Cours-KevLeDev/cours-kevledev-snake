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
	if (isWallAt(position_snake.x, position_snake.y + 1)) {
		return
	}
	position_snake.y += 1

}

/**
 * Fait monter le Snake et empeche qu'il depasse le terminal
 */
export function moveUp() {
	if (isWallAt(position_snake.x, position_snake.y - 1)) {
		return
	}
	position_snake.y -= 1
}

/**
 * Deplace le Snake a gauche et empeche qu'il depasse le terminal
 */
export function moveLeft() {
	if (isWallAt(position_snake.x - 1, position_snake.y)) {
		return
	}
	position_snake.x -= 1

}

/**
 * Deplace le Snake a droite et empeche qu'il depasse le terminal
 */
export function moveRight() {
	if (isWallAt(position_snake.x + 1, position_snake.y)) {
		return
	}
	position_snake.x += 1
}