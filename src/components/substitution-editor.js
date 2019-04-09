import css from './substitution-editor.scss'
import GlyphPreview from "./glyph-preview";
import DropZone from "./dropzone";
import Input from './input';
import Button from './button';

function surpress(handler) {
  return e => {
    e.preventDefault()
    e.stopPropagation()
    handler(e)
  }
}

export default function SubstitutionEditor({
  active,
  currentGlyph,
  currentReplace,
  meta,
  canRemove,
  onUpload,
  onReplaceChange,
  onAdvanceWidthChange,
  onSubmit,
  onRemove,
  onCancel
}) {
  if (!active) {
    return null
  }

  return (
    <form onSubmit={surpress(onSubmit)}>
      <div>
        <div>
          <DropZone onUpload={onUpload}/>
          <GlyphPreview className={css.preview} {...currentGlyph} {...meta}/>
        </div>
        <div>
          <Input
            label='Replace'
            value={currentReplace}
            onChange={onReplaceChange}
          >
            <div>This is case sensitive string that will be replaced with this symbol.</div>
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