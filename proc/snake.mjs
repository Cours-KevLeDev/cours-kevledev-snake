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
	if (position_snake.y < 0) {
		console.error(new Date().toISOString(),isWallAt(position_snake.x,position_snake.y))
	}
}

/**
 * Deplace le Snake a gauche
 */
export function moveLeft() {
	position_snake.x -= 1
	if (position_snake.x < 0) {
		console.error(new Date().toISOString(),isWallAt(position_snake.x,position_snake.y))
	}
}

/**
 * Deplace le Snake a droite
 */
export function moveRight() {
	position_snake.x += 1
}