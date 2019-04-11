import Head from '../components/head'
import Header from '../components/header';
import Markdown from 'react-markdown'
import css from '../pages/index.scss'
import Footer from '../components/footer';
import GithubCorner from '../components/github-corner';

export default function MarkdownPage({
  title,
  source
}) {
  return (
    <div className={css.root}>
      <Head title={title}/>
      <GithubCorner url='https://github.com/dougrich/conscripter'/>
      <Header/>
      <div className={css.textpanel} role="main">
        <Markdown source={source}/>
      </div>
      <Footer/>
    </div>
  )
}