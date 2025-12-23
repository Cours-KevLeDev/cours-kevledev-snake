const position_snake = { 
	x: 2,
	y: 2
}

const PRESS_DOWN = 'down'

export function pressKey(key) {
	if (key.name === PRESS_DOWN) {
		position_snake.y += 1
	}
}