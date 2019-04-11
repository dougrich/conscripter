import css from './footer.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer role="contentinfo" className={css.footer}>
      <div className={css.container}>
        <div className={css.copyright}>
          Made by Douglas Richardson © 2019.<br/>Fonts available through the <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank">Creative Commons CC0 License</a>.<br/>Source code available through the MIT License in the Github Repo.
        </div>
        <div>
            <Link href="/about" as="/conscripter/"><a className={css.link}>App</a></Link>
            <Link href="/about" as="/conscripter/about"><a className={css.link}>About</a></Link>
            <Link href="/privacy" as="/conscripter/privacy"><a className={css.link}>Privacy</a></Link>
            <Link href="https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md"><a className={css.link}>Changelog</a></Link>
        </div>
      </div>
    </footer>
  )
}