import os

# ✅ スクリプトの絶対パスを取得
script_dir = os.path.dirname(os.path.abspath(__file__))

components_dir = os.path.join(script_dir, "../src/components")
index_file = os.path.join(script_dir, "../src/index.ts")

global_styles_path = "@/styles/globals.scss"

# components ディレクトリの存在チェック
if not os.path.exists(components_dir):
    print(f"❌ Error: Not found!! no such a components directory: {components_dir}")
    exit(1)

components = []

# 各フォルダ内のすべての .tsx ファイルを取得
for folder in os.listdir(components_dir):
    folder_path = os.path.join(components_dir, folder)
    if os.path.isdir(folder_path):  # フォルダであることを確認
        for file in os.listdir(folder_path):
            if file.endswith(".tsx"):  # .tsx ファイルのみ対象
                file_name = os.path.splitext(file)[0]  # 拡張子を除いたファイル名
                components.append((folder, file_name))  # (フォルダ名, ファイル名) のタプルで保存

# インポート文を生成
exports_components = "\n".join(
    [f"export {{ default as {file_name} }} from './components/{folder}/{file_name}'"
     for folder, file_name in components]
)

index_content = f"import '{global_styles_path}'\n\n{exports_components}\n"

# index.ts に書き込み
with open(index_file, "w", encoding="utf-8") as f:
    f.write(index_content)

print(f"✅ Completed!! generate `index.ts`\n📁 output file path: {index_file}")
