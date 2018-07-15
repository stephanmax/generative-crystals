const SIDES = 6

const CRYSTAL_SIZE_MAX = 150
const GAP_MIN = 10

let CRYSTAL_SIZE_ACTUAL

const PALETTE = []

function setup() {
	createCanvas(windowWidth, windowHeight)

	PALETTE.push(color(255, 198, 71))
	PALETTE.push(color(0, 40, 94))

	noLoop()
	angleMode(DEGREES)
	rectMode(RADIUS)
}

function draw() {
	CRYSTAL_SIZE_ACTUAL = min(CRYSTAL_SIZE_MAX, min(windowWidth, windowHeight) - 2 * GAP_MIN)
	
	const COLS = int((windowWidth - GAP_MIN) / (CRYSTAL_SIZE_ACTUAL + GAP_MIN))
	const ROWS = int((windowHeight - GAP_MIN) / (CRYSTAL_SIZE_ACTUAL + GAP_MIN))

	const GAP_HOR = (windowWidth - COLS * CRYSTAL_SIZE_ACTUAL) / (COLS + 1)
	const GAP_VER = (windowHeight - ROWS * CRYSTAL_SIZE_ACTUAL) / (ROWS + 1)
	
	for (let i = 0; i < COLS * ROWS; i++) {
		const x = GAP_HOR + CRYSTAL_SIZE_ACTUAL / 2 + (i % COLS) * (CRYSTAL_SIZE_ACTUAL + GAP_HOR)
		const y = GAP_VER + CRYSTAL_SIZE_ACTUAL / 2 + int(i / COLS) * (CRYSTAL_SIZE_ACTUAL + GAP_VER)
		new Crystal(x, y).render()
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
