import css from './input.scss'
import * as cx from 'classnames'
import React from 'react'
import Label from './label';
import Description from './description';

export default class Input extends React.PureComponent {
  render() {
    const {
      className,
      label,
      required,
      children,
      pattern,
      value,
      type,
      min,
      max,
      format,
      onChange
    } = this.props

    return (
      <div className={cx(css.container, className)}>
        <Label>
          {label} {type === 'range' && (
            <span className={css.subtext}>{format ? format(value) : value}</span>
          )}
        </Label>
        <input
          required={required}
          pattern={pattern}
          className={css.input}
          value={value}
          onChange={onChange}
          type={type}
          min={min}
          max={max}
        />
        {children && (
          <Description>
            {children}
          </Description>
        )}
      </div>
    )
  }
}