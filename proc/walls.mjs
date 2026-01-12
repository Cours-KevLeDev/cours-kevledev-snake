import { getScreenWidth, getScreenHeight } from "../engine/terminal-engine.mjs"

export function isWallAt(x, y) {
	if (x <= 0) {
		return 'x_wall_left'
	} else if (x >= getScreenWidth()) {
		return 'x_wall_right'
	} else if (y <= 0) {
		return 'y_wall_up'
	} else if (y >= getScreenHeight()) {
		return 'y_wall_down'
	}
}