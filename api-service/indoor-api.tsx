export async function getIndoorsData() {
  const res = await fetch(`http://localhost:1337/api/indoors?limit=10`);
  const pageContent = await res.json();
  return pageContent;
}
