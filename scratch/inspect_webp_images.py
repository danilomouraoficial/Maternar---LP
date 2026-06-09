import os
from PIL import Image

image_paths = [
    "public/img1.webp",
    "public/img2.webp",
    "src/assets/brand/mockup/New/home.webp",
    "src/assets/brand/mockup/vacina.webp",
    "src/assets/brand/mockup/New/remedios.webp",
    "src/assets/brand/mockup/New/consultas.webp",
    "src/assets/brand/mockup/New/jornada.webp",
    "src/assets/brand/mockup/diario.webp",
]

print("=== WEBP IMAGE INSPECTION ===")
for path in image_paths:
    if os.path.exists(path):
        size_bytes = os.path.getsize(path)
        size_kb = size_bytes / 1024
        with Image.open(path) as img:
            width, height = img.size
            print(f"{path}:")
            print(f"  Dimensions: {width}x{height}")
            print(f"  Size: {size_kb:.2f} KB ({size_bytes} bytes)")
    else:
        print(f"File not found: {path}")
