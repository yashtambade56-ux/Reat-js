import { useRef } from "react";

export default function UnControllform() {
    const nameRef = useRef();

    const handleSubmit = (e) => {
        alert(nameRef.current.value);
    };

    return (
        <div>
            <input type="text" ref={nameRef} />
            <button onClick={handleSubmit}>Show Value</button>
        </div>
    );
}