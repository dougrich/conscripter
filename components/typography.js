import css from './typography.module.scss'
import Images from './images';
import Print from './print.module.scss'
import * as cx from 'classnames'

const Typography = {
  Header: {
    Display: () => (
      <h1 className={css.display}>
        <Images.Logo/>
        Conscripter
      </h1>
    ),
    Section: ({ children }) => (
      <h2 className={css.sectionheader}>
        {children}
      </h2>
    )
  },
  Links: ({ children }) => (
    <div
      className={cx(css.links, Print.none)}
      role="navigation"
    >
      {children}
    </div>
  ),
  Button: ({ children }) => (
    <span
      className={css.btn}
    >
      {children}
    </span>
  ),
  Icon: ({ children }) => (
    <span
      className={css.icon}
    >
      {children}
    </span>
  ),
  Copyright: () => (
    <div className={css.copyright}>
      Made by Douglas Richardson © 2020.<br/>Fonts available through the <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank">Creative Commons CC0 License</a>.<br/>Code available through the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
    </div>
  ),
  Small: ({ children }) => (
    <span className={css.small}>{' '}{children}</span>
  ),
  Label: ({ children, htmlFor }) => (
    <label className={css.label} htmlFor={htmlFor}>
      {children}
    </label>
  ),
  Description: ({ children, className }) => (
    <div className={cx(className, css.description)}>
      {children}
    </div>
  ),
  Markdown: (props) => {
    const { children, className } = props
    return (
      <div {...props} className={cx(className, css.markdown)}>
        {children}
      </div>
    )
  },
  Descriptor: ({ className, children }) => (
    <div className={cx(className, css.descriptor)}>
      {children}
    </div>
  ),
  Input: css.input,
  Demofont: css.demofont,
  BaseDemofont: css.basedemofont
}

export default Typography