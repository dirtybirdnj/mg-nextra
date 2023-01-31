import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import Header from './components/Header'

import { Container, Row, Col, Image } from "@nextui-org/react";

function Layout({ pageOpts, children }) {
  // Front matter of the current page:
  // pageOpts.frontMatter

  // You can build the sidebar based on the structure data from `pageMap`:
  // console.log(pageOpts.pageMap)

  return (
    <>
      <Head>
        <title>{pageOpts.title}</title>
        <link rel="shortcut icon" href="/img/favicon_io/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="M2IyMmNmYTEtNjQ0Yi00MjI2LTkwOTMtZGIxOWY0MDZlNTgzNjM3MTI0MDkxNTc3MzgyMDA3" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      </Head>
      <Container>
        <Row>
          <Col>
            <Header pageMap={pageOpts.pageMap} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MDXProvider
              components={{
                // You can add custom components here for MDX
                h1: (props) => <h1 {...props} />,
                img: (props) => <Image {...props} />,
                pre: ({ filename, ...props }) => {
                  return (
                    <div>
                      {filename ? (
                        <div>{filename}</div>
                      ) : null}
                      <pre {...props} />
                    </div>
                  )
                },
              }}
            >
              {children}
            </MDXProvider>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>verticaltubejig.com | <Link href="https://www.vtapi.co">vtapi.co</Link></footer>
          </Col>
        </Row>
      </Container>
    </>    
  )
}

export default function Theme(props) {
  // These are just initial setup for Nextra themes
  const { route } = useRouter()
  const context = globalThis.__nextra_pageContext__[route]
  if (!context) throw new Error(`No content found for ${route}.`)
  const { pageOpts, Content } = context

  const { pageMap } = pageOpts
  const { children } = pageOpts

  return (
    <Layout pageOpts={pageOpts}>
      <Content {...props} />
      <div style={{ }}>{children}</div>
    </Layout>
  )
}
