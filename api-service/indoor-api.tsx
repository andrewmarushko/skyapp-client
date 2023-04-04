export async function getAllIndoors() {
  const res = await fetch('http://localhost:1337/api/indoors');
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsByCountry(country : string) {
  const res = await fetch(`http://localhost:1337/api/indoors/${country}`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsByCity(country : string, city : string) {
  const res = await fetch(`http://localhost:1337/api/indoors/${country}/${city}`);
  const pageContent = await res.json();
  return pageContent;
}

export async function getIndoorsByID(country : string, city : string, id: number) {
  const res = await fetch(`http://localhost:1337/api/indoors/${country}/${city}/${id}`);
  const pageContent = await res.json();
  return pageContent;
}
