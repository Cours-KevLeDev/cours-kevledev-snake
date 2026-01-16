import { 
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"
import { isWallAt } from "./walls.mjs"
import { isInfiniteMove } from "./game.mjs"

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
 * Fait descendre le Snake
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveDown() {
	if (isWallAt(position_snake.x, position_snake.y + 1) && isInfiniteMove()) {
		position_snake.y = 0
	} else {
		if (isWallAt(position_snake.x, position_snake.y + 1)) {
			return
		}
		position_snake.y += 1
	}
}

/**
 * Fait monter le Snake
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveUp() {
	if (isWallAt(position_snake.x, position_snake.y - 1) && isInfiniteMove()) {
		position_snake.y = getScreenHeight()
	} else {
		if (isWallAt(position_snake.x, position_snake.y - 1)) {
			return
		}
		position_snake.y -= 1
	}
}

/**
 * Deplace le Snake a gauche
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveLeft() {
	if (isWallAt(position_snake.x - 1, position_snake.y) && isInfiniteMove()) {
		position_snake.x = getScreenWidth()
	} else {
		if (isWallAt(position_snake.x - 1, position_snake.y)) {
			return
		}
		position_snake.x -= 1
	}
}

/**
 * Deplace le Snake a droite
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveRight() {
	if (isWallAt(position_snake.x + 1, position_snake.y) && isInfiniteMove()) {
		position_snake.x = 0
	} else {
		if (isWallAt(position_snake.x + 1, position_snake.y)) {
			return
		}
		position_snake.x += 1
	}
}