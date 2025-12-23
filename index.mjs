import {
	initTerminal2DEngine,
	initKeyboard
} from "./engine/terminal-engine.mjs"

async function main() {
	initTerminal2DEngine()
	initKeyboard()
}
main()