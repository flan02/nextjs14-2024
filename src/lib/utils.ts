import mongoose, { MongooseError } from "mongoose"


type Conn = {
  isConnected: number | null
}

const connection: Conn = {
  isConnected: null,
};

const MONGODB_URL = process.env.MONGODB_URL || ""
//console.log("String to database connection is:", MONGODB_URL);

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {  // * If connection is already established, return
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(MONGODB_URL);
    connection.isConnected = db.connections[0].readyState; // * Set connection state
  } catch (error: any) {
    if (error instanceof MongooseError) {
      console.log(error);
    }
    throw new Error(error);
  }
};
