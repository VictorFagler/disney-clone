"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = { delay: 8000 };
function CarouselBanner({ movies }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  React.useEffect(() => {
    if (emblaApi) {
      console.log("Embla API initialized");
    }
  }, [emblaApi]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              alt=""
              width={1920}
              height={1080}
            />
            <div className="hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 to-transparent space-y-5 p-10 text-white">
              <h2 className="text-5xl font-bold max-w-xl z-99">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via gray-900/25 to-gray-300 dark:to-[#1a1c29] " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselBanner;