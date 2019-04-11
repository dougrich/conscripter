import css from './button.scss'
import * as cx from 'classnames'

export default function Button(props) {
  const {
    variant = 'default',
    children
  } = props

  return (
    <button className={cx(css.btn, css[variant])} {...props}>
      {children}
    </button>
  )
}