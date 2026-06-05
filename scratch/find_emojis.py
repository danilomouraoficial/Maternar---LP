import os
import re

# Correct unicode emoji pattern using \U for 32-bit codepoints
emoji_pattern = re.compile(
    r'[\u2600-\u27BF]|' # misc symbols, dingbats
    r'[\U0001F300-\U0001F5FF]|' # misc symbols and pictographs
    r'[\U0001F600-\U0001F64F]|' # emoticons
    r'[\U0001F680-\U0001F6FF]|' # transport and map symbols
    r'[\U0001F900-\U0001F9FF]|' # supplemental symbols and pictographs
    r'[\U0001F1E0-\U0001F1FF]'  # flags
)

src_dir = r"c:\Users\Danilo Moura\Documents\Projetos\Apps\Maternar\LP Maternar\src"
output_file = r"c:\Users\Danilo Moura\Documents\Projetos\Apps\Maternar\LP Maternar\scratch\emojis_found.txt"

results = []
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                for i, line in enumerate(lines):
                    matches = emoji_pattern.findall(line)
                    if matches:
                        results.append(f"File: {file}, Line: {i+1}, Emojis: {matches}, Content: {line.strip()}")

with open(output_file, 'w', encoding='utf-8') as out:
    for res in results:
        out.write(res + "\n")

print(f"Done! Found {len(results)} occurrences. Results written to {output_file}")
