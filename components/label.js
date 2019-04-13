import Typography from "./typography";

export default function Label(props) {
  const {
    children,
    htmlFor
  } = props
  return (
    <Typography.Label htmlFor={htmlFor}>
      {children}
    </Typography.Label>
  )
}