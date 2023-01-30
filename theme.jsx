import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import Navbar from './components/Navbar';

const Container = styled.div`
  max-width: 750px;
  min-height: 100vh;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

const Codeblock = styled.div`
  background: #f3f3f3;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;

  code {
    display: flex;
    flex-direction: column;
  }

  span {
    display: block;
  }
`;

const Filename = styled.div`
  color: #666;
  font-size: 12px;
`;

const Footer = styled.div`
  padding: 20px 0 30px;

  a {
    color: #275ea3;
  }
`;

function Layout({ pageOpts, children }) {
  // Front matter of the current page:
  // pageOpts.frontMatter

  // You can build the sidebar based on the structure data from `pageMap`:
  // console.log(pageOpts.pageMap)

  return (

    <>
    <link rel="shortcut icon" href="/img/favicon_io/favicon.ico" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="M2IyMmNmYTEtNjQ0Yi00MjI2LTkwOTMtZGIxOWY0MDZlNTgzNjM3MTI0MDkxNTc3MzgyMDA3" id="snipcart"></script>
    <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />

    <Container>
        <Head>
          <title>{pageOpts.title}</title>
        </Head>
        <Content>
          <Navbar/>
          <Main>
            <MDXProvider
              components={{
                // You can add custom components here for MDX
                pre: ({ filename, ...props }) => {
                  return (
                    <Codeblock>
                      {filename ? (
                        <Filename>{filename}</Filename>
                      ) : null}
                      <pre {...props} />
                    </Codeblock>
                  )
                },
              }}
            >
              {children}
            </MDXProvider>
          </Main>
        </Content>
      <Footer>verticaltubejig.com | <Link href="https://www.vtapi.co">vtapi.co</Link></Footer>
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
