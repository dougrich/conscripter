import css from './label.scss'

export default function Label(props) {
  const {
    children
  } = props
  return (
    <label className={css.root} {...props}>
      {children}
    </label>
  )
}