import css from './description.scss'

export default function Description({
  children
}) {
  return (
    <div className={css.description}>
      {children}
    </div>
  )
}