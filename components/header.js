import x from '../pages/index.scss' // this is done to avoid a nasty ordering issue in mini-css-extract
import css from './header.scss'
import Links from './links'

export default function Header({

}) {
  return (
    <header role="banner">
      <div className={css.container}>
        <Links.Home variant='header'/>
        <div className={css.links} role="navigation">
          <Links.About/>
          <Links.Privacy/>
          <Links.Changelog variant='versioned'/>
        </div>
      </div>
    </header>
  )
}