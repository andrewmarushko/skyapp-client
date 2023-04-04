export async function getData() {
  console.log('sddfsd')
  const res = await fetch('http://localhost:1337/api/indoors');
  console.log(res, 'res')
  const pageContent = await res.json();
  return pageContent;
}