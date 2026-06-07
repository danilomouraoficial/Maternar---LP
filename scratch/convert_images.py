import os
from PIL import Image

images_to_optimize = [
    # (source_path, target_webp_path, max_width, max_height)
    ("public/img1.png", "public/img1.webp", 1200, 1200),
    ("public/img2.png", "public/img2.webp", 1200, 1200),
    ("src/assets/brand/mockup/New/home.png", "src/assets/brand/mockup/New/home.webp", 800, 800),
    ("src/assets/brand/mockup/vacina.png", "src/assets/brand/mockup/vacina.webp", 600, 1000),
    ("src/assets/brand/mockup/New/remedios.png", "src/assets/brand/mockup/New/remedios.webp", 800, 800),
    ("src/assets/brand/mockup/New/consultas.png", "src/assets/brand/mockup/New/consultas.webp", 800, 800),
    ("src/assets/brand/mockup/New/jornada.png", "src/assets/brand/mockup/New/jornada.webp", 800, 800),
    ("src/assets/brand/mockup/diario.png", "src/assets/brand/mockup/diario.webp", 600, 1000),
]

print("=== IMAGE CONVERSION & OPTIMIZATION ===")
total_original_size = 0
total_optimized_size = 0

for src, dest, max_w, max_h in images_to_optimize:
    if os.path.exists(src):
        orig_size = os.path.getsize(src)
        total_original_size += orig_size
        
        with Image.open(src) as img:
            # Calculate new dimensions keeping aspect ratio
            img.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)
            
            # Save as WebP
            img.save(dest, "WEBP", quality=85)
            
        opt_size = os.path.getsize(dest)
        total_optimized_size += opt_size
        
        reduction = (1 - opt_size / orig_size) * 100
        print(f"Optimized: {src} -> {dest}")
        print(f"  Dimensions: {img.size[0]}x{img.size[1]} (was {Image.open(src).size[0]}x{Image.open(src).size[1]})")
        print(f"  Size: {orig_size / 1024:.1f} KB -> {opt_size / 1024:.1f} KB ({reduction:.1f}% reduction)")
    else:
        print(f"Source file not found: {src}")

overall_reduction = (1 - total_optimized_size / total_original_size) * 100
print("\n=== SUMMARY ===")
print(f"Total Original Size: {total_original_size / (1024 * 1024):.2f} MB")
print(f"Total Optimized Size: {total_optimized_size / (1024 * 1024):.2f} MB")
print(f"Overall Size Reduction: {overall_reduction:.1f}%")
