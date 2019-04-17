import css from './text.scss'
import * as cx from 'classnames'
import Label from './label';
import Typography from './typography';

const KEYCODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SHIFT: 16
}

const Text = {
  Field: class extends React.PureComponent {
    render() {
      const {
        label,
        required,
        pattern,
        placeholder,
        value,
        onChange
      } = this.props
      return (
        <div className={css.textfieldcontainer}>
          <Label>{label}</Label>
          <input
            required={required}
            pattern={pattern}
            value={value}
            onChange={({ currentTarget: { value }}) => onChange(value)}
            placeholder={placeholder}
            className={cx(css.textfield, Typography.Input)}
          />
        </div>
      )
    }
  },
  Area: class extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = { value: props.defaultValue }
      this.cursorRef = React.createRef()
      this.onChange = ({ currentTarget: { value }}) => this.setState({ value })
      this.onKeyDown = (e) => {
        const { value } = this.state
        this.cursorRef.current.scrollIntoViewIfNeeded()
        switch (e.keyCode) {
          case KEYCODE.BACKSPACE:
            this.setState({ value: value.slice(0, value.length - 1)})
            return;
          case KEYCODE.ENTER:
            this.setState({ value: value + '\n' })
            return;
          case KEYCODE.SHIFT:
            return;
        }
        if (!e.ctrlKey && !e.altKey && e.key.length === 1) {
          this.setState({ value: value + e.key })
        }
      }
    }

    renderVertical() {
      const {
        className,
        style,
        keep
      } = this.props

      const {
        value
      } = this.state
      const lines = []
      let current = []
      const newline = () => {
        lines.push(
          <div key={lines.length} className={css.vline}>
            {current}
          </div>
        )
        current = []
      }
      // explicit array
      let substituted = new Array(value.length)
      for (let i = 0; i < value.length; i++) {
        substituted[i] = value[i]
      }

      for (let i = 0; i < keep.length; i++) {
        const { value: subset, fix } = keep[i]
        all:
        for (let j = 0; j < substituted.length - subset.length + 1; j++) {
          for (let k = 0; k < subset.length; k++) {
            if (substituted[j + k] !== subset[k]) {
              continue all;
            }
          }

          // match found, replace
          substituted.splice(j, subset.length, { [fix]: subset })
        }
      }

      substituted = (({ current, set }) => {
        if (current) set.push(current)
        return set
      })(substituted.reduce(
        ({ current, set }, segment) => {
          if (typeof segment === 'string') {
            if (current) set.push(current)
            return { current: segment, set }
          } else {
            if (segment.in) {
              if (current) set.push(current)
              return { current: segment.in, set }
            } else if (segment.post) {
              return { current: current + segment.post, set }
            } else {
              throw new Error('Unrecognized segment positioning')
            }
          }
        },
        { current: '', set: [] }
      ))

      for (let i = 0; i < substituted.length; i++) {
        const char = substituted[i]
        if (char === '\n') {
          newline()
          continue
        }

        current.push(
          <div key={current.length} className={css.vcell}>
            {char}
          </div>
        )
      }
      current.push(
        <div key='cursor' className={css.vcursor} ref={this.cursorRef}/>
      )
      newline()
      return (
        <div className={css.textareacontainer}>
          <div
            className={cx(className, css.textarea, css.vcontainer)}
            style={style}
            tabIndex={0}
            onKeyDown={this.onKeyDown}
          >
            {lines}
          </div>
        </div>
      )
    }

    render() {
      const {
        className,
        style,
        vertical
      } = this.props
      const {
        value
      } = this.state
      if (vertical) {
        return this.renderVertical()
      }

      return (
        <div className={css.textareacontainer}>
          <textarea
            className={cx(className, css.textarea)}
            style={style}
            value={value}
            onChange={this.onChange}
          />
        </div>
      )
    }
  }
}

export default Text