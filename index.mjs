import {
	initTerminal2DEngine,
	initKeyboard
} from "./engine/terminal-engine.mjs"
import { drawSnake } from "./ui/snake.mjs"

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	drawSnake()
}
main()