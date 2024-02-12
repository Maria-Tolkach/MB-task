import { ICar } from "@/types/car";

export const getAllCars = async (): Promise<Array<ICar>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars`, { cache: "no-store"});
  if (!response.ok) throw new Error('Unable to fetch posts'); 
  return response.json()
}

export const addCar = async (car: ICar): Promise<ICar> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  });

  const newCar = await response.json();
  return newCar;
}

export const aditCar = async (car: ICar): Promise<ICar> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars/${car.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  });

  const updatedCar = await response.json();
  return updatedCar;
}

export const deleteCar = async (carId: string): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars/${carId}`, {
    method: "DELETE"
  });
}
