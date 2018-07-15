import 'p5'

import Crystal from './Crystal.js'
import { favicon } from './util.js'

const CRYSTAL_SIZE_MAX = 150
const GAP_MIN = 10

window.setup = () => {
	createCanvas(windowWidth, windowHeight)

	noLoop()
	angleMode(DEGREES)
	rectMode(RADIUS)
}

window.draw = () => {
	const crystalSize = min(CRYSTAL_SIZE_MAX, min(windowWidth, windowHeight) - 2 * GAP_MIN)
	
	const cols = int((windowWidth - GAP_MIN) / (crystalSize + GAP_MIN))
	const rows = int((windowHeight - GAP_MIN) / (crystalSize + GAP_MIN))

	const gapHor = (windowWidth - cols * crystalSize) / (cols + 1)
	const gapVer = (windowHeight - rows * crystalSize) / (rows + 1)
	
	for (let i = 0; i < cols * rows; i++) {
		const x = gapHor + crystalSize / 2 + (i % cols) * (crystalSize + gapHor)
		const y = gapVer + crystalSize / 2 + int(i / cols) * (crystalSize + gapVer)
		
		new Crystal(x, y, crystalSize).render()
	}

	favicon(displayDensity(), crystalSize, gapHor, gapVer)
}

window.windowResized = () => {
	resizeCanvas(windowWidth, windowHeight)
}
