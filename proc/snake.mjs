const place_snake = { 
	X: 2,
	Y: 2
}

const DOWN = 'down'

export function pressKey(key) {
	switch (key.name) {
		case DOWN:
			place_snake.Y += 1
			break
	}
}