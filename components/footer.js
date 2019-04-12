import css from './footer.scss'
import Links from './links'

export default function Footer() {
  return (
    <footer role="contentinfo" className={css.footer}>
      <div className={css.container}>
        <div className={css.copyright}>
          Made by Douglas Richardson © 2019.<br/>Fonts available through the <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank">Creative Commons CC0 License</a>.<br/>Source code available through the MIT License in the Github Repo.
        </div>
        <div className={css.links}>
            <Links.Home/>
            <Links.About/>
            <Links.Privacy/>
            <Links.Changelog/>
        </div>
      </div>
    </footer>
  )
}