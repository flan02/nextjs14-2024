import mongoose, { MongooseError } from "mongoose"
//import { MongoClient, Db } from "mongodb"

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
      //console.log(connection.isConnected);
      console.log("Using existing connection");
      return;
    } else {
      console.log(connection.isConnected);
      const db = await mongoose.connect(MONGODB_URL);
      console.log("New connection to BBDD");
      connection.isConnected = db.connections[0].readyState; // * Set connection state
      //console.log(connection.isConnected);
      return;
    }



  } catch (error: any) {
    if (error instanceof MongooseError) {
      console.log(error);
    }
    throw new Error(error);
  }
};

// TODO : We close the pool of connections to the database when the user's session ends.
export const disconnectFromDb = async () => {
  try {
    if (connection.isConnected) {
      await mongoose.disconnect();
      console.log('Disconnected from database');
      connection.isConnected = null;
    }
  }
  catch (error) {
    console.log('Error al cerrar la conexion a la BBDD', error);

  }
}
