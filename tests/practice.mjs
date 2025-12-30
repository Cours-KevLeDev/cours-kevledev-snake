import { onkey } from '../engine/terminal-engine.mjs'
import { initTerminal2DEngine , initKeyboard } from '../engine/terminal-engine.mjs'

const DOWN = 'down'

function pressKey(key) {
	switch (key.name) {
		case DOWN:
			console.log('Je suis la touche du BAS')
			break
	}
}

function main() {
	initTerminal2DEngine()
	initKeyboard()
	onkey(pressKey)
}

main()