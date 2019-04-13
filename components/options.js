import css from './options.scss'

import Label from "./label";
import { Toggle } from './slider';

function Option({
  field,
  value,
  label,
  onChange
}) {
  return (
    <Toggle label={label} value={value} onChange={onChange.bind(null, field)}/>
  )
}

export default function Options({
  value,
  optionLabels = {},
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
          <Option onChange={onChange} value={value[o]} label={optionLabels[o] || o} key={o} field={o}/>
        ))}
      </div>
    </div>
  )
}