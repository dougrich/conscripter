import css from './options.module.scss'

import Label from "./label";
import { Toggle } from './slider';

function Option({
  field,
  value,
  disabled,
  label,
  onChange
}) {
  return (
    <Toggle label={label} disabled={disabled} value={value} onChange={onChange.bind(null, field)}/>
  )
}

export default function Options({
  value,
  optionLabels = {},
  lock = {},
  onChange: propsOnChange,
  label
}) {
  const options = Object.keys(value)
  const onChange = (field, checked) => {
    
    propsOnChange({
      ...value,
      [field]: checked
    })
  }

  return (
    <div>
      <Label>{label}</Label>
      <div className={css.optionslist}>
        {options.map((o) => (
          <Option onChange={onChange} value={lock[o] != null ? lock[o] : value[o]} disabled={lock[o] != null} label={optionLabels[o] || o} key={o} field={o}/>
        ))}
      </div>
    </div>
  )
}