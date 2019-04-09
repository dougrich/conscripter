import css from './substitution-editor.scss'
import GlyphPreview from "./glyph-preview";
import DropZone from "./dropzone";
import Input from './input';
import Button from './button';

export default function SubstitutionEditor({
  active,
  currentGlyph,
  currentReplace,
  meta,
  onUpload,
  onReplaceChange,
  onAdvanceWidthChange,
  onSubmit,
  onCancel
}) {
  if (!active) {
    return null
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      onSubmit()
    }}>
      <DropZone onUpload={onUpload}/>
      <GlyphPreview className={css.preview} {...currentGlyph} {...meta}/>
      <Input label='Replace' value={currentReplace} onChange={onReplaceChange}/>
      <Input label='Advance Width' type='range' min={0} max={2000} value={currentGlyph.advanceWidth} onChange={onAdvanceWidthChange}/>
      <div className={css.actions}>
        <Button variant='danger'>Remove</Button>
        <Button type='submit' variant='success'>Submit</Button>
        <Button type='cancel' onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  )
}