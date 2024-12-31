import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '../components/navbar';
import { Button } from '../components/Button';
import { IconHeartFilled } from '@tabler/icons-react';

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  genre_ids: number[]; // IDs dos gêneros
}

interface Genre {
  id: number;
  name: string;
}

const fetchMovies = async (): Promise<Movie[]> => {
  const API_KEY = 'db287e750561ba0ec2fee06dba9457f4';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.slice(2, 9);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }
};

const fetchGenres = async (): Promise<Genre[]> => {
  const API_KEY = 'db287e750561ba0ec2fee06dba9457f4';
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('Erro ao buscar gêneros:', error);
    return [];
  }
};

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getData = async () => {
      const genresData = await fetchGenres();
      const moviesData = await fetchMovies();
      setGenres(genresData);
      setMovies(moviesData);
    };

    getData();
  }, []);

  // Função para mapear os IDs dos gêneros para os nomes
  const mapGenres = (genreIds: number[]): string => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : '';
      })
      .join(' | ');
  };

  return (
    <div className="relative bg-black bg-opacity-50">
      <Navbar />
      <div className="w-full h-[660px] relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-secondary',
            bulletClass: 'swiper-pagination-bullet',
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                className="w-full h-full bg-cover bg-top relative"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-4">
                  <div className="text-white max-w-7xl mx-auto">
                    
                    <span className="text-sm p-2 rounded-sm  font-semibold  bg-secondary">
                      {mapGenres(movie.genre_ids)}
                    </span>
                    <h2 className="text-7xl font-bold mb-4 mt-6">
                      {movie.title} <span className="text-secondary">.</span>
                    </h2>
                    <p className="text-sm w-3/4 line-clamp-3">{movie.overview}</p>
                    <div className="flex gap-4 mt-10">
                      <Button className="mt-4 bg-secondary">
                        <Button.Title>Assistir Agora</Button.Title>
                      </Button>
                      <Button className="mt-4 bg-red-700">
                        <Button.Icon icon={IconHeartFilled} />
                        <Button.Title>Adicionar aos Favoritos</Button.Title>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
