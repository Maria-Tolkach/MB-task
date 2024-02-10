import { ICar } from "@/types/car";

const path = "http://localhost:3000/api"

export const getAllCars = async (): Promise<Array<ICar>> => {
  // const response = await fetch(`${process.env.API_HOST}/cars`);
  const response = await fetch(`${path}/cars`);
  if (!response.ok) throw new Error('Unable to fetch posts'); 
  return response.json()
}
