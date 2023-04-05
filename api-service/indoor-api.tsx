export async function getIndoorsData() {
  const res = await fetch('http://localhost:1337/api/indoors');
  const pageContent = await res.json();
  return pageContent;
}
