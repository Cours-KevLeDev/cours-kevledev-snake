import { drawString } from "../engine/terminal-engine.mjs"

/**
 * Affiche le menu
 */
export function drawMenuMode() {
	drawString(0, 0, INFINITE_MODE_OPTIONS[0])
	drawString(0, 1,INFINITE_MODE_OPTIONS[1])
}

