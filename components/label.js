import Typography from "./typography";

export default function Label(props) {
  const {
    children
  } = props
  return (
    <Typography.Label>
      {children}
    </Typography.Label>
  )
}