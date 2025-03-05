export default function HelloWorld({ name }) {
    return (
        <div>
            <HelloWorldHeader />
            <ParagrafHelloWorld />
        </div>
    )
}

function HelloWorldHeader() {
    const text = "Hello World";
    return (
            <h1>{text.toUpperCase()}</h1>
    )
    
}

function ParagrafHelloWorld() {
    const text = "selamat Belajar react.js";
    return (
        <p>{text.toLowerCase()}</p>
    )
}