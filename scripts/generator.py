import os

# ✅ get the current directory path
script_dir = os.path.dirname(os.path.abspath(__file__))

components_dir = os.path.join(script_dir, "../src/components")
index_file = os.path.join(script_dir, "../src/index.ts")
sekai_colors_path = os.path.join(script_dir, "../src/styles/sekai-colors.ts")


# check components directory exists
if not os.path.exists(components_dir):
    print(f"❌ Error: Not found!! no such a components directory: {components_dir}")
    exit(1)

components = []

# read all .tsx files in the components directory
for folder in os.listdir(components_dir):
    folder_path = os.path.join(components_dir, folder)
    if os.path.isdir(folder_path):
        for file in os.listdir(folder_path):
            if file.endswith(".tsx"):
                file_name = os.path.splitext(file)[0]
                components.append((folder, file_name))

# generate import statements for each components
exports_components = "\n".join(
    [f"export {{ default as {file_name} }} from './components/{folder}/{file_name}'\nexport type {{ {file_name}Props }} from './components/{folder}/{file_name}'\n"
     for folder, file_name in components]
)

exports_styles = f"import {{ colorsSekai }} from './styles/sekai-colors'\nexport {{ colorsSekai }}\n\n{exports_components}\n"

# write to index.ts
with open(index_file, "w", encoding="utf-8") as f:
    f.write(exports_styles)

print(f"✅ Completed!! generate `index.ts`\n📁 output file path: {index_file}")