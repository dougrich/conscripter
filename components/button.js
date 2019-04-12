import css from './button.scss'
import * as cx from 'classnames'
import Typography from './typography';

export default function Button(props) {
  const {
    variant = 'default',
    children
  } = props

  return (
    <button className={cx(css.btn, css[variant])} {...props}>
      <Typography.Button>{children}</Typography.Button>
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