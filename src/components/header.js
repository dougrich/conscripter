import Link from 'next/link'
import x from '../pages/index.scss' // this is done to avoid a nasty ordering issue in mini-css-extract
import css from './header.scss'
const { version } = require('../../package.json')

export default function Header({

}) {
  return (
    <header>
      <div className={css.container}>
        <Link href="/"><a><h1>Conscripter</h1></a></Link>
        <div className={css.links}>
          <Link href="/about"><a className={css.link}>About</a></Link>
          <Link href="/privacy"><a className={css.link}>Privacy</a></Link>
          <Link href="https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md"><a className={css.link}>New in {version}</a></Link>
        </div>
      </div>
    </header>
  )
}