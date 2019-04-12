import css from './typography.scss'
import Images from './images';

console.log(css)

const Typography = {
  Header: {
    Display: () => (
      <h1 className={css.display}>
        <Images.Logo/>
        Conscripter
      </h1>
    )
  },
  Links: ({ children }) => (
    <div
      className={css.links}
      role="navigation"
    >
      {children}
    </div>
  )
}

export default Typography