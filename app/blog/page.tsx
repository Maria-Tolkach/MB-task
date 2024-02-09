import { Card } from "@/components/Card";
import { Metadata } from "next"

async function getData() {
  const response = await fetch(`${process.env.API_HOST}/cars`);
  if (!response.ok) throw new Error('Unable to fetch posts'); 
  return response.json()
}

export const metadata: Metadata = {
  title: 'Cars | Admin App',
}

export default async function Blog() {
  const cars = await getData();
  return <div className="wrapper">
    <h1>Cars Page</h1>
    <ul className="list_wrapper">
      { cars.length > 0 && cars.map((car: any, index: number) => {
        return <Card key={index} car={car}/>
      }) }
    </ul>
  </div>
}
