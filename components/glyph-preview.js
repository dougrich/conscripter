import css from './glyph-preview.scss'
import * as cx from 'classnames'

export default function GlyphPreview({ commands, advanceWidth, unitsPerEm, descender, className }) {
  advanceWidth = Math.max(advanceWidth, 100)
  const widthEm = advanceWidth / unitsPerEm
  let transform = `translate(-50%, 0%)`
  if (widthEm > 1) {
    transform += ` scale(${(1 / widthEm).toFixed(2)})`
  }
  const path = commands.map(c => {
    switch (c.type) {
      case 'M':
      case 'L':
        return `${c.type} ${c.x} ${unitsPerEm - c.y + descender}`
      case 'Z':
        return `${c.type}`
    }
  }).join(' ')
  const baseline = (unitsPerEm + descender) / unitsPerEm
  // these two depend on the font
  const topline = '0.4em'
  const textCorrection = '0.12em'
  return (
    <div className={cx(css.container, className)}>
      <div className={css.subcontainer} style={{ transform, transformOrigin: 'bottom center' }}>
        <div className={css.rule} style={{ top: baseline + 'em', background: 'magenta' }}/>
        <div className={css.rule} style={{ top: topline, background: 'lime' }}/>
        <div className={css.textcontainer}>
          <span className={css.faded} style={{ textAlign: 'right', direction: 'rtl', paddingTop: textCorrection }}>abcdef</span>
          <svg className={css.glyph} height="1em" width={`${widthEm}em`} viewBox={`0 0 ${advanceWidth} ${unitsPerEm}`} preserveAspectRatio='xMinYMin slice'>
            <path d={path} fill="red"/>
          </svg>
          <span className={css.faded} style={{ textAlign: 'left', paddingTop: textCorrection }}>ghijk</span>
        </div>
      </div>
      <div className={css.edges}/>
    </div>
  )
}