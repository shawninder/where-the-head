// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react'
import Document, { Main, NextScript } from 'next/document'
import Head from 'next/head'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
