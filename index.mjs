import {
	initTerminal2DEngine,
	initKeyboard,
	onkey
} from "./engine/terminal-engine.mjs"
import { 
	drawSnake,
	pressDirection
} from "./ui/snake.mjs"

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	drawSnake()
	onkey(pressDirection)
}
main()