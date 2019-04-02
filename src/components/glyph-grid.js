/**
 * Grid of glyphs, displaying each with the relevant substitutions
 */

import css from './glyph-grid.scss'
import GlyphPreview from './glyph-preview'
import * as cx from 'classnames'

export default function GlyphGrid({ substitutions, meta, active, children }) {
  const symbols = []
  const gridcells = []
  let foundActive = false

  function Btn({children, isActive}) {
    return (
      <button className={cx(css.container, { [css.activecell]: isActive })} disabled={!!active}>
        {children}
      </button>
    )
  }

  for (const sub of substitutions) {
    const { replace, glyph } = sub
    const key = replace.join('/')
    const isActive = active === sub
    const button = (
      <Btn isActive={isActive}>
        <div className={css.label}>{key}</div>
        <GlyphPreview className={css.preview} {...glyph} {...meta}/>
      </Btn>
    )
    foundActive = foundActive || isActive
    gridcells.push({
      key,
      button,
      isActive
    })
  }

  gridcells.push({
    key: 'add',
    button: (<Btn>+</Btn>),
    isActive: !!active && !foundActive
  })

  for (const { key, button, isActive } of gridcells) {
    const className = cx(css.gridcell, {
      [css.inactive]: !isActive || !active
    })
    symbols.push(
      <div className={className} key={key}>
        {button}
        {isActive && (
          <div className={css.detailsspacer}>
            <div className={css.details}>
              {children}
            </div>
          </div>
        )}
      </div>
    )
  }
  
  return (
    <div className={css.grid}>
      {symbols}
    </div>
  )
}