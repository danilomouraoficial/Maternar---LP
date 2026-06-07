import os
from PIL import Image

image_paths = [
    "public/img1.png",
    "public/img2.png",
    "src/assets/brand/mockup/New/home.png",
    "src/assets/brand/mockup/vacina.png",
    "src/assets/brand/mockup/New/remedios.png",
    "src/assets/brand/mockup/New/consultas.png",
    "src/assets/brand/mockup/New/jornada.png",
    "src/assets/brand/mockup/diario.png",
]

print("=== IMAGE INSPECTION ===")
for path in image_paths:
    if os.path.exists(path):
        size_bytes = os.path.getsize(path)
        size_mb = size_bytes / (1024 * 1024)
        with Image.open(path) as img:
            width, height = img.size
            format_ = img.format
            print(f"{path}:")
            print(f"  Format: {format_}")
            print(f"  Dimensions: {width}x{height}")
            print(f"  Size: {size_mb:.2f} MB ({size_bytes} bytes)")
    else:
        print(f"File not found: {path}")
