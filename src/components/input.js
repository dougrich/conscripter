import css from './input.scss'
import * as cx from 'classnames'
import React from 'react'
import Label from './label';

export default class Input extends React.PureComponent {
  render() {
    const {
      className,
      label,
      value,
      type,
      min,
      max,
      onChange,
      placeholder
    } = this.props
    return (
      <div className={cx(css.container, className)}>
        <Label>{label}</Label>
        <input
          className={css.input}
          value={value}
          onChange={onChange}
          type={type}
          min={min}
          max={max}
        />
        <span className={css.placeholder}>{placeholder}</span>
      </div>
    )
  }
}