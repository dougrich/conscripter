import css from './badge.module.scss'
import * as cx from 'classnames'

export default function Badge(props) {
  const {
    variant = 'default',
    className,
    children
  } = props
  return (
    <span  {...props} className={cx(css.badge, className, css[variant])}>
      {children}
    </span>
  )
}