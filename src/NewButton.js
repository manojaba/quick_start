import { useState } from "react";

export function NewButton() {
    let [count, setcount] = useState(0);
    return (
        <>
            <button onClick={() => setcount(count + 1)}>this is new button's count:{count}</button>

        </>
    )
}


export let car = 'santro';
