import css from './footer.scss'
import Links from './links'
import Typography from './typography';

export default function Footer() {
  return (
    <footer role="contentinfo" className={css.footer}>
      <div className={css.container}>
        <Typography.Copyright/>
        <Typography.Links>
          <Links.Home/>
          <Links.About/>
          <Links.Privacy/>
          <Links.Changelog/>
        </Typography.Links>
      </div>
    </footer>
  )
}