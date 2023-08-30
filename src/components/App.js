
import React, { useEffect, useState } from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
    let [item, setItem] = useState('');
    let [all, setAll] = useState(fruits);

    useEffect(()=>{
        let update = fruits.filter(val=>(
            val.includes(item)
        ))
        setAll(update)
    }, [item])

  return (
    <div>
        <h1>Search items</h1>
        <input type="text" onChange={(e)=>{setItem(e.target.value)}}></input>
        <ul>
            {
                all&& all.map(val=>(
                    <li>{val}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default App
