import css from './images.scss'

function Image(
  src,
  className,
  alt
 ) {
  return () => (
    <img
      className={className}
      src={BASE_LINK + src}
      alt={alt}
    />
  )
}

const Images = {
  Logo: Image('/static/favicon-144.png', css.logo, 'Conscripter Logo')
}

export default Images