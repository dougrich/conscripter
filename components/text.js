import css from './text.scss'
import * as cx from 'classnames'
import Label from './label';
import Typography from './typography';

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
    render() {
      const {
        className,
        style,
        defaultValue
      } = this.props
      return (
        <div className={css.textareacontainer}>
          <textarea
            className={cx(className, css.textarea)}
            style={style}
            defaultValue={defaultValue}
          />
        </div>
      )
    }
  }
}

export default Text