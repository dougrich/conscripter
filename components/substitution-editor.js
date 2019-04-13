import css from './substitution-editor.scss'
import GlyphPreview from "./glyph-preview";
import DropZone from "./dropzone";
import Input from './input';
import Button, { ButtonBar } from './button';
import Description from './description';
import Typography from './typography';
import Slider from './slider';

function surpress(handler) {
  return e => {
    e.preventDefault()
    e.stopPropagation()
    handler(e)
  }
}

export default class SubstitutionEditor extends React.PureComponent {
  render() {
    const {
      active,
      warnings,
      currentGlyph,
      currentReplace,
      meta,
      canRemove,
      canMoveLeft,
      canMoveRight,
      idx,
      onUpload,
      onReplaceChange,
      onAdvanceWidthChange,
      onSubmit,
      onRemove,
      onCancel,
      onSwap
    } = this.props

    if (!active) {
      return null
    }
  
    return (
      <form ref={this.formRef} className={css.container} onSubmit={surpress(onSubmit)}>
        <div className={css.movement}>
          {canMoveLeft ? <Button title='Move up in priority' variant='action' onClick={surpress(() => onSwap(idx, idx - 1))}><Typography.Icon>{'<<'}</Typography.Icon></Button> : <div/>}
          {canMoveRight ? <Button title='Move down in priority' variant='action' onClick={surpress(() => onSwap(idx, idx + 1))}><Typography.Icon>{'<<'}</Typography.Icon></Button> : <div/>}
        </div>
        <div>
          <DropZone onUpload={onUpload}/>
          <GlyphPreview className={css.preview} {...currentGlyph} {...meta}/>
          {warnings && warnings.length ? (
            <Description variant='danger'>
              <div>Warning!</div>
              <ul>
                {warnings.map((x, i) => (
                  <li key={i}>{x.message}</li>
                ))}
              </ul>
            </Description>
          ) : null}
          <Description>
            Doesn't look like what you expected? Raise an issue on <a href="https://github.com/dougrich/conscripter/issues/new" target="_blank">Github</a> with your SVG to help improve this app.
          </Description>
        </div>
        <div>
          <Input
            label='Replace'
            required
            pattern='^[a-zA-Z0-9\.\-_]+$'
            value={currentReplace}
            onChange={onReplaceChange}
          >
            <div>This is case sensitive string that will be replaced with this symbol.</div>
            <div>It must be alphanumeric (A-Z, 0-9) or '.', '-', or '_'.</div>
          </Input>
          <Slider
            label='Advance Width'
            min={0}
            max={2000}
            format={v => {
              return (v / meta.unitsPerEm).toFixed(3) + ' em'
            }}
            value={currentGlyph.advanceWidth}
            onChange={onAdvanceWidthChange}
          />
        </div>
        <ButtonBar>
          {canRemove && <Button variant='danger' onClick={surpress(onRemove)}>Remove</Button>}
          <Button type='submit' variant='success'>Submit</Button>
          <Button type='cancel' onClick={surpress(onCancel)}>Cancel</Button>
        </ButtonBar>
      </form>
    )
  }
}