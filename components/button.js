import css from './button.scss'
import * as cx from 'classnames'
import Typography from './typography';

export default function Button(props) {
  const {
    variant = 'default',
    className,
    children
  } = props

  let child = (
    <Typography.Button>{children}</Typography.Button>
  )

  if (variant === 'action') {
    child = (
      <Typography.Icon>{children}</Typography.Icon>
    )
  }

  return (
    <button  {...props} className={cx(css.btn, className, css[variant])}>
      {child}
    </button>
  )
}

export function ButtonBar({ children }){
  return (
    <div className={cx(css.bar)}>
      {children}
    </div>
  )
}