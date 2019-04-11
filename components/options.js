import css from './options.scss'

import Label from "./label";

function Option({
  field,
  value,
  label,
  onChange
}) {
  return (
    <span>
      <input type='checkbox' checked={value} onChange={onChange} id={field}/>
      <label className={css.label} htmlFor={field}>{label}</label>
    </span>
  )
}

export default function Options({
  value,
  optionLabels = {},
  onChange: propsOnChange,
  label
}) {
  const options = Object.keys(value)
  const onChange = ({ currentTarget: { checked, id }}) => {
    
    propsOnChange({
      ...value,
      [id]: checked
    })
  }

  return (
    <div>
      <Label>{label}</Label>
      <div>
        {options.map((o) => (
          <Option onChange={onChange} value={value[o]} label={optionLabels[o] || o} key={o} field={o}/>
        ))}
      </div>
    </div>
  )
}