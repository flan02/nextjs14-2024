import mongoose, { MongooseError } from "mongoose"

type Conn = {
  isConnected: number | null
}

const connection: Conn = {
  isConnected: null,
};

const MONGO_URL_CONN = process.env.MONGO_URL_CONN || ""

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {  // * If connection is already established, return
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(MONGO_URL_CONN);
    connection.isConnected = db.connections[0].readyState; // * Set connection state
  } catch (error: any) {
    if (error instanceof MongooseError) {
      console.log(error);
    }
    throw new Error(error);
  }
};
