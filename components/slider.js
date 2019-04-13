import Label from "./label";
import Typography from "./typography";
import css from './slider-toggle.scss'
import * as cx from 'classnames'

const noopFormat = v => v
const noop = () => {}

export default class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }

    this.track = React.createRef()

    this.setAbsolute = (e) => {
      const { onChange = noop } = this.props
      onChange(this.computeNewValue(e.clientX))
    }
    this.onMouseMove = (e) => {
      e.preventDefault()
      const newv = this.computeNewValue(e.clientX)
      const { onChange = noop } = this.props
      if (!this.state.isActive) { return }
      onChange(newv)
    }
    this.onThumbDown = () => {
      this.setState({ isActive: true })
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onThumbUp)
    }
    this.onThumbUp = () => {
      this.setState({ isActive: false })
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onThumbUp)
    }
  }
  computeNewValue(clientX) {
    const rect = this.track.current.getBoundingClientRect()
    const newpct = (clientX - rect.left) / rect.width
    const {
      min = 0,
      max = 1,
      step = 1
    } = this.props
    const domainvalue = (newpct * (max - min) + min)
    const steppedvalue = Math.round(domainvalue / step) * step
    const boundvalue = Math.max(min, Math.min(max, steppedvalue))
    return boundvalue
  }
  computeRunnerStyle(pct) {
    return {
      width: `${(pct*100).toFixed(2)}%`
    }
  }
  computeThumbStyle(pct) {
    const percentage = `${(pct*100).toFixed(2)}%`
    const offset = (pct * 16).toFixed(2) + 'px'
    return {
      left: `calc(${percentage} - ${offset})`
    }
  }
  render() {
    const {
      label,
      format = noopFormat,
      value,
      min = 0,
      max = 1,
      step = 1
    } = this.props
    const {
      isActive
    } = this.state

    const pct = (Math.round(value / step) * step - min) / (max - min)


    return (
      <div>
        <Label>
          {label}
          <Typography.Small>{format(value)}</Typography.Small>
        </Label>
        <div
          className={css.trackcontainer}
          onClick={this.setAbsolute}
        >
          <div className={css.track} ref={this.track}>
            <div
              className={cx(css.runner, { [css.runneractive]: isActive })}
              style={this.computeRunnerStyle(pct)}
            />
            <div
              className={cx(css.thumb, { [css.thumbactive]: isActive })}
              onMouseDown={this.onThumbDown}
              style={this.computeThumbStyle(pct)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export class Toggle extends Slider {
  constructor(props) {
    super(props)
    this.toggle = () => {
      const { onChange } = this.props
      onChange(!this.props.value)
    }
  }
  render() {
    const {
      label,
      value
    } = this.props
    const pct = value ? 1 : 0
    return (
      <div className={css.togglecontainer}>
        <input type='checkbox' value={value} className={css.togglecheckbox} onChange={this.toggle}/>
        <div
          className={cx(css.trackcontainer, css.toggle)}
          onClick={this.toggle}
        >
          <div className={css.track} ref={this.track}>
            <div
              className={css.runner}
              style={this.computeRunnerStyle(pct)}
            />
            <div
              className={css.thumb}
              onClick={this.toggle}
              style={this.computeThumbStyle(pct)}
            />
          </div>
        </div>
        <Label>
          {label}
        </Label>
      </div>
    )
  }
}