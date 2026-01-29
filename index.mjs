import {
	initTerminal2DEngine, initKeyboard,
	onkey,
	clear,
	waitOnceKey
} from "./engine/terminal-engine.mjs"
import { 
	moveDown, moveLeft, moveRight, moveUp
} from "./proc/snake.mjs"
import { drawSnake } from "./ui/snake.mjs"
import {
	actionOnInfiniteMenuSelection,
	getInfiniteModeCurrentSelection,
	drawMenuMode
} from "./ui/game.mjs"

import { initGame } from "./proc/game.mjs"

const KEY_NAME = {
	DOWN: 'down',
	UP: 'up',
	LEFT: 'left',
	RIGHT: 'right',
	SPACE: 'space',
	ENTER: 'return'
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

/**
 * Détection des entrées pour le menu de sélection
 * - Haut/Bas pour naviguer
 * - Espace/Entrée pour valider
 * @param {{name: string}} key Le nom de la touche du clavier 
 * @returns {boolean} Si la validation a été activée
 */
async function onkeyInfiniteModeMenu(key) {
	switch (key.name) {
		case KEY_NAME.DOWN:
			actionOnInfiniteMenuSelection('down')
			break
		case KEY_NAME.UP:
			actionOnInfiniteMenuSelection('up')
			break
		case KEY_NAME.SPACE:
		case KEY_NAME.ENTER:
			return true
	}
}

/**
 * Menu de sélection du mode infini
 * @returns {Promise<{infiniteMode: boolean}>}
 */
async function selectInfiniteMode() {
	clear()
	drawMenuMode()
	await waitOnceKey(onkeyInfiniteModeMenu)
	return getInfiniteModeCurrentSelection()
}

/**
 * Démarre le jeu
 */
function startGame() {
	clear()
	drawSnake()
	onkey(applyDirection)
}

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	const infiniteMode = await selectInfiniteMode()
	initGame(infiniteMode)
	startGame()
}

main()