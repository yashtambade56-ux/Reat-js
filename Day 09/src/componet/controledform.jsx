import { useState } from "react";

function Controllform() {
    const [name, setName] = useState("");

    return (
        <>
        <div>
            <form>
                <input type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <p>Your name: {name}</p>
            </form>
        </div>
        </>
    );
}

export default Controllform;