export function polygon(n, x, y, r, angleOffset = 0) {
  const angle = 360 / n;
  beginShape();
  for (let i = 0; i < n; i++) {
    var nextX = x + cos(i * angle + angleOffset) * r;
    var nextY = y + sin(i * angle + angleOffset) * r;
    vertex(nextX, nextY);
  }
  endShape(CLOSE);
}

export function favicon(density, crystalSize, gapHor, gapVer) {
  const STROKE_MAX = 2;
  
  const clippingX = (gapHor - STROKE_MAX) * density;
  const clippingY = (gapVer - STROKE_MAX) * density;
  const clippingSize = (crystalSize + 2 * STROKE_MAX) * density;

  const firstCrystal = document.querySelector('canvas').getContext('2d').getImageData(clippingX, clippingY, clippingSize, clippingSize);
	const faviconCnv = document.createElement('canvas');
	const faviconCtx = faviconCnv.getContext('2d');

	faviconCnv.width = clippingSize;
	faviconCnv.height = clippingSize;

	faviconCtx.putImageData(firstCrystal, 0, 0);

	const faviconLnk = document.querySelector('link');
	faviconLnk.href = faviconCnv.toDataURL();
}
