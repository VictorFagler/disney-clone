async function fetchFromTMDB(url) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTJkOWM5NzIzMzJkMmYwNDBiZDVhZTEyODIyZjg1MiIsIm5iZiI6MTczMjg4NjA2My43MDEsInN1YiI6IjY3NDliZTJmNmVmZjYyNDJiZTNlYTczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qywnlwAOmTFyuXxHeo5gsCiu1nbwWCFampEfS8XXeWc`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);

  return data.results;
}
export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);

  return data.results;
}
export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getDiscoverMovies(id, keywords = null) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  if (keywords) {
    url.searchParams.set("with_keywords", keywords);
  }

  if (id) {
    url.searchParams.set("with_genres", id);
  }

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchedMovies(term) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);

  const data = await fetchFromTMDB(url);
  return data.results;
}
