try {
  global.shitLog = x => {
    console.log(x)
    return x
  }
} catch (e) {
  window.shitLog = x => {
    console.log(x)
    return x
  }
}

const Layout = ({ children }) => (
  <div>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tingle/0.13.2/tingle.min.css"
      />
      <link rel="stylesheet" href="/static/css.css" />
    </head>

    <div>{children}</div>
  </div>
)
export default Layout
