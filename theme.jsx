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
  )
}

export default function Theme(props) {
  // These are just initial setup for Nextra themes
  const { route } = useRouter()
  const context = globalThis.__nextra_pageContext__[route]
  if (!context) throw new Error(`No content found for ${route}.`)
  const { pageOpts, Content } = context

  return (
    <Layout pageOpts={pageOpts}>
      <Content {...props} />
    </Layout>
  )
}
