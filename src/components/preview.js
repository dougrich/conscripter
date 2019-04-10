import css from './preview.scss'
import Input from './input';
import Options from './options';

export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 200,
      options: {
        italic: false,
        bold: false
      }
    }

    this.setFontSize = ({ currentTarget: { value }}) => this.setState({ fontSize: value })
    this.setOptions = options => this.setState({ options })
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
      <div className={css.background}>
        <div className={css.container}>
          <Input label='Font Size' type='range' min={100} max={300} value={fontSize} onChange={this.setFontSize}/>
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