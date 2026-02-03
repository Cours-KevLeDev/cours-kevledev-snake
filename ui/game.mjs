import {
	drawString,
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"

const INFINITE_MODE_OPTIONS = [
	'Mode: Normal', 
	'Mode: Déplacement Infini',
	'Quitter'
]
let infiniteModeSelected = 0

/**
 * Dessine le curseur du menu
 * Rafraichit automatiquement en supprimant à l'ancienne position
 */
function drawInfiniteModeCursor(previousInfiniteModeSelected) {
	const pos = getInfiniteModeMenuPos()
	const y = pos.y + infiniteModeSelected
	const x = pos.x - 2
	
	if (previousInfiniteModeSelected !== undefined) {
		const prevY = pos.y + previousInfiniteModeSelected
		drawString(x, prevY, ' ')
	}
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

	for (let i = 0; i < INFINITE_MODE_OPTIONS.length; i++) {
		drawString(pos.x, pos.y + i, INFINITE_MODE_OPTIONS[i])
	}

	drawInfiniteModeCursor()
}


/**
 * Action à effectuer lors de la sélection dans le menu mode infini
 * @param {'up'|'down'} action 
 */
export function actionOnInfiniteMenuSelection(action) {
	const previousInfiniteModeSelected = infiniteModeSelected
	switch (action) {
		case 'up':
			infiniteModeSelected = infiniteModeSelected - 1
			if (infiniteModeSelected < 0) infiniteModeSelected = INFINITE_MODE_OPTIONS.length - 1
			break
		case 'down':
			infiniteModeSelected = (infiniteModeSelected + 1) % INFINITE_MODE_OPTIONS.length
			break
	}
	drawInfiniteModeCursor(previousInfiniteModeSelected)
}

/**
 * Récupère l'option sélectionnée dans le menu mode infini
 * @returns {boolean} Si le mode infini est sélectionné
 */
export function getInfiniteModeCurrentSelection() {
	return infiniteModeSelected === 1 
}