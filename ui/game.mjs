import { initTerminal2DEngine, initKeyboard, drawString, getScreenHeight, getScreenWidth } from "../engine/terminal-engine.mjs";

const MENU_OPTION = {
	M_Normal: 'Mode: Normal',
	M_Infini: 'Mode: Déplacement Infini'
}

const position_option = { 
	x: Math.ceil((getScreenWidth()/2)-(MENU_OPTION.M_Normal.length/2)),
	y: Math.ceil(getScreenHeight()/2)
}

function drawMenuMode() {
	drawString(position_option.x-2,position_option.y,'•')
	drawString(position_option.x,position_option.y,MENU_OPTION.M_Normal)
	drawString(position_option.x,position_option.y+1,MENU_OPTION.M_Infini)
}

initTerminal2DEngine()
initKeyboard()
drawMenuMode()