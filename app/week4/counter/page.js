"use client" 

import { useState } from "react";
import Counter from "./counter";


export default function ConterPage(){

    const [counter, setCounter] = useState(0);//starting state 0 (default stage)
    const [timeCheck, setTimeCheck] = useState("default time"); // track sth

    const incrementCount = () => {
        // if call this inside the function directly, it would rerender the page
        let currentCounter = counter;
        setCounter(currentCounter + 1); 
        // counter = counter + 1;   <----- don't do this, always use set to change the state
        setTimeCheck("new time")
    }

    return(
        <main className="p-10">
            {/*<p>{counter}</p>
            <button onClick={incrementCount}>Test</button>*/}
            <Counter currentCount={counter} incrementCountFunction={incrementCount}/>
            <p>{timeCheck}</p>
        </main>
    );
}