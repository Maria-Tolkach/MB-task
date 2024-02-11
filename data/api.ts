import { ICar } from "@/types/car";

const path = "http://localhost:3001"

export const getAllCars = async (): Promise<Array<ICar>> => {
  // const response = await fetch(`${process.env.API_HOST}/cars`);
  const response = await fetch(`${path}/cars`, { cache: "no-store"});
  if (!response.ok) throw new Error('Unable to fetch posts'); 
  return response.json()
}

export const addCar = async (car: ICar): Promise<ICar> => {
  // const response = await fetch(`${process.env.API_HOST}/cars`, {
  const response = await fetch(`${path}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  });

  const newCar = await response.json();
  return newCar;
}
