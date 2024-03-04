import { ICar } from "@/types/car";

export const getAllCars = async (): Promise<Array<ICar>> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars`, { cache: "no-store"});
    if (!response.ok) throw new Error('Unable to fetch posts'); 
    return response.json()
  } catch {
    throw new Error('Unable to fetch cars');
  }
}

export const addCar = async (car: ICar): Promise<ICar> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    });
  
    const newCar = await response.json();
    return newCar;
  } catch {
    throw new Error('Unable to add a car');
  }
}

export const aditCar = async (car: ICar): Promise<ICar> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    });
  
    const updatedCar = await response.json();
    return updatedCar;
  } catch {
    throw new Error('Unable to edit a car');
  }
}

export const deleteCar = async (carId: string): Promise<void> => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cars/${carId}`, {
      method: "DELETE"
    });
  } catch {
    throw new Error('Unable to delete the car');
  }
}
