# untitled

きっと...

## 💫 *What we provide* 💫

- プロセカキャラやユニットのカラーコードTsファイル(*.js,*.tsファイル内用)
- プロセカキャラやユニットのカラーコードCSSファイル(全体共通CSSカスタムプロパティ用)
- Web コンポーネント(Buttonなど)
- SEKAIテーマプロバイダー

## 🍀 *Installation* 🍀

```bash
npm install github:Narumikr/untitled
```

yarnを使う場合：
```bash
yarn add github:Narumikr/untitled
```

## 💻 *How to use* 💻

### colorsSekai

colorsSekaiをimportしてもらうことで、TsJsファイル内でカラーコードを利用することができる

カラーコードはhex形式(#FFFFFF)で提供される

RGBAなどで使用したい場合は`convertHexToRgb`,`convertHexToRgba`のコンバーター関数も用意があるので変換して使ってください

#### *.tsx

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

#### _app.tsx

```ts
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import '@naru/untitled-library/color/sekai-colors.css'
...
```

#### *.module.scss

```css
.container {
  background-color: var(--sekai-miku)
}
```

### Webコンポーネント

SEKAIカラーでデザインされたButtonなどを始めWebコンポーネントも提供

提供コンポーネントは下記のStorybookを参照してください

[Storybook](https://untitled-theta-sage.vercel.app/)

#### *.tsx

```ts
import { BasicButton, COLORS_SEKAI_KEYS } from '@naru/untitled-library'

export const TopPage = () => {
  ...

  return (
    <BasicButton sekai={COLORS_SEKAI_KEYS.Nightcode}>
      25時、ナイトコードで。
    </BasicButton>
  )
}
```

### YourSekaiProvider

アプリをラップするProviderの提供

カスタムテーマとして、セカイの持ち主を指定してあげることでアプリ全体でそのカラーが反映される

上述したWebコンポーネントはPropsとして、sekaiの指定がない場合はProviderの値を参照するようになっている

※Providerでのラップは必須ではないので、Webコンポーネント単体でも使えます

_app.tsx

```ts
import {
  COLORS_SEKAI_KEYS,
  LIGHT_MODE,
  YourSekaiProvider,
  createSekai
} from '@naru/untitled-library'

const App = ({ Component, pageProps }: AppProps) => {

  const theme = createSekai({
    palette: {
      sekai: COLORS_SEKAI_KEYS.Miku,
      mode: LIGHT_MODE
    }
  })

  return (
    <YourSekaiProvider sekaiTheme={theme}>
      <Component {...pageProps} />
    </YourSekaiProvider>
  )
}
```

Providerに渡すthemeは`createSekai`関数を用いて生成したオブジェクトを渡してください

createSekaiの引数に渡すオブジェクトの型は下記となっており、paletteのsekaiは必須ですが、それ以外は任意で大丈夫です

デフォルト値はmodeが`light(ライトモード)`で、fontFamilyは`Montserrat, sans-serif`です

```ts
export type SekaiThemeProps = {
  palette: {
    sekai: ColorsSekaiKey
    mode?: PaletteMode
  }
  typography?: {
    fontFamily?: string
  }
}
```