import css from './description.scss'
import * as cx from 'classnames'

export default function Description({
  variant,
  children
}) {
  return (
    <div className={cx(css.description, css[variant || 'default'])}>
      {children}
    </div>
  )
}