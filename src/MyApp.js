import { useState } from "react";
import NewButton from "./NewButton";

export default function MyApp() {

    let [color, setColor] = useState('yellow')
    let [data, setdata] = useState('green')

    let handleClick = () => setColor('pink');

    let newColor = () => setdata('red');
    return (
        <>
            <h1>MyApp</h1>
            <NewButton onClick={handleClick} color={color} />
            <NewButton onClick={newColor} color={data}></NewButton>
        </>
    )
}