export let game_is_loop

export function initGame(infiniteMove) {
	if (infiniteMove) {
		game_is_loop = true
	}
}