import css from './dropzone.scss'
import Typography from './typography';

export default class DropZone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      warning: '',
      loading: false
    }
    this.fileInput = React.createRef()

    this.onClick = (e) => {
      e.stopPropagation()
      this.fileInput.current.click()
    }

    this.onFileAdded = (e) => {
      const file = e.target.files[0]
      e.target.value = null
      if (file.name.indexOf('.svg') !== file.name.length - '.svg'.length) {
        this.setState({
          warning: `${file.name} does not appear to be an SVG file: make sure it is a plain text SVG file.`
        })
      } else {
        this.setState({
          warning: null,
          loading: true
        })
        const filereader = new FileReader()
        filereader.onload = () => {
          let error
          try {
            this.props.onUpload({
              filename: file.name,
              contents: filereader.result
            })
          } catch (e) {
            console.error(e)
            error = e
          }
          this.setState({
            warning: error ? error.message : null,
            loading: false
          })
        }
        filereader.readAsText(file)
      }
    }
  }

  renderWarning() {
    const {
      warning
    } = this.state

    if (!warning) return null
    return (
      <div>
        {warning}
      </div>
    )
  }

  render() {
    const hasWarning = !!this.state.warning
    return (
      <div
        className={css.container}
        onClick={this.onClick}
        tabIndex="0"
      >
        <Typography.Button>Drag file or click here to upload</Typography.Button>
        <input
          className={css.input}
          ref={this.fileInput}
          onChange={this.onFileAdded}
          accept="image/svg+xml"
          type="file"
        />
      </div>
    )
  }
}