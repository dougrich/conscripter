import about from '../../docs/about.md'
import MarkdownPage from '../layouts/markdown';

export default function About({

}) {
  return (
    <MarkdownPage title='About' source={about}/>
  )
}