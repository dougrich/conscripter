import Helmet from 'react-helmet'
import Header from '../components/header';
import Markdown from 'react-markdown'

export default function MarkdownPage({
  title,
  source
}) {
  return (
    <div>
      <Helmet>
        <title>{title} | Conscripter</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Conscripter is a tool for creating conlang script fonts from SVG using contextual alternates and ligatures."/>
      </Helmet>
      <Header/>
      <Markdown source={source}/>
    </div>
  )
}