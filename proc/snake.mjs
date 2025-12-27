const position_snake = { 
	x: 2,
	y: 2
}

const PRESS_DOWN = 'down'

export function xySnake() {
	return position_snake
}

export function pressDirection(key) {
	if (key.name === PRESS_DOWN) {
		position_snake.y += 1
	}
}