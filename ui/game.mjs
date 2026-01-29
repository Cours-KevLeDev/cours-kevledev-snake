import {
	drawString,
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"

const INFINITE_MODE_OPTIONS = ['Mode: Normal', 'Mode: Déplacement Infini']
let infiniteModeSelected = 0

/**
 * Dessine le curseur du menu
 * Rafraichit automatiquement en supprimant à l'ancienne position
 */
function drawInfiniteModeCursor() {
	const pos = getInfiniteModeMenuPos()
	const y = pos.y + infiniteModeSelected
	const x = pos.x - 2
	const prevY = pos.y + (infiniteModeSelected === 0 ? 1 : 0)
	drawString(x, prevY, ' ')
	drawString(x, y, '•')
}

/**
 * Position du menu (centré au milieu de l'écran)
 * @returns {{x: number, y: number}} Position du menu
 */
function getInfiniteModeMenuPos() {
	return { 
		x: Math.ceil((getScreenWidth()/2)-(INFINITE_MODE_OPTIONS[0].length/2)),
		y: Math.ceil(getScreenHeight()/2)
	}
}

/**
 * Affiche le menu
 */
export function drawMenuMode() {
	const pos = getInfiniteModeMenuPos()
	// On pourrait faire une boucle
	drawString(pos.x, pos.y, INFINITE_MODE_OPTIONS[0])
	drawString(pos.x, pos.y+1 ,INFINITE_MODE_OPTIONS[1])
	drawInfiniteModeCursor()
}


/**
 * Action à effectuer lors de la sélection dans le menu mode infini
 * @param {'up'|'down'} action 
 */
export async function actionOnInfiniteMenuSelection(action) {
	switch (action) {
		case 'up':
			infiniteModeSelected = (infiniteModeSelected - 1) % INFINITE_MODE_OPTIONS.length
			if (infiniteModeSelected < 0) infiniteModeSelected = INFINITE_MODE_OPTIONS.length - 1
			break
		case 'down':
			infiniteModeSelected = (infiniteModeSelected + 1) % INFINITE_MODE_OPTIONS.length
			break
	}
	drawInfiniteModeCursor()
}

/**
 * Récupère l'option sélectionnée dans le menu mode infini
 * @returns {boolean} Si le mode infini est sélectionné
 */
export function getInfiniteModeCurrentSelection() {
	return infiniteModeSelected === 1 
}