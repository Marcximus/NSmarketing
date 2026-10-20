"""Genererer marmor-teksturen (src/assets/images/marble.jpg) proceduralt.

Kør: python3 scripts/generate-marble.py
"""
import numpy as np
from PIL import Image, ImageFilter

W, H = 2400, 1600
rng = np.random.default_rng(7)


def value_noise(w, h, cell):
    gw, gh = w // cell + 2, h // cell + 2
    grid = rng.random((gh, gw))
    ys = np.linspace(0, h / cell, h, endpoint=False)
    xs = np.linspace(0, w / cell, w, endpoint=False)
    yi, xi = ys.astype(int), xs.astype(int)
    yf, xf = ys - yi, xs - xi
    yf = yf * yf * (3 - 2 * yf)
    xf = xf * xf * (3 - 2 * xf)
    a = grid[yi][:, xi]
    b = grid[yi][:, xi + 1]
    c = grid[yi + 1][:, xi]
    d = grid[yi + 1][:, xi + 1]
    top = a + (b - a) * xf[None, :]
    bot = c + (d - c) * xf[None, :]
    return top + (bot - top) * yf[:, None]


def fbm(w, h, base, octaves=6):
    total, amp, norm = np.zeros((h, w)), 1.0, 0.0
    cell = base
    for _ in range(octaves):
        total += amp * value_noise(w, h, max(cell, 2))
        norm += amp
        amp *= 0.5
        cell //= 2
    return total / norm


y, x = np.mgrid[0:H, 0:W].astype(float)
turb = fbm(W, H, 1024, 7)
turb2 = fbm(W, H, 512, 7)

# Grå hovedårer
v1 = np.abs(np.sin((x * 0.0016 + y * 0.0026) * 2.2 + turb * 4.2 + turb2 * 1.2))
grey = (1 - v1) ** 22 + 0.25 * (1 - v1) ** 4
# Fine sekundære årer
v2 = np.abs(np.sin((x * 0.0030 + y * 0.0012) * 2.6 + turb2 * 5.0))
fine = (1 - v2) ** 70
# Guldårer (sparsomme)
v3 = np.abs(np.sin((x * 0.0011 + y * 0.0021) * 2.0 + turb * 3.4 + 1.3))
gold = (1 - v3) ** 120

cloud = fbm(W, H, 700, 4)

base = np.array([246, 242, 236], float)
grey_c = np.array([150, 146, 142], float)
gold_c = np.array([184, 150, 96], float)

img = np.ones((H, W, 3)) * base
img -= (cloud[..., None] - 0.5) * 14
g = np.clip(grey, 0, 1)[..., None] * 0.42
img = img * (1 - g) + grey_c * g
img = img * (1 - fine[..., None] * 0.35) + grey_c * fine[..., None] * 0.35
img = img * (1 - gold[..., None] * 0.7) + gold_c * gold[..., None] * 0.7
img = np.clip(img, 0, 255).astype(np.uint8)

im = Image.fromarray(img).filter(ImageFilter.GaussianBlur(1.4))
im.save('src/assets/images/marble.jpg', quality=86, optimize=True, progressive=True)
print('saved', im.size)
