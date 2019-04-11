import css from './substitution-editor.scss'
import GlyphPreview from "./glyph-preview";
import DropZone from "./dropzone";
import Input from './input';
import Button from './button';
import Description from './description';

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
      <form ref={this.formRef} onSubmit={surpress(onSubmit)}>
        <div>
          <div className={css.movement}>
            {canMoveLeft ? <Button title='Move up in priority' variant='action-left' onClick={surpress(() => onSwap(idx, idx - 1))}>{'<<'}</Button> : <div/>}
            {canMoveRight ? <Button title='Move down in priority' variant='action-right' onClick={surpress(() => onSwap(idx, idx + 1))}>{'>>'}</Button> : <div/>}
          </div>
          <div>
            <DropZone onUpload={onUpload}/>
            <GlyphPreview className={css.preview} {...currentGlyph} {...meta}/>
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
            <Input
              label='Advance Width'
              type='range'
              min={0}
              max={2000}
              value={currentGlyph.advanceWidth}
              onChange={onAdvanceWidthChange}
            >
              <div>This is how far the substituted glyph will advance the cursor.</div>
            </Input>
          </div>
        </div>
        <div className={css.actions}>
          {canRemove && <Button variant='danger' onClick={surpress(onRemove)}>Remove</Button>}
          <Button type='submit' variant='success'>Submit</Button>
          <Button type='cancel' onClick={surpress(onCancel)}>Cancel</Button>
        </div>
      </form>
    )
  }
}