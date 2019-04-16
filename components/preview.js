import css from './preview.scss'
import * as cx from 'classnames'
import Print from './print.scss'
import Text from './text'
import Options from './options';
import Slider from './slider';
import Typography from './typography';
import Badge from './badge';
import Links from './links'
import Description from './description'

export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 200,
      options: {
        italic: false,
        bold: false,
        invert: false,
        rtl: false,
        vertical: false
      }
    }

    this.setFontSize = (fontSize) => this.setState({ fontSize })
    this.setOptions = options => this.setState({ options })
    this.format = v => {
      return ((v / 100) * 16).toFixed(1) + ' pt'
    }
  }
  render() {
    const {
      defaultValue,
      keep
    } = this.props
    const {
      fontSize,
      options
    } = this.state
    return (
      <div className={cx(css.background, { [css.inverted]: options.invert })}>
        <div className={cx(css.formcontainer, Print.none)}>
          <Slider
            label='Font Size'
            min={100}
            value={fontSize}
            max={300}
            onChange={this.setFontSize}
            format={this.format}
          />
          <Options
            label='Font Options'
            value={options}
            lock={options.vertical ? {rtl: true} : {}}
            optionLabels={{
              rtl: 'right-to-left',
              vertical: (
                <span><Badge variant='success'>BETA</Badge> vertical</span>
              )
            }}
            onChange={this.setOptions}
          />
          {options.vertical && (
            <Description className={css.inlinedescription}>
              Note that there are special steps that need to be taken to get your font vertically in your editor, and not all editors work with vertical fonts. See syllabry1 <Links.Usage/> for details.
            </Description>
          )}
        </div>
        <Text.Area
          className={cx(css.previewText, Typography.Demofont)}
          style={{
            fontSize: (fontSize / 100) + 'em',
            fontStyle: options.italic ? 'italic': 'initial',
            fontWeight: options.bold ? 'bold' : 'normal',
            direction: options.rtl ? 'rtl' : 'initial'
          }}
          vertical={options.vertical}
          keep={keep}
          defaultValue={defaultValue}
          onChange={this.onChange}
        />
      </div>
    )
  }
}