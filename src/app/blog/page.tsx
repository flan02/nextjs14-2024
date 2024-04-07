import React from 'react';
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getMovies } from '@/lib/data';


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
    type: String,
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
  console.log(movies);
  return (
    <div className={styles.container}>
      {

        movies.map((movie: IMovie) => (
          <div className={styles.post} key={Math.random() * 1000} >
            {/* <PostCard post={movie} />*/}
          </div>
        ))

      }
    </div>
  );
};

export default BlogPage;