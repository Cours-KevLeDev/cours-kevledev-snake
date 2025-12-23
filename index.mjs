import {
	initTerminal2DEngine,
	initKeyboard,
	onkey
} from "./engine/terminal-engine.mjs"
import { pressKey } from "./proc/snake.mjs"

async function main() {
	initTerminal2DEngine()
	initKeyboard()
	onkey(pressKey)
}
main()