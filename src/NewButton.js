export default function NewButton({ onClick, color }) {
    return (
        <>
            <button style={{ backgroundColor: color }} onClick={onClick}>Click me</button>
        </>
    )
}