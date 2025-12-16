import console from 'node:console'
import readline from 'node:readline'

/**
 * Terminal Engine
 * - 2D engine, init with initTerminal2DEngine
 * - Keyboard, init with initKeyboard
 * Version: 2.0.0
 */

/**
 * Graphics buffer
 */
let gfxbuffer = Array(process.stdout.rows).fill(' '.repeat(process.stdout.columns))
let bufferchanged = false
/**
 * Draw the gfx buffer
 */
function draw(fps) {
	// Execute la fonction draw une prochaine fois dans X ms, pour afficher une frame tout les Xms, et simuler donc les X FPS
	setTimeout(draw, 1000 / fps)

	// On redessine uniquement si la valeur a changée
	if (bufferchanged) {
		console.clear()
		// '\u001B[?25l' indique à la console qu'on veut cacher le curseur
		process.stdout.write('\u001B[?25l' + gfxbuffer.join('\n'))
		bufferchanged = false
	}
}

/**
 * To use before exiting the program
 * Reput the cursor and clear the console
 */
export function destroy() {
	console.log('\u001B[?25h')
	console.clear()
}

/**
 * Init the Terminal 2D engine with a specific FPS
 * Must be called only once at the start of the program
 * @param {number} fps From 1 to 60 (can be more, but not useful)
 */
export function initTerminal2DEngine(fps) {
	// When we want to exit, we re-show the cursor, we clear the console again, and we exit
	process.on('SIGINT', () => {
		destroy()
		process.exit()
	})
	process.on('SIGWINCH', () => {
		clear()
	})
	draw(fps)
}

/**
 * Clear the screen and remove everything that was draw before
 */
export function clear() {
	gfxbuffer = Array(process.stdout.rows).fill(' '.repeat(process.stdout.columns))
}

/**
 * Init the keyboard input
 * You need to use onkey(fn) to get the controls
 * @param {boolean} [exitOnCtrlC=true] exit the program if Ctrl+C is used
 */
export function initKeyboard(exitOnCtrlC) {
	if (exitOnCtrlC === undefined) exitOnCtrlC = true

	readline.emitKeypressEvents(process.stdin)

	if (process.stdin.isTTY) process.stdin.setRawMode(true)

	if (exitOnCtrlC) {
		process.stdin.on('keypress', (_, key) => {
			if (exitOnCtrlC && key.name === 'c' && key.ctrl) {
				destroy()
				process.exit()
			}
		})
	}
}

/**
 * Execute the function when a key is pressed
 * @param {Function} f Function that will be executed, with its 1st parameter as the key
 */
export function onkey(f) {
	process.stdin.on('keypress', (_, key) => {
		f(key)
	})
}

/**
 * Draw a string at a specific point in the console
 * @param {number} x 
 * @param {number} y 
 * @param {String} str 
 */
export function drawString(x, y, str) {
	if (y >= gfxbuffer.length) return

	// On obtient la ligne précise voulue
	let line = gfxbuffer[y]
	
	// Longueur maximum possible à partir du point voulu
	const max = line.length - x
	// On supprime le restant pour éviter un affichage cassé
	// On remplace aussi les caractères correspondant à un espace par un espace classique (pour éviter les saut de ligne et autre)
	const trimmed = str.substring(0, max).replace(/\s/g, ' ')
	// On place la string voulue dans la ligne, en prenant ce qu'il y avant, puis ce qu'il y a après
	// Cela simule un "remplacement" des caractères
	line = line.substring(0, x) + trimmed.substring(0, max) + line.substring(x + trimmed.length)
	// On la remplace dans le buffer, en faisant attention de ne pas excéder la longueur déjà présente
	gfxbuffer[y] = line.substring(0, gfxbuffer[y].length)
	bufferchanged = true
}
