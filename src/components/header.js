import Link from 'next/link'
import css from './header.scss'
const { version } = require('../../package.json')

export default function Header({

}) {
  return (
    <header>
      <div className={css.container}>
        <h1>Conscripter</h1>
        <div className={css.links}>
          <Link href="/about"><a className={css.link}>About</a></Link>
          <Link href="/terms"><a className={css.link}>Terms of Use</a></Link>
          <Link href="https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md"><a className={css.link}>New in {version}</a></Link>
        </div>
      </div>
    </header>
  )
}