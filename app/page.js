    "use client"
import { Appcontext } from "@/component/context";
import { useEffect, useState, useContext} from "react";



export default function Home() {
  const user = useContext(Appcontext)

  const [count, setCount] = useState (100)

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?&appid=b896a739d9b049cd605ddb4daa52a45c&q=abuja&units=metric");
    const data = await response.json();
    console.log(data);
    
  }
  fetchData();
 // console.log(count);
}, [count])// dependancy

  return (
      <main className="text-center">
        <h1>count: {count}</h1>

        <div className="flex justify-center items center gap-4">
        <button onClick={() => (setCount(count + 1))} className="bg-blue-400 border-1 border-gray-700 w-[100px]">Increment</button>
        <button onClick={() => (setCount(count - 1))} className="bg-blue-400 border-1 border-gray-700 w-[100px]">Decrement</button>
        <p>This is the new user : {user}</p>
        </div>
      </main>
  );
}
