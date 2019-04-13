import css from './preview.scss'
import * as cx from 'classnames'
import Input from './input';
import Options from './options';
import Slider from './slider';

export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 200,
      options: {
        italic: false,
        bold: false,
        invert: false
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
      defaultValue
    } = this.props
    const {
      fontSize,
      options
    } = this.state
    return (
      <div className={cx(css.background, { [css.inverted]: options.invert })}>
        <div className={css.container}>
          <Slider
            label='Font Size'
            min={100}
            value={fontSize}
            max={300}
            onChange={this.setFontSize}
            format={this.format}
          />
          
          <Options label='Font Options' value={options} onChange={this.setOptions}/>
          <textarea
            className={css.previewText}
            style={{
              fontSize: (fontSize / 100) + 'em',
              fontStyle: options.italic ? 'italic': 'initial',
              fontWeight: options.bold ? 'bold' : 'normal'
            }}
            defaultValue={defaultValue}
          />
        </div>
      </div>
    )
  }
}