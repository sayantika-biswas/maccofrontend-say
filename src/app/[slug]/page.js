export default function DynamicPage({ params }) {
  const { slug } = params;

  return <h1>This is the {slug} page.</h1>;
}
