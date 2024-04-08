import React from 'react';
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getMovies } from '@/lib/data';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { STATUS_CODES } from 'http';

type typeImage = {
  src: String
}

type typeAward = {
  wins: {
    type: Number,
    required: true,
  },
  nominations: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }

}

type typeIMDB = {
  rating: {
    type: Number,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
}

type typeTomatoes = {
  viewer: {
    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
    },
    meter: {
      type: Number,
      required: true,
    },
  },
  fresh: {
    type: Number,
    required: false
  },
  critic: {
    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
    },
    meter: {
      type: Number,
      required: true,
    },
  },
}
interface IMovie {
  _id: {
    type: Number,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  poster: {
    //src: string;
    type: string,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  fullplot: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  released: {
    type: Date,
    required: true,
  },
  directors: {
    type: [String],
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  awards: {
    type: typeAward,
  },
  lastupdated: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  imdb: {
    type: typeIMDB,
    required: true,
  },
  countries: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tomatoes: {
    type: typeTomatoes,
    required: true,
  },
  num_mflix_comments: {
    type: Number,
    required: true,
  },
}








const BlogPage = async () => {


  // ? FETCH DATA FROM A DATABASE
  const movies: IMovie[] = await getMovies();

  //console.log("Movie data in frontend", movies);
  // "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg"
  //console.log(movies[10].poster);
  return (
    <div className={`${styles.container} mt-2`}>
      {

        movies.map((movie: IMovie) => (
          <div key={Math.random() * 1000} className='mt-2'>


            <>
              <h2 className='text-white text-xl font-bold'>{(movie.title as string).length < 30 ? movie.title : (movie.title as string).slice(0, 27) + "..."}</h2>
              <div className={styles.post} >
                <img className='absolute h-[298px] w-[300px]' src={(movie.poster) ? movie.poster : "/image-notfound.png"} alt={`${movie.lastupdated}`} fill="true" sizes="(max-width: 768px) 100vw, 33vw" priority="true" />
              </div>
            </>


            {/* <PostCard post={movie} />*/}
          </div>
        ))
      }
    </div>
  );
};

export default BlogPage;