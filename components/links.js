import Link from 'next/link'
const { version } = require('../package.json')
import * as assert from 'assert'

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
  children
}) {
  return (
    <Link {...href(route)}><a>{children}</a></Link>
  )
}

const Home = variant({
  [defaultVariant]: () => (
    <AnchorLink route='/'>App</AnchorLink>
  ),
  'header': () => (
    <AnchorLink route='/'><h1>Conscripter</h1></AnchorLink>
  )
})

const About = () => (<AnchorLink route='/about'>About</AnchorLink>)
const Privacy = () => (<AnchorLink route='/privacy'>Privacy</AnchorLink>)
const Changelog = variant({
  [defaultVariant]: () => (<AnchorLink route='https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md'>Changelog</AnchorLink>),
  'versioned': () => (<AnchorLink route='https://github.com/dougrich/conscripter/blob/master/CHANGELOG.md'>New in {version}</AnchorLink>)
})

export default {
  Home,
  About,
  Privacy,
  Changelog
}