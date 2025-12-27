import { drawString } from "../engine/terminal-engine.mjs"
import { xySnake } from "../proc/snake.mjs"

export function drawSnake() {
	drawString(xySnake().x,xySnake().y,'¥')
}