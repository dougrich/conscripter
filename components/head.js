import NativeHead from 'next/head'

export default function Head({
  title
}) {
  return (
    <NativeHead>
      <title>{title} | Conscripter</title>
      <meta charSet="utf-8"/>
      <meta name="description" content="Conscripter is a tool for creating conlang script fonts from SVG using contextual alternates and ligatures."/>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="shortcut icon" href="/static/favicon.ico"/>
      <link rel="icon" sizes="16x16 32x32 64x64" href="/static/favicon.ico"/>
      <link rel="icon" type="image/png" sizes="196x196" href="/static/favicon-192.png"/>
      <link rel="icon" type="image/png" sizes="160x160" href="/static/favicon-160.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96.png"/>
      <link rel="icon" type="image/png" sizes="64x64" href="/static/favicon-64.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16.png"/>
      <link rel="apple-touch-icon" href="/static/favicon-57.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon-114.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon-72.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon-144.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon-60.png"/> 
      <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon-120.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon-76.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon-152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon-180.png"/>
      <meta name="msapplication-TileColor" content="#FFFFFF"/>
      <meta name="msapplication-TileImage" content="/static/favicon-144.png"/>
    </NativeHead>
  )
}