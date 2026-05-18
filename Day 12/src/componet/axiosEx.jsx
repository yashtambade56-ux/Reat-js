import { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosEx() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(res => { setTodo(res.data);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <>
            <h2>Todo List (Axios)</h2>
            {todo.slice(0, 7).map(t => (
                <p key={t.id}>{t.id} - {t.title}</p>
            ))}
        </>
    );
}