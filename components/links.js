import Link from 'next/link'
const { version } = require('../package.json')
import * as assert from 'assert'
import Typography from './typography';
import css from './links.scss'

function href(route) {
  if (route[0] === '/') {
    return {
      href: route,
      as: BASE_LINK + route
    }
  } else {
    return {
      href: route
    }
  }
}

const defaultVariant = 'default'
function variant(cases) {
  return (props) => {
    const { variant } = props
    const component = cases[variant || defaultVariant]
    assert(!!component, 'Undefined variant: ' + variant)
    return component(props)
  }
}

function AnchorLink({
  route,
  className,
  children
}) {
  return (
    <Link {...href(route)}><a className={className}>{children}</a></Link>
  )
}

const Home = variant({
  [defaultVariant]: () => (
    <AnchorLink route='/'>App</AnchorLink>
  ),
  'header': () => (
    <AnchorLink route='/' className={css.block}><Typography.Header.Display/></AnchorLink>
  )
})

const About = () => (<AnchorLink route='/about'>About</AnchorLink>)
const Privacy = () => (<AnchorLink route='/privacy'>Privacy</AnchorLink>)
const changelogLink = 'https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md'
const Changelog = variant({
  [defaultVariant]: () => (<AnchorLink route={changelogLink}>Changelog</AnchorLink>),
  'versioned': () => (<AnchorLink route={changelogLink}>New in {version}</AnchorLink>)
})

const Links ={
  Home,
  About,
  Privacy,
  Changelog
}

export default Links