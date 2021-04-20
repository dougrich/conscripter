import css from './dropzone.module.scss'
import Typography from './typography'
import React from 'react'

export default class DropZone extends React.Component {
  constructor (props) {
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
        const filereader = new window.FileReader()
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

  renderWarning () {
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

  render () {
    const handleOnClick = this.onClick
    const handleOnFileAdded = this.onFileAdded
    return (
      <div
        className={css.container}
        onClick={handleOnClick}
        tabIndex='0'
      >
        <Typography.Button>Drag file or click here to upload</Typography.Button>
        <input
          className={css.input}
          ref={this.fileInput}
          onChange={handleOnFileAdded}
          accept='image/svg+xml'
          type='file'
        />
        {this.renderWarning()}
      </div>
    )
  }
}
