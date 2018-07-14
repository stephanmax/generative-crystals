const CRYSTAL_SIZE = 500
const SIDES = 6
const PALETTE = []

const layers = []

function setup() {
	createCanvas(CRYSTAL_SIZE + 30, CRYSTAL_SIZE + 30)

	PALETTE.push(color(255, 198, 71))
	PALETTE.push(color(0, 40, 94))

	noLoop()
	angleMode(DEGREES)
	rectMode(RADIUS)
}

function draw() {
	const test = new Crystal()
	test.render()
}
