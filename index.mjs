import {
	initTerminal2DEngine, initKeyboard,
	clear,
	waitOnceKey,
	destroy
} from "./engine/terminal-engine.mjs"
import { 
	moveDown, moveLeft, moveRight, moveUp
} from "./proc/snake.mjs"
import { drawSnake } from "./ui/snake.mjs"
import {
	actionOnInfiniteMenuSelection,
	getInfiniteModeCurrentSelection,
	getExitModeCurrentSelection,
	drawMenuMode
} from "./ui/game.mjs"

import { initGame } from "./proc/game.mjs"

const KEY_NAME = {
	DOWN: 'down',
	UP: 'up',
	LEFT: 'left',
	RIGHT: 'right',
	SPACE: 'space',
	ENTER: 'return',
	ESCAPE: 'escape'

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
		case KEY_NAME.ESCAPE:
			return true
	}
	drawSnake()
}

let exit_in_menu = false

/**
 * Détection des entrées pour le menu de sélection
 * - Haut/Bas pour naviguer
 * - Espace/Entrée pour valider
 * @param {{name: string}} key Le nom de la touche du clavier 
 * @returns {boolean} Si la validation a été activée
 */
function onkeyInfiniteModeMenu(key) {
	switch (key.name) {
		case KEY_NAME.DOWN:
			actionOnInfiniteMenuSelection('down')
			break
		case KEY_NAME.UP:
			actionOnInfiniteMenuSelection('up')
			break
		case KEY_NAME.SPACE:
		case KEY_NAME.ENTER:
			if (getExitModeCurrentSelection()) {
				exit_in_menu = true
			}
			return true
		case KEY_NAME.ESCAPE:
			exit_in_menu = true
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
	return { infiniteMode: getInfiniteModeCurrentSelection(), shouldExit: exit_in_menu } 
}

/**
 * Démarre le jeu
 */
async function startGame() {
	clear()
	drawSnake()
	await waitOnceKey(applyDirection)
}

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	while (!exit_in_menu) {
		const { infiniteMode, shouldExit } = await selectInfiniteMode()
		if (!shouldExit) {
			initGame(infiniteMode)
			await startGame()
		}
	}
	destroy()
	process.exit()
}

main()