import { ICar } from "@/types/car";

export const getAllCars = async (): Promise<Array<ICar>> => {
  const response = await fetch(`${process.env.API_HOST}/cars`);
  if (!response.ok) throw new Error('Unable to fetch posts'); 
  return response.json()
}
