import css from './input.scss'
import * as cx from 'classnames'
import React from 'react'

export default class Input extends React.PureComponent {
  render() {
    const {
      className,
      label,
      value,
      onChange,
      placeholder
    } = this.props
    return (
      <div className={cx(css.container, className)}>
        <label className={css.label}>{label}</label>
        <input className={css.input} value={value} onChange={onChange}/>
        <span className={css.placeholder}>{placeholder}</span>
      </div>
    )
  }
}