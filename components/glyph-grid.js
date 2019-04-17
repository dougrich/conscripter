/**
 * Grid of glyphs, displaying each with the relevant substitutions
 */

import css from './glyph-grid.scss'
import GlyphPreview from './glyph-preview'
import * as cx from 'classnames'
import Button from './button';
import Typography from './typography';
import Print from './print.scss'

export default function GlyphGrid({ substitutions, meta, active, children, onSubstitutionSelect, onSubstitutionSwap }) {
  const symbols = []
  const gridcells = []
  let foundActive = false
  let hasActive = active != null

  if (substitutions.length === 0 && !active) {
    return (
      <div className={css.grid}>
        <div className={css.emptyset}>
          <Button onClick={() => onSubstitutionSelect()}>
          Click here to get started
          </Button>
        </div>
      </div>
    )
  }

  function Btn({children, isActive, onClick, className}) {
    return (
      <button className={cx(css.container, className, { [css.activecell]: isActive, [css.disabled]: hasActive })} disabled={hasActive} onClick={onClick}>
        {children}
      </button>
    )
  }

  function onDragStart(e) {
    const index = e.currentTarget.attributes['data-index']
    if (!index) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      e.dataTransfer.setData('number', parseInt(index.value))
    }
  }

  function onDragOver(e) {
    if (e.currentTarget.attributes['data-index'].value) {
      e.preventDefault()
    }
  }

  function onDrop(e) {
    const index = e.currentTarget.attributes['data-index']
    if (!index) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      const self = parseInt(index.value)
      const other = e.dataTransfer.getData('number')
      if (self !== other) {
        onSubstitutionSwap(self, other)
      }
    }
  }

  for (let i = 0; i < substitutions.length; i++) {
    const sub = substitutions[i]
    const { replace, glyph } = sub
    const key = replace.join('/')
    const isActive = active === sub
    const button = (
      <Btn isActive={isActive} onClick={() => onSubstitutionSelect(sub)}>
        <div className={css.label}>{key}</div>
        <GlyphPreview className={css.preview} showContext={false} {...glyph} {...meta}/>
      </Btn>
    )
    foundActive = foundActive || isActive
    gridcells.push({
      key,
      index: i,
      button,
      isActive
    })
  }

  gridcells.push({
    key: 'add',
    button: (<Btn className={Print.none} onClick={() => onSubstitutionSelect()}>+</Btn>),
    isActive: hasActive && !foundActive
  })

  for (const { key, index, button, isActive } of gridcells) {
    const className = cx(css.gridcell, {
      [css.inactive]: !isActive && hasActive
    })
    symbols.push(
      <div
        className={className}
        key={key}
        data-index={index}
        draggable={!hasActive && index != null}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {button}
      </div>,
      isActive && (
        <div className={css.detailsspacer} key='editor'>
          <div className={css.details}>
            {children}
          </div>
        </div>
      )
    )
  }
  
  return (
    <div className={css.grid}>
      <Typography.Descriptor className={cx(css.textcell, Print.none)}>
        High Priority
      </Typography.Descriptor>
      {symbols}
      <Typography.Descriptor className={cx(css.textcell, Print.none)}>
        Low Priority
      </Typography.Descriptor>
    </div>
  )
}