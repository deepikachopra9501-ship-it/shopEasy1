import { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert("Name: " + name + "\nEmail: " + email);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>

        </form>
    );
}

export default App;