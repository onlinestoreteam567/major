export default function ErrorPage({ error }) {
  return <div>{error === 400 && <p>Щось пішло не так</p>}</div>;
}
