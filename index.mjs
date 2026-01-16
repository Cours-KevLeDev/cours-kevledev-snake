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
	// Dans la majorité des cas, on ne mets que des fonctions, des constantes et des import
	// Même pour les arguments (et c'est aussi pour être habitué pour d'autres langages qui ne sont pas comme JS)
	const args = process.argv
	const infiniteMove = args[2] === '--infinite-move'

	initTerminal2DEngine()
	initKeyboard()
	initGame(infiniteMove)
	drawSnake()
	onkey(applyDirection)
}
main()