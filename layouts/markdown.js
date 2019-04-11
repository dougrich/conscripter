import Head from '../components/head'
import Header from '../components/header';
import Markdown from 'react-markdown'
import css from '../pages/index.scss'

export default function MarkdownPage({
  title,
  source
}) {
  return (
    <div className={css.root}>
      <Head title={title}/>
      <Header/>
      <div className={css.textpanel}>
        <Markdown source={source}/>
      </div>
    </div>
  )
}