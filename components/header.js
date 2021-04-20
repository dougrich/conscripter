import css from './header.module.scss'
import Links from './links'
import Typography from './typography'

export default function Header () {
  return (
    <header role='banner'>
      <div className={css.container}>
        <Links.Home variant='header' />
        <Typography.Links>
          <Links.About />
          <Links.Usage />
          <Links.Privacy />
          <Links.Changelog variant='versioned' />
        </Typography.Links>
      </div>
    </header>
  )
}
