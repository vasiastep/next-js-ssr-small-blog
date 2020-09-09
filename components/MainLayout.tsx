import Head from 'next/head';
import Link from 'next/link';
import {
  Navbar,
  Container,
  NavLink,
  SeparatorNavbar,
} from './styledComponents';

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
                <NavLink>Home</NavLink>
              </Link>
              <SeparatorNavbar>|</SeparatorNavbar>
              <Link href="/posts/new">
                <NavLink>New post</NavLink>
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
