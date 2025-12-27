import {
	initTerminal2DEngine,
	initKeyboard,
	onkey
} from "./engine/terminal-engine.mjs"
import { pressDirection } from "./proc/snake.mjs"
import { drawSnake } from "./ui/snake.mjs"

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	drawSnake()
	onkey(pressDirection)
}
main()