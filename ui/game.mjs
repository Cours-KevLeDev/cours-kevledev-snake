import { drawString, getScreenHeight, getScreenWidth } from "../engine/terminal-engine.mjs"
import { initGame } from "../proc/game.mjs"

const MENU_OPTION = {
	M_Normal: 'Mode: Normal',
	M_Infini: 'Mode: Déplacement Infini'
}

const position_menu_option = { 
	x: Math.ceil((getScreenWidth()/2)-(MENU_OPTION.M_Normal.length/2)),
	y: Math.ceil(getScreenHeight()/2)
}

const KEY_NAME = {
	DOWN: 'down',
	UP: 'up',
	SPACE: 'space'
}

export const position_cursor = {
	x: position_menu_option.x - 2,
	y: position_menu_option.y
}

/**
 * Permet de bloquer tout les emplacement du curseur excepter l'endroit ou sont les menus
 * @param {number} y Emplacement du Curseur
 * @returns {boolean} Si le curseur est bloquer ou non
 */
function itsBlockedCursor(y) {
	if (y !== position_menu_option.y && y !== position_menu_option.y + 1) {
		return true
	}
	return false
}

/**
 * Fait descendre le Snake
 * Si la prochaine position est un mur, il reviens à l'opposer
 * @returns 
 */
function moveDown() {
	const isWallNext = itsBlockedCursor(position_cursor.y + 1)
	if (isWallNext) {
		position_cursor.y = position_menu_option.y
		return
	}
	position_cursor.y += 1
}

/**
 * Fait monter le Snake
 * Si la prochaine position est un mur, il reviens à l'opposer
 * @returns 
 */
function moveUp() {
	const isWallNext = itsBlockedCursor(position_cursor.y - 1)
	if (isWallNext) {
		position_cursor.y = position_menu_option.y + 1
		return
	}
	position_cursor.y -= 1
}

// Je ne sais pas si je dois le mettre dans la fonction ou non, car 
// soit: il est toujours réecrit en permanance dans la fonction,
// soit: il est initialiser dés le depart dans game.mjs
let space_apply = false

/**
 * Applique les directions du menu
 * @param {{name: string}} key Le nom de la touche du clavier 
 * @returns {boolean} Si la touche espace est saisie
 */
export function applyDirectionMenu(key) {
	drawCursorClear()
	switch (key.name) {
		case KEY_NAME.DOWN:
			moveDown()
			break
		case KEY_NAME.UP:
			moveUp()
			break
		case KEY_NAME.SPACE:
			space_apply = true
			break
	}
	if (space_apply) {
		if (drawCursor().y === position_menu_option.y + 1) {
			initGame(true)
		}
		return true
	}
	drawCursor()
}

/**
 * Permet de dessiner le Curseur et de sauvegarder la position initial
 * @returns {{position: number}} Position du curseur a l'etat d'avant
 */
function drawCursor() {
	drawString(position_cursor.x,position_cursor.y,'•')
	const position_avant = { x: position_cursor.x, y: position_cursor.y }
	return position_avant
}

/**
 * Permet d'effacer l'endroit ou etais le curseur precedament
 */
function drawCursorClear() {
	drawString(drawCursor().x,drawCursor().y,' ')
}

/**
 * Dessiner sur le terminal, le menu des options
 */
function drawMenuMode() {
	drawString(position_menu_option.x,position_menu_option.y,MENU_OPTION.M_Normal)
	drawString(position_menu_option.x,position_menu_option.y+1,MENU_OPTION.M_Infini)
}

/**
 * Fonction qui rassemble les fonctions qui dessine sur le terminal
 */
export function menuCursor() {
	drawMenuMode()
	drawCursor()
}
