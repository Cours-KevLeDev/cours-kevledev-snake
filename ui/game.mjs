import {
	drawString,
	getScreenWidth,
	getScreenHeight
} from "../engine/terminal-engine.mjs"

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
}

