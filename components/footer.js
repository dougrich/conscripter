import css from './footer.module.scss'
import * as cx from 'classnames'
import Print from './print.module.scss'
import Links from './links'
import Typography from './typography'

export default function Footer () {
  return (
    <footer role='contentinfo' className={cx(css.footer, Print.none)}>
      <div className={css.container}>
        <Typography.Copyright />
        <Typography.Links>
          <Links.Home />
          <Links.About />
          <Links.Usage />
          <Links.Privacy />
          <Links.Changelog />
        </Typography.Links>
      </div>
    </footer>
  )
}
