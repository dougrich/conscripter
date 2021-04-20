import Head from '../components/head'
import Header from '../components/header';
import css from '../pages/index.module.scss'
import Footer from '../components/footer';
import GithubCorner from '../components/github-corner'
import css2 from './error.module.scss'
import * as cx from 'classnames'

export default function ErrorPage({
}) {
  return (
    <div className={css.root}>
      <Head title='Not Found'/>
      <GithubCorner url='https://github.com/dougrich/conscripter'/>
      <Header/>
      <div className={cx(css.textpanel, css2.error)} role="main">
        <div className={css2.container}>
          <div className={css2.code}>404</div>
          <div className={css2.text}>Sorry, it seems you've gone a bit off track. Consider raising an issue on <a href="" target="_blank">Github</a> if you think this is a mistake.</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}