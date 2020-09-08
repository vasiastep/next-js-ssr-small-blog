import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px 20%;

  background-color: ${(props) => props.backgroundColor || ''};
  color: ${(props) => props.color || '#000'};

  @media (max-width: 450px) {
    padding: 5px 5%;
  }
`

const Navbar = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem 0;
`

export const MainLayout = ({
  children,
  title = 'Home',
}: {
  children: any
  title: string
}) => {
  return (
    <>
      <Head>
        <title>{title} | Blog</title>
      </Head>

      <Navbar>
        <Container>
          <header>
            <nav>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <span className="spacing">|</span>
              <Link href="/posts/new">
                <a className="nav-link">New post</a>
              </Link>
            </nav>
          </header>
        </Container>
      </Navbar>
      <Container color="#fff">
        <main>{children}</main>
      </Container>
    </>
  )
}
