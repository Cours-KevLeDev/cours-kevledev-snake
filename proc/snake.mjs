import { 
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"
import { isWallAt } from "./walls.mjs"
import { game_is_loop } from "./game.mjs"

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
 * Fait descendre le Snake, l'empeche qu'il depasse le terminal ou l'autorise a revenir dans l'autre coter de la console
 */
export function moveDown() {
	if (isWallAt(position_snake.x, position_snake.y + 1) && !game_is_loop) {
		return
	} else if (isWallAt(position_snake.x, position_snake.y + 1) && game_is_loop) {
		position_snake.y = -1
	}
	position_snake.y += 1

}

/**
 * Fait monter le Snake, l'empeche qu'il depasse le terminal ou l'autorise a revenir dans l'autre coter de la console
 */
export function moveUp() {
	if (isWallAt(position_snake.x, position_snake.y - 1) && !game_is_loop) {
		return
	} else if (isWallAt(position_snake.x, position_snake.y - 1) && game_is_loop) {
		position_snake.y = getScreenHeight()
	}
	position_snake.y -= 1
}

/**
 * Deplace le Snake a gauche, l'empeche qu'il depasse le terminal ou l'autorise a revenir dans l'autre coter de la console
 */
export function moveLeft() {
	if (isWallAt(position_snake.x - 1, position_snake.y) && !game_is_loop) {
		return
	} else if (isWallAt(position_snake.x - 1, position_snake.y) && game_is_loop) {
		position_snake.x = getScreenWidth()
	}
	position_snake.x -= 1

}

/**
 * Deplace le Snake a droite, l'empeche qu'il depasse le terminal ou l'autorise a revenir dans l'autre coter de la console
 */
export function moveRight() {
	if (isWallAt(position_snake.x + 1, position_snake.y) && !game_is_loop) {
		return
	} else if (isWallAt(position_snake.x + 1, position_snake.y) && game_is_loop) {
		position_snake.x = -1
	}
	position_snake.x += 1
}