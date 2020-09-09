import Link from 'next/link';
import {
  ErrorPageWrapper,
  ErrorPageText,
  Separator,
} from '../components/styledComponents';

export default function ErrorPage(): JSX.Element {
  return (
    <ErrorPageWrapper>
      <ErrorPageText>
        <span>Ooops.. </span>
        <Separator>|</Separator>
        <span> Seems you can not reach this page</span>
      </ErrorPageText>
      <Link href="/">Back to home</Link>
    </ErrorPageWrapper>
  );
}
