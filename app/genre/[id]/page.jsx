async function GenrePage({ params, searchParams }) {
  const { id } = await params; // Destructure `id` from `params`
  const { genre } = await searchParams;

  console.log(id, genre);

  return (
    <div>
      welcome to genre with id: {id} & genre: {genre}
    </div>
  );
}

export default GenrePage;
