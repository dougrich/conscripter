import css from './description.module.scss'
import * as cx from 'classnames'
import Typography from './typography'

export default function Description({
  variant,
  className,
  children
}) {
  return (
    <Typography.Description
      className={cx(css.description, className, css[variant || 'default'])}
    >
      {children}
    </Typography.Description>
  )
}