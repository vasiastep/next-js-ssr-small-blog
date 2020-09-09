import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import classes from '../styles/navbar.module.css';

const Container = styled.div`
  padding: 5px 20%;

  background-color: ${(props) => props.backgroundColor || ''};
  color: ${(props) => props.color || '#000'};

  @media (max-width: 450px) {
    padding: 5px 5%;
  }
`;

const Navbar = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem 0;
`;

export const MainLayout = ({
  children,
  title = 'Home',
}: {
  children: any;
  title: string;
}): JSX.Element => {
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
                <a className={classes.navLink}>Home</a>
              </Link>
              <span className={classes.spacing}>|</span>
              <Link href="/posts/new">
                <a className={classes.navLink}>New post</a>
              </Link>
            </nav>
          </header>
        </Container>
      </Navbar>
      <Container color="#fff">
        <main>{children}</main>
      </Container>
    </>
  );
};
