import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

async function CarouselBannerWrapper({ id }) {
  const movies = await getDiscoverMovies(id);
  return (
    <div>
      <CarouselBanner movies={movies} />
    </div>
  );
}

export default CarouselBannerWrapper;
