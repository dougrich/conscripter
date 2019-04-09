import css from './input.scss'
import * as cx from 'classnames'
import React from 'react'
import Label from './label';

export default class Input extends React.PureComponent {
  render() {
    const {
      className,
      label,
      children,
      value,
      type,
      min,
      max,
      onChange
    } = this.props

    return (
      <div className={cx(css.container, className)}>
        <Label>
          {label}
        </Label>
        <input
          className={css.input}
          value={value}
          onChange={onChange}
          type={type}
          min={min}
          max={max}
        />
        {children && (
          <div className={css.description}>
            {children}
          </div>
        )}
      </div>
    )
  }
}