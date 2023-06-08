import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head title="PropelAuth tRPC" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
