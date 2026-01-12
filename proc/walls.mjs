export function isWallAt(x, y) {
	if (x <= 0) {
		return 'x_wall'
	} else if (y <= 0) {
		return 'y_wall'
	}
}

/*
[Gestion des collisions des bords du Terminal]
export function collisionSnake() {
	if (position_snake.y <= 0) {
		position_snake.y = 0
	} else if (position_snake.x <= 0) {
		position_snake.x = 0
	}
}
*/