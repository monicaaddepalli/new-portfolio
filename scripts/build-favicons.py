#!/usr/bin/env python3
from pathlib import Path
from PIL import Image
import shutil
import sys

SRC_LIGHT = Path('/tmp/fig-light.png')
SRC_DARK = Path('/tmp/fig-dark.png')
PUBLIC = Path(__file__).resolve().parent.parent / 'public'


def strip_gray_plate(im: Image.Image) -> Image.Image:
    im = im.convert('RGBA')
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            spread = max(r, g, b) - min(r, g, b)
            lum = (r + g + b) / 3
            if spread < 20 and 40 <= lum <= 110:
                px[x, y] = (0, 0, 0, 0)
                continue
            if spread < 15 and 15 <= lum < 40:
                px[x, y] = (0, 0, 0, 0)
                continue
            if lum < 20:
                px[x, y] = (0, 0, 0, 255)
            elif lum > 200:
                px[x, y] = (255, 255, 255, 255)
    return im


def to_favicon(src: Path, dest: Path, size: int = 192) -> None:
    glyph = strip_gray_plate(Image.open(src))
    bbox = glyph.getbbox()
    if not bbox:
        raise ValueError(f'No visible glyph in {src}')
    glyph = glyph.crop(bbox)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    scale = min(size / glyph.width, size / glyph.height)
    nw = max(1, int(glyph.width * scale))
    nh = max(1, int(glyph.height * scale))
    resized = glyph.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    canvas.save(dest, 'PNG', optimize=True)


def main() -> None:
    for src in (SRC_LIGHT, SRC_DARK):
        if not src.is_file():
            print(f'Missing {src}', file=sys.stderr)
            sys.exit(1)
    to_favicon(SRC_LIGHT, PUBLIC / 'favicon-light.png')
    to_favicon(SRC_DARK, PUBLIC / 'favicon-dark.png')
    shutil.copy(PUBLIC / 'favicon-light.png', PUBLIC / 'favicon.png')
    to_favicon(SRC_DARK, PUBLIC / 'apple-touch-icon.png', size=180)
    print('Favicons written (end-to-end, transparent).')


if __name__ == '__main__':
    main()
