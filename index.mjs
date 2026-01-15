import {
	initTerminal2DEngine, initKeyboard,
	onkey,
	clear
} from "./engine/terminal-engine.mjs"
import { 
	moveDown, moveLeft, moveRight, moveUp
} from "./proc/snake.mjs"
import { drawSnake } from "./ui/snake.mjs"
import { initGame } from "./proc/game.mjs"

const args = process.argv

const KEY_NAME = {
	DOWN: 'down',
	UP: 'up',
	LEFT: 'left',
	RIGHT: 'right'
}

/**
 * Récupère la saisie du clavier et fait bouger le snake en fonction de la touche utilisée
 * @param {{name: string}} key Le nom de la touche du clavier
 */
function applyDirection(key) {
	clear()
	switch (key.name) {
		case KEY_NAME.DOWN:
			moveDown()
			break
		case KEY_NAME.UP:
			moveUp()
			break
		case KEY_NAME.LEFT:
			moveLeft()
			break
		case KEY_NAME.RIGHT:
			moveRight()
			break
	}
	drawSnake()
}

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	if (args[2] === '--infinite-move') {
		initGame(true)
	} else { initGame(false) }
	drawSnake()
	onkey(applyDirection)
}
main()