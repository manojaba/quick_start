import { car, NewButton } from "./NewButton"


function Button() {
    return (
        <>
            <button>this is a button</button>
        </>
    )
}

function MyApp() {
    return (
        <>
            <h1>this is my app  component</h1>
            <Button />
            <NewButton />
            <p>this is car: {car}</p>



        </>
    )
}

export default MyApp