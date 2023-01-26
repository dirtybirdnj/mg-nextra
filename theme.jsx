import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import Navbar from './components/Navbar'


import styles from './theme.module.sass'

function Layout({ pageOpts, children }) {
  // Front matter of the current page:
  // pageOpts.frontMatter

  // You can build the sidebar based on the structure data from `pageMap`:
  // console.log(pageOpts.pageMap)

  return (

    <>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="M2IyMmNmYTEtNjQ0Yi00MjI2LTkwOTMtZGIxOWY0MDZlNTgzNjM3MTI0MDkxNTc3MzgyMDA3" id="snipcart"></script>
    <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
    <div className={styles.page}>
      <div className={styles.container}>
        <div>
          <Head>
            <title>{pageOpts.title}</title>
          </Head>
          <div>
            <Navbar/>
            <main className={styles.main}>
              <MDXProvider
                components={{
                  // You can add custom components here for MDX
                  h1: (props) => <h1 className={styles.h1} {...props} />,
                  pre: ({ filename, ...props }) => {
                    return (
                      <div className={styles.codeblock}>
                        {filename ? (
                          <div className={styles.filename}>{filename}</div>
                        ) : null}
                        <pre {...props} />
                      </div>
                    )
                  },
                }}
              >
                {children}
              </MDXProvider>
            </main>
          </div>
        </div>
        <footer className={styles.footer}>verticaltubejig.com | <Link href="https://www.vtapi.co">vtapi.co</Link></footer>
      </div>
    </div>
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
