const CRYSTAL_SIZE = 150
const SIDES = 6

const COLS = 3
const ROWS = 4
const GAP = CRYSTAL_SIZE * .2

const PALETTE = []

function setup() {
	createCanvas(COLS * (CRYSTAL_SIZE + GAP) + GAP, ROWS * (CRYSTAL_SIZE + GAP) + GAP)

	PALETTE.push(color(255, 198, 71))
	PALETTE.push(color(0, 40, 94))

	noLoop()
	angleMode(DEGREES)
	rectMode(RADIUS)
}

function draw() {

	for (let i = 0; i < COLS * ROWS; i++) {
		const x = GAP + (CRYSTAL_SIZE + GAP) / 2 + (i % COLS) * (CRYSTAL_SIZE + GAP)
		const y = GAP + (CRYSTAL_SIZE + GAP) / 2 + int(i / COLS) * (CRYSTAL_SIZE + GAP)
		new Crystal(x, y).render()
	}
}
