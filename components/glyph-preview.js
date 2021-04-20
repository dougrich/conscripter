import css from './glyph-preview.module.scss'
import * as cx from 'classnames'
import Typography from './typography'

export default function GlyphPreview ({
  commands,
  advanceWidth,
  unitsPerEm,
  descender,
  isDiacritic,
  className,
  showContext = true
}) {
  if (!unitsPerEm) return null
  advanceWidth = Math.max(advanceWidth, 100)
  const widthEm = advanceWidth / unitsPerEm
  let transform = 'translate(-50%, 0%)'
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
      default:
        // this is an unrecognized path command; it happens
        return ''
    }
  }).join(' ')
  const baseline = (unitsPerEm + descender) / unitsPerEm
  // these two depend on the font
  const topline = '0.4em'
  const textCorrection = '0em'
  return (
    <div className={cx(css.container, className)}>
      <div className={css.subcontainer} style={{ transform, transformOrigin: 'bottom center' }}>
        {showContext && [
          <div className={css.rule} style={{ top: baseline + 'em', background: 'magenta' }} key='base' />,
          <div className={css.rule} style={{ top: topline, background: 'lime' }} key='top' />
        ]}
        <div className={css.textcontainer}>
          {showContext && (
            <span className={cx(css.faded, Typography.BaseDemofont)} style={{ textAlign: 'right', direction: 'rtl', paddingTop: textCorrection }}>abcdef</span>
          )}
          <svg className={css.glyph} height='1em' width={`${widthEm}em`} viewBox={`0 0 ${advanceWidth} ${unitsPerEm}`} preserveAspectRatio='xMinYMin slice'>
            {isDiacritic && (
              <circle r={200} cx={advanceWidth / 2} cy={620} fill='transparent' stroke='#2b303a' strokeWidth={20} strokeDasharray='35 35' />
            )}
            <path d={path} fill='black' />
          </svg>
          {showContext && (
            <span className={cx(css.faded, Typography.BaseDemofont)} style={{ textAlign: 'left', paddingTop: textCorrection }}>ghijk</span>
          )}
        </div>
      </div>
      <div className={css.edges} />
    </div>
  )
}
