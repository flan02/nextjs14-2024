
import { Movie } from "@/lib/models";
import { connectToDb } from "@/lib/utils";

import Error from "next/error";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  console.log('We are in the GET method');
  try {
    connectToDb();
    const movies = await Movie.find().limit(100);
    return NextResponse.json(movies);

  } catch (error) {
    console.log(error);
    throw new Error({ statusCode: 500, title: "Something went wrong!" });
  }
}