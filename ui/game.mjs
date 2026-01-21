import { initTerminal2DEngine, initKeyboard, drawString, getScreenHeight, getScreenWidth, onkey, clear } from "../engine/terminal-engine.mjs";

function testError() {
	console.error(new Date().toISOString(),position_cursor.y)
}

const MENU_OPTION = {
	M_Normal: 'Mode: Normal',
	M_Infini: 'Mode: Déplacement Infini'
}

const position_option = { 
	x: Math.ceil((getScreenWidth()/2)-(MENU_OPTION.M_Normal.length/2)),
	y: Math.ceil(getScreenHeight()/2)
}

const position_cursor = {
	x: position_option.x - 2,
	y: position_option.y
}

function isWallAtCursor(y) {
	if (y !== position_option.y && y !== position_option.y+1) {
		return true
	}
	return false
}

function moveDown() {
	const isWallNext = isWallAtCursor(position_cursor.y + 1)
	if (isWallNext) {
		return
	}
	position_cursor.y += 1
	testError()
}
function moveUp() {
	const isWallNext = isWallAtCursor(position_cursor.y - 1)
	if (isWallNext) {
		return
	}
	position_cursor.y -= 1
	testError()
}

const KEY_NAME = {
	DOWN: 'down',
	UP: 'up'
}
function applyDirection(key) {
	clear()
	switch (key.name) {
		case KEY_NAME.DOWN:
			moveDown()
			break
		case KEY_NAME.UP:
			moveUp()
			break
	}
	drawMenuMode()
}

function drawMenuMode() {
	drawString(position_cursor.x,position_cursor.y,'•')
	drawString(position_option.x,position_option.y,MENU_OPTION.M_Normal)
	drawString(position_option.x,position_option.y+1,MENU_OPTION.M_Infini)
}

function main() {
	initTerminal2DEngine()
	initKeyboard()
	drawMenuMode()
	onkey(applyDirection)
}
main()
