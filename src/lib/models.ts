import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Award = new mongoose.Schema({
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
}, { _id: false });

const IMDB = new mongoose.Schema({
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
  }
}, { _id: false });

const Tomatoes = new mongoose.Schema({
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
  rotten: {
    type: Number,
    required: false
  },
  lastUpdated: {
    type: Date,
    required: true,
  }
});

const movieSchema = new mongoose.Schema({
  _id: {
    type: Object,
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
    type: Award,
    required: true,
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
    type: IMDB,
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
    type: Tomatoes,
    required: true,
  },
  num_mflix_comments: {
    type: Number,
    required: true,
  },
},
  {
    timestamps: true
  });



/*
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
*/

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Movie = mongoose.models?.Movie || mongoose.model("Movie", movieSchema);
// export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

