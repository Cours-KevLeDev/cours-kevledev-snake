import { initTerminal2DEngine, initKeyboard, drawString } from "../engine/terminal-engine.mjs";

initTerminal2DEngine()
initKeyboard()
function drawMenuMode() {
	const MENU_OPTION = {
		M_Normal: 'Mode: Normal',
		M_Infini: 'Mode: Déplacement Infini'
	}
	drawString(5,3,MENU_OPTION.M_Normal)
	drawString(5,5,MENU_OPTION.M_Infini)
}
drawMenuMode()