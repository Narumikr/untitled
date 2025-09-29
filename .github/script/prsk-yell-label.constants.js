export const prskCharacter = {
  1: { name: '星乃 一歌', color: '#33aaee', comment: '{prAuthor}' },
  2: { name: '天馬 咲希', color: '#ffc800', comment: '{prAuthor}' },
  3: { name: '望月 穂波', color: '#ee6666', comment: '{prAuthor}' },
  4: { name: '日野森 志歩', color: '#bbdd22', comment: '{prAuthor}' },
  5: { name: '花里 みのり', color: '#ffc096', comment: '{prAuthor}' },
  6: { name: '桐谷 遥', color: '#99ccff', comment: '{prAuthor}' },
  7: { name: '桃井 愛莉', color: '#ffaacc', comment: '{prAuthor}' },
  8: { name: '日野森 雫', color: '#6be6cd', comment: '{prAuthor}' },
  9: { name: '小豆沢 こはね', color: '#ff6699', comment: '{prAuthor}' },
  10: { name: '白石 杏', color: '#00bbdd', comment: '{prAuthor}' },
  11: { name: '東雲 彰人', color: '#ff7722', comment: '{prAuthor}' },
  12: { name: '青柳 冬弥', color: '#0077dd', comment: '{prAuthor}' },
  13: { name: '天馬 司', color: '#ffbb00', comment: '{prAuthor}' },
  14: { name: '鳳 えむ', color: '#ff66bb', comment: '{prAuthor}' },
  15: { name: '草薙 寧々', color: '#33dd99', comment: '{prAuthor}' },
  16: { name: '神代 類', color: '#bb88ee', comment: '{prAuthor}' },
  17: { name: '宵崎 奏', color: '#bb6688', comment: '{prAuthor}' },
  18: { name: '朝比奈 まふゆ', color: '#8888cc', comment: '{prAuthor}' },
  19: { name: '東雲 絵名', color: '#ccaa88', comment: '{prAuthor}' },
  20: { name: '暁山 瑞希', color: '#ddaacc', comment: '{prAuthor}' },
}

export const vocaloidCharacter = {
  1: { name: '初音ミク', color: '#33ccba', comment: '{prAuthor}' },
  2: { name: '鏡音リン', color: '#ffcc10', comment: '{prAuthor}' },
  3: { name: '鏡音レン', color: '#feee10', comment: '{prAuthor}' },
  4: { name: '巡音ルカ', color: '#ffbbcc', comment: '{prAuthor}' },
  5: { name: 'MEIKO', color: '#dd4544', comment: '{prAuthor}' },
  6: { name: 'KAITO', color: '#3367cc', comment: '{prAuthor}' },
}

export const collaborationScenarios = [
  {
    title: '🎵 セカイでの出会い',
    story:
      '{main}がセカイで練習していると、突然{guest}が現れた！\n\n「一緒に歌いませんか？」\n\n二人の歌声が重なり合い、素敵なハーモニーが生まれる！',
  },
  {
    title: '✨ ライブコラボ',
    story:
      '{main}がステージに立つと、予想外のゲストが...{guest}だ！\n\n「サプライズゲストです！」\n\nオーディエンスは大熱狂！',
  },
  {
    title: '🎤 デュエットセッション',
    story:
      '{main}が新曲を作っていると、{guest}が興味津々で近づいてきた！\n\n「面白そう！私も参加していい？」\n\n即興のデュエットセッションが始まる！',
  },
  {
    title: '🌟 偶然の共演',
    story:
      'スタジオで{main}が練習していると、隣のブースから聞き覚えのある声が...{guest}だった！\n\n「こんなところで会うなんて！」\n\n偶然が生んだ奇跡のコラボ！',
  },
  {
    title: '💫 セカイの導き!',
    story:
      '{main}の想いに応えて、セカイが{guest}を呼び寄せた！\n\n「君の力になりたくて来たんだ」\n\nセカイが繋いだ特別な絆！',
  },
]

export function replaceTemplate(template, replacements) {
  let result = template
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(`{${key}}`, 'g'), value)
  }
  return result
}
