import React from 'react'

import clsx from 'clsx'

import { getSekaiCharacterName } from '@/utils/connectSekai'

import { colorsSekai } from '@/styles/sekai-colors'

import styles from './Character.module.scss'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'

interface CharacterProps {
  sekai: ColorsSekaiKey
  locale?: 'ja' | 'en' | 'zh-hant'
}

export const Character = ({ sekai, locale = 'ja' }: CharacterProps) => {
  const colorCode = colorsSekai[sekai]
  const optionStyle = {
    '--sekai-color': colorCode,
  }
  const getLocaleLanguage = (locale: string) => {
    if (locale === 'ja') {
      return '日本語'
    } else if (locale === 'en') {
      return 'English'
    } else if (locale === 'zh-hant') {
      return '繁體中文'
    }
    return '日本語'
  }

  const characterName = getSekaiCharacterName(sekai, locale)

  return (
    <div className={clsx(styles['sekai-character'])} style={optionStyle as React.CSSProperties}>
      <div className={clsx(styles['sekai-character-label'])}>{getLocaleLanguage(locale)}</div>
      <p className={clsx(styles['sekai-character-name'])}>{characterName}</p>
      <p className={clsx(styles['sekai-chracter-description'])}>
        You can get prsk character name
      </p>
      <p className={clsx(styles['sekai-chracter-description'])}>
        using "getSekaiCharacterName" function.
      </p>
    </div>
  )
}
