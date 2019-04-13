import css from './description.scss'
import * as cx from 'classnames'
import Typography from './typography'

export default function Description({
  variant,
  children
}) {
  return (
    <Typography.Description
      className={cx(css.description, css[variant || 'default'])}
    >
      {children}
    </Typography.Description>
  )
}