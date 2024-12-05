import { notFound } from "next/navigation";

async function SearchPage({ params }) {
  // Wait for params to resolve properly
  const { term } = await params;

  console.log(term);
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API to get the searched movies
  //API to get the popular movies

  return <div>SearchPage with term: {termToUse}</div>;
}

export default SearchPage;
