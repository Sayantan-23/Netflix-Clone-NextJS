import Image from "next/image";
import { Movie } from "../../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "@/constants/movie";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16  md:space-y-4 lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[100vh] -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="Movie Image"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold lg:pt-24">
        {movie?.title || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="heroButton bg-white text-black">
          Play <PlayIcon className="h-4 w-4 md:h-7 md:w-7" />
        </button>
        <button
          className="heroButton bg-gray-500/70 text-white"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="h-4 w-4 md:h-7 md:w-7" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
