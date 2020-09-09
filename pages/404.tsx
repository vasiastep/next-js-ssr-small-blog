import Link from 'next/link';

export default function ErrorPage(): JSX.Element {
  return (
    <div className="error-page">
      <h1 className="problem-text">
        <span>Ooops.. </span>
        <span className="big-line">|</span>
        <span> Seems you can not reach this page</span>
      </h1>
      <Link href="/">Back to home</Link>
    </div>
  );
}
