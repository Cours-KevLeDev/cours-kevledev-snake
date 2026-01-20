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
 * Obtient la position actuelle du snake
 * @returns {{x: number, y: number}} Position x et y du Snake
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
	const isWallNext = isWallAt(position_snake.x, position_snake.y + 1)
	if (isWallNext && !isInfiniteMove()) {
		return
	}
	if (isWallNext) {
		position_snake.y = 0
	} else {
		position_snake.y += 1
	}
}

/**
 * Fait monter le Snake
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveUp() {
	const isWallNext = isWallAt(position_snake.x, position_snake.y - 1)
	if (isWallNext && !isInfiniteMove()) {
		return
	}
	if (isWallNext) {
		position_snake.y = getScreenHeight() - 1
	} else {
		position_snake.y -= 1
	}
}

/**
 * Deplace le Snake a gauche
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveLeft() {
	const isWallNext = isWallAt(position_snake.x - 1, position_snake.y)
	if (isWallNext && !isInfiniteMove()) {
		return
	}
	if (isWallNext) {
		position_snake.x = getScreenWidth() - 1
	} else {
		position_snake.x -= 1
	}
}

/**
 * Deplace le Snake a droite
 * Si la prochaine position est un mur, le snake ne bougera pas
 * Si `infiniteMove` est à `true` alors le snake se téléportera à la position opposée.
 */
export function moveRight() {
	const isWallNext = isWallAt(position_snake.x + 1, position_snake.y)
	if (isWallNext && !isInfiniteMove()) {
		return
	}
	if (isWallNext) {
		position_snake.x = 0
	} else {
		position_snake.x += 1
	}
}