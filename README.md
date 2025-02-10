# untitled

きっと...

## ■ *What we provide*

- Web コンポーネント(Buttonなど)
- プロセカキャラやユニットのカラーコード(*.js,*.tsファイル内用)
- プロセカキャラやユニットのカラーコード(全体共通CSSカスタムプロパティ用)

## ■ *How to use*

### colorsSekai

colorsSekaiをimportしてもらうことで、TsJsファイル内でカラーコードを利用することができる

サンプル例

#### index.tsx

```ts
import { colorsSekai } from '@naru/untitled-library'

export const TopPage = () => {
  ...
  
  return (
    <div className={styles.container}>
      <p style={{ color: colorsSekai.Miku }}>Miku</p>
    </div>
  )
}
```

### sekai-colors.css

ルートコンポーネントにimportすることでグローバルなカスタムプロパティとして利用することができる

サンプル例

#### _app.tsx

```ts
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import '@naru/untitled-library/sekai-colors.css' 
...
```

#### *.module.scss

```css
.container {
  background-color: var(--sekai-miku)
}
```