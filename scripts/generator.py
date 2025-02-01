import os

# ✅ get scrippt abosolute path
script_dir = os.path.dirname(os.path.abspath(__file__))

components_dir = os.path.join(script_dir, "../src/components")
index_file = os.path.join(script_dir, "../src/index.ts")

global_styles_path = "@/styles/globals.scss"

# pick up .tsx file names
if not os.path.exists(components_dir):
    print(f"❌ Error: Not found!! no such a components directory: {components_dir}")
    exit(1)

components = [
    f.replace(".tsx", "")
    for f in os.listdir(components_dir)
    if f.endswith(".tsx")
]

# generate import components text
exports_components = "\n".join(
    [f"export {{ default as {name} }} from './components/{name}'" for name in components]
)

index_content = f"import '{global_styles_path}'\n\n{exports_components}\n"

# writing to index.ts
with open(index_file, "w", encoding="utf-8") as f:
    f.write(index_content)

print(f"✅ Completed!! generate `index.ts`\n📁 output file path: {index_file}")
